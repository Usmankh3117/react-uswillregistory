import React, { useState, useEffect } from 'react';
import { AuthWrapper } from "./authWrapper";
import { connect } from 'react-redux';
import { resetPassword, validateToken } from "../ApiCalls/auth";
import { ApiClearAction } from "../../ApiCallStatus/Actions/action";
import Swal from 'sweetalert2'
import cloneDeep from 'lodash.clonedeep';
const defaultState = {
    password: "",
    confirmPassword: "",
    isValidaToken: false,
    message: "",
    messageType: "",
    messageFor: ""
}
var isCallValidateToken = false;
function ResetPassword(props) {
    const [state, setState] = useState(defaultState);
    useEffect(() => {
        if (!isCallValidateToken && props.apiCallStatus.isStarted.indexOf("validateToken") === -1) {
            isCallValidateToken = true;
            props.validateToken(props.match.params.id)
        }
        if (props.apiCallStatus.apiCallFor === "resetPassword" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
            props.ApiClearAction();
            Swal.fire(
                'Password Updated!',
                'We sent you an email with your user name and password. Please check your mailbox.',
                'success'
              )
            props.history.push('/login')
        }
        if (props.apiCallStatus.apiCallFor === "validateToken" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
            let cloneState = { ...state };
            cloneState.isValidaToken = true;
            setState(cloneState);
            props.ApiClearAction();
        }
        if (props.apiCallStatus.apiCallFor === "validateToken" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
            let cloneState = { ...state };
            cloneState.isValidaToken = false;
            setState(cloneState);
            props.ApiClearAction();
            props.history.push('/login')
        }
    });
    const handleStateChange = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        let cloneState = { ...state };
        cloneState[id] = val;
        setState(cloneState);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = validateForm();
        if (isValid) {
            props.resetPassword({ password: state.password, token: props.match.params.id })
        }
    }

    const validateForm = () => {
        var form = document.getElementsByClassName('needs-validation')[0];
        let isValid = true;
        if (form.checkValidity() === false) {
            isValid = false;
            form.classList.add('was-validated');
        } else if (state.password !== state.confirmPassword) {
            let cloneState = cloneDeep(state);
            cloneState.message = "Password mismatch";
            cloneState.messageType = "danger";
            cloneState.messageFor = 'resetPassword';
            setState(cloneState);
            isValid = false;
        }
        return isValid;
    }
    return (
        <AuthWrapper>
            <div className="authHolder resetPassScreen reset-wrap">
                <div className="formHolder">
                    <h1>Reset your Password</h1>
                    {/* <p>Enter your email address below and we'll send you a secure link to reset your password.</p> */}
                    {state.isValidaToken ?
                        <form className="authMeshForm resetPassForm needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
                            <div className="form-group floating-label-wrap">
                                <input type="password" className="form-control" id="password" placeholder="Password" value={state.password} onChange={(e) => handleStateChange(e)} required />
                                <label className="foating-labels-sty">Password</label>
							<span className="animated-border"></span>
                            </div>
                            <div className="form-group floating-label-wrap mb-0">
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={state.confirmPassword} onChange={(e) => handleStateChange(e)} required />
                                <label className="foating-labels-sty">Repeat Password</label>
							    <span className="animated-border"></span>
                            </div>
                            {props.apiCallStatus.apiCallFor === "resetPassword" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                <div className="loader-img text-center">
                                    <img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
                                </div>
                                : ""}
                            {state.messageFor === "resetPassword" && state.messageType !== "" && state.messageFor !== "" ?
                                <div className={"alert alert-" + state.messageType}>
                                    {state.message}
                                </div>
                                : ""}
                            {props.apiCallStatus.apiCallFor === "resetPassword" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed ?
                                <div className="alert alert-danger">
                                    {props.apiCallStatus.message}
                                </div>
                                : ""}
                            {props.apiCallStatus.apiCallFor === "resetPassword" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                <div className="alert alert-success">
                                    {props.apiCallStatus.message}
                                </div>
                                : ""}
                            <div clasName="formBtnHolder">
                                <button className="btn btn-secondary d-block text-center w-100" onClick={(e) => handleSubmit(e)}>Upate password</button>
                            </div>
                        </form> : <div className="loader-img text-center">
                            <img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
                        </div>}
                </div>
            </div>
        </AuthWrapper>
    );
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    validateToken: (token) => dispatch(validateToken(token)),
    resetPassword: (data) => dispatch(resetPassword(data)),
    ApiClearAction: () => dispatch(ApiClearAction())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPassword)