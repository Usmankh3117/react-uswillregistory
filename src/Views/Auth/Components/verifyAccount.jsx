import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { connect } from 'react-redux';
import { verifyUser } from "../ApiCalls/auth";

function VerifyAccount(props) {
    useEffect(() => {
        props.verifyUser(props.match.params.userId)
    }, []);


    return (
        <AuthWrapper>
            <div className="authHolder resetPassScreen">
                <div className="formHolder">

                    {props.apiCallStatus.isStarted.indexOf("verifyUser") !== -1 ?
                        <div className="loader-img text-center">
                            <img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
                        </div> : props.apiCallStatus.apiCallFor === "verifyUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                            <React.Fragment>
                                <h1>Account Activated</h1>
                                <p>Login to your main dashboard below to start using Mesh:</p>
                                <div clasName="formBtnHolder">
                                    <Link to="/login" className="btn btn-secondary d-block text-center w-100" >Login</Link>
                                </div>
                            </React.Fragment> : props.apiCallStatus.apiCallFor === "verifyUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed ?
                                <React.Fragment>
                                    <h1>Error in activation</h1>
                                    <div className="alert alert-danger">
                                        {props.apiCallStatus.message}
                                    </div>
                                </React.Fragment>
                                : ""}
                </div>
            </div>
        </AuthWrapper >
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