import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { Wrapper } from '../Css/verifyAccount';
import { connect } from 'react-redux';
import Image from '../../Common/Components/image';
import { verifyUser } from "../ApiCalls/auth";

function VerifyAccount(props) {
    useEffect(() => {
        debugger
        props.verifyUser(props.match.params.id)
    }, []);
    // http://localhost:3001/verify/4b2f7e13a63ef2c4f2e33fc5dfa90271e4beeeff
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Wrapper>
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