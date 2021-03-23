import React, { useEffect } from "react";
import Image from '../../Common/Components/image';
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import { connect } from 'react-redux';
import { Style } from '../Css/profile';

function ProfileContainer(props) {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const redirectToUrl = (url) => {
        props.history.push(url);
    }
    return <React.Fragment>
        <Style />
        <section className="profile-section">
            <div className="container">
                <div className="row mg-top-50"></div>
                <div className="row cc-width-row">
                    <div className="col-md-12">
                        <div className="conatiner">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cc-col-profile " onClick={() => redirectToUrl('/form')}>
                                        <Image name="living_with_forms-1.png" className="image-main" alt="profile-img" style={{ width: "40px" }} />
                                        <Image name="living_with_forms.png" className="image-hover" alt="profile-img" style={{ width: "40px" }} />
                                        <div className="main-text-cc">Living Will Forms</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cc-col-profile ">
                                        <Image name="self_proving_form.png" className="image-main" alt="profile-img" style={{ width: "40px" }} />
                                        <Image name="self_proving_form-1.png" className="image-hover" alt="profile-img" style={{ width: "40px" }} />
                                        <div className="main-text-cc">Self Proving Affidavit Form</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cc-col-profile">
                                        <Image name="witness_form.png" className="image-main" alt="profile-img" style={{ width: "40px" }} />
                                        <Image name="witness_form-1.png" className="image-hover" alt="profile-img" style={{ width: "40px" }} />
                                        <div className="main-text-cc">Witness Form</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cc-col-profile ">
                                        <Image name="download_form.png" className="image-main" alt="profile-img" style={{ width: "40px" }} />
                                        <Image name="download_form-1.png" className="image-hover" alt="profile-img" style={{ width: "40px" }} />
                                        <div className="main-text-cc">Download Will documents</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mg-top-100"></div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8 center">
                        <h1>
                            <p style={{ color: "#747474", fontWeight: "200" }}> <span style={{ fontWeight: "500" }} className="bold blue">Complete</span>
                         &nbsp;your will form
                        </p>
                        </h1>
                        <div style={{ marginTop: "30px" }} className="row"></div>
                        <button className="click-here-btn" onClick={() => redirectToUrl('/form')}>Click Here</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                </div>
                <div className="row mg-top-50"></div>
            </div>
        </section>
    </React.Fragment>;
}


const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    user: { isLogin: state.authReducer.isLogin, }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer)
