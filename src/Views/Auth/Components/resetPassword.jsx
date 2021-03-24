import React, { useState, useEffect } from 'react';
import { AuthWrapper } from "./authWrapper";
import { Wrapper } from '../Css/resetPassword';
import { connect } from 'react-redux';
import { resetPassword } from "../ApiCalls/auth";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Image from '../../Common/Components/image';
import Swal from 'sweetalert2'
const defaultState = {
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
    message: "",
    messageType: "",
    messageFor: ""
}
function ResetPassword(props) {
    const [state, setState] = useState(defaultState);
    useEffect(() => {
        if (props.apiCallStatus.apiCallFor === "resetPassword" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
            Swal.fire(
                'Password Updated!',
                'We sent you an email with your user name and password. Please check your mailbox.',
                'success'
            )
            props.history.push('/login');
        }
    });
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const email = urlParams.get('email');
        if (token && email) {
            setState({
                ...state,
                email,
                token
            })
        }
    }, [])
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
            props.resetPassword({ password: state.password, token: state.token, email: state.email })
        }
    }

    const validateForm = () => {
        var form = document.getElementsByClassName('needs-validation')[0];
        let isValid = true;
        if (form.checkValidity() === false) {
            isValid = false;
            form.classList.add('was-validated');
        } else if (state.password !== state.confirmPassword) {
            let cloneState = { ...state };
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
            <section className="sign-in-section">
                <div className="container  ">
                    <div className="row">
                        <div className="heading-section">
                            <h2><span className="bold">Reset</span> Password</h2>
                        </div>
                    </div>
                    <div className="row mg-top-30 "></div>
                    <div className="row  ">
                        <div className="col-lg-12 col-md-12 col-sm-12  mg-bottom-30">
                            <div className="row ">
                                <div className="col-lg-12 col-md-12 col-sm-12 cc-reset-shadow for-bg-shadow">
                                    <div className="col-lg-6 col-md-6 col-sm-6" style={{ padding: "0px" }}>
                                        <Image className="img" name="signin-image-large.png" alt="signup-img" style={{ width: "100%", borderRadius: "25px 0px 0px 25px" }} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 login-form-div">
                                        <div className="row mg-top-top-extra-reset"></div>
                                        <div className="form-heading">
                                            
                                            <p> Please reset your password below!</p>
                                        </div>
                                        <div className="login-form ">
                                            <form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                                    <input id="email" type="text" className="form-control" name="email" placeholder="Email" defaultValue={state.email} readOnly />
                                                </div>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                                    <input id="password" type="text" className="form-control" name="new-password" placeholder="New Password" value={state.password} onChange={(e) => handleStateChange(e)} />
                                                </div>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                                    <input id="confirmPassword" type="text" className="form-control" name="re-new-password" placeholder="Re-write Password" value={state.confirmPassword} onChange={(e) => handleStateChange(e)} />
                                                </div>
                                                {props.apiCallStatus.apiCallFor === "resetPassword" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                                    <div className="loader-img text-center">
                                                        <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='' />
                                                    </div>
                                                    : ""}
                                                {/* <div className="submit-btn">
                                                    <input style={{ fontSize: "18px" }} onClick={(e) => handleSubmit(e)} id="submit" type="submit" value="Reset Password" className="submit " name="submit" />
                                                </div> */}
                                                <div className="submit-btn">
												<button type="submit" style={{ fontSize: "18px" }} onClick={(e) => handleSubmit(e)}className="submit">Reset Password</button>
											</div>
                                            </form>

                                        </div>
                                        <div className="row mg-top-bottom-extra-reset"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row mg-top-30"></div>
            <div className="row mg-top-30"></div>
            <div className="row mg-top-30"></div>
        </Wrapper>
    );
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    resetPassword: (data) => dispatch(resetPassword(data)),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPassword)