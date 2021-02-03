import React, { useState, useEffect } from 'react';
import { AuthWrapper } from "./authWrapper";
import { Wrapper } from '../Css/resetPassword';
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
        <Wrapper>
            <AuthWrapper formName="Reset Password" name="Reset" formDescription="Please reset your password below!" >
                <div className="login-form">
                    <form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input id="pass" type="text" className="form-control" name="password" placeholder="Old Password" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input id="pass" type="text" className="form-control" name="new-password" placeholder="New Password" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input id="pass" type="text" className="form-control" name="re-new-password" placeholder="Re-write Password" />
                        </div>
                        {props.apiCallStatus.apiCallFor === "LoginUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                            <div className="loader-img text-center">
                                <img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
                            </div>
                            : ""}
                        <div className="submit-btn">
                            <input id="submit" onClick={(e) => handleSubmit(e)} className="submit" type="submit" value="Sign In" className="form-control" name="submit" />
                        </div>
                    </form>
                </div>
            </AuthWrapper>
        </Wrapper>
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