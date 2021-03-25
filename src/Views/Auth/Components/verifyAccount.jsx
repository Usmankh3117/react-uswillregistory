import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from '../Css/verifyAccount';
import { connect } from 'react-redux';
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Image from '../../Common/Components/image';
import { verifyUser } from "../ApiCalls/auth";
import BackgroundImage from '../../../assets/img/Sign-In_background-img.png';
import Swal from 'sweetalert2';

function VerifyAccount(props) {
    useEffect(() => {
        // props.verifyUser(props.match.params.id)
        if (props.apiCallStatus.apiCallFor === "verifyUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
            let msg = '';
            if (typeof props.apiCallStatus.message === 'object') {
                if (props.apiCallStatus.message[0]) {
                    msg = props.apiCallStatus.message[0];
                } else {
                    for (const property in props.apiCallStatus.message) {
                        if (props.apiCallStatus.message[property][0] !== "") {
                            msg = props.apiCallStatus.message[property][0];
                            break;
                        }
                    }
                }
            } else {
                msg = props.apiCallStatus.message;
            }
            Swal.fire("Error!", msg, "error");
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
        }
        if (props.apiCallStatus.apiCallFor === "verifyUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
            // setState(defaultState)
            Swal.fire("Success!", "Your account has been verified succesfully", "success");
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
            // let redirectUrl = '/profile';
            // props.history.push(redirectUrl)
        }
    });
    return (
        <Wrapper>
            <section className="sign-in-section">
                <div className="container">
                    <div className="row">
                        <div className="heading-section">
                            <h1 className="heading"><span className="bold">Account</span> Verification</h1>

                        </div> 
                    </div>
                    <div className="row mg-top-30"></div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 login-left-outer-div1 cc-reset-shadow" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover" }}>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 login-form-div">
                                <div className="row mg-top-top-extra-verify"></div>
                                <div className="form-heading">
                                    <h2 style={{ color: "#033168" }}>Verification</h2>
                                    <p> Please Verify your account</p>
                                </div>
                                <div className="login-form">
                                    {props.apiCallStatus.apiCallFor === "verifyUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                        <div className="loader-img text-center">
                                            <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='' />
                                        </div>
                                        : ""}
                                    {props.apiCallStatus.apiCallFor === "verifyUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                        <p>Your email has been verified. Please <Link to="/login">login</Link> to write free online Will</p>
                                        : ""}
                                    <div className="submit-btn">
                                        <input onClick={() => props.verifyUser(props.match.params.id)} className="submit" type="submit" value="Verify Account" name="submit" />
                                    </div>
                                    {/* <form action="">

                                        <div className="submit-btn">
                                            <input id="submit" className="submit" type="submit" value="Verify Account" className="form-control" name="submit" />
                                        </div>

                                    </form> */}

                                </div>
                                <div style={{ marginBottom: "22px" }} className="row mg-top-bottom-extra-verify"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row mg-top-30"></div>
            <div className="row mg-top-30"></div>
            <div className="row mg-top-30"></div>
        </Wrapper >
    );
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    verifyUser: (data) => dispatch(verifyUser(data)),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VerifyAccount)