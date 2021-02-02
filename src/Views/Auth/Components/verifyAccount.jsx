import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { Wrapper } from '../Css/verifyAccount';
import { connect } from 'react-redux';
import { verifyUser } from "../ApiCalls/auth";

function VerifyAccount(props) {
    useEffect(() => {
        props.verifyUser(props.match.params.userId)
    }, []);


    return (
        <Wrapper>
            <AuthWrapper formName="Verification" name="Account" formDescription="Please Verify your account" >
                <div className="login-form">
                    <form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
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
    verifyUser: (data) => dispatch(verifyUser(data))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VerifyAccount)