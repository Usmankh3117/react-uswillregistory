import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { Wrapper } from '../Css/verifyAccount';
import { connect } from 'react-redux';
import Image from '../../Common/Components/image';
import { verifyUser } from "../ApiCalls/auth";
import BackgroundImage from '../../../assets/img/Sign-In_background-img.png';

function VerifyAccount(props) {
    useEffect(() => {
        props.verifyUser(props.match.params.id)
    }, []);
    // http://localhost:3001/verify/4b2f7e13a63ef2c4f2e33fc5dfa90271e4beeeff
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <React.Fragment>
            <AuthWrapper formName="Verification" name="Account" formDescription="Please Verify your account" >
                <div className="login-form">
                    <form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
                        {props.apiCallStatus.apiCallFor === "verifyUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                            <div className="loader-img text-center">
                                <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='' />
                            </div>
                            : ""}
                        {props.apiCallStatus.apiCallFor === "verifyUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                            <p>Your email has been verified. Please <Link to="/login">login</Link> to write free online Will</p>
                            : ""}

                    </form>
                </div>
            </AuthWrapper>
            <section class="sign-in-section">
                <div class="container">
                    <div class="row">
                        <div class="heading-section">
                            <h1 class="heading"><span class="bold">Account</span> Verification</h1>

                        </div>
                    </div>
                    <div class="row mg-top-30"></div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 login-left-outer-div1 cc-reset-shadow" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover" }}>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 login-form-div">
                                <div class="row mg-top-top-extra-verify"></div>
                                <div class="form-heading">
                                    <h2 style={{ color: "#033168" }}>Verification</h2>
                                    <p> Please Verify your account</p>
                                </div>
                                <div class="login-form">
                                    <form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
                                        {props.apiCallStatus.apiCallFor === "verifyUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                            <div className="loader-img text-center">
                                                <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='' />
                                            </div>
                                            : ""}
                                        {props.apiCallStatus.apiCallFor === "verifyUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                            <p>Your email has been verified. Please <Link to="/login">login</Link> to write free online Will</p>
                                            : ""}

                                    </form>
                                    {/* <form action="">

                                        <div class="submit-btn">
                                            <input id="submit" class="submit" type="submit" value="Verify Account" class="form-control" name="submit" />
                                        </div>

                                    </form> */}

                                </div>
                                <div style="margin-bottom: 22px;" class="row mg-top-bottom-extra-verify"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="row mg-top-30"></div>
            <div class="row mg-top-30"></div>
            <div class="row mg-top-30"></div>
        </React.Fragment >
    );
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    verifyUser: (data) => dispatch(verifyUser(data))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VerifyAccount)