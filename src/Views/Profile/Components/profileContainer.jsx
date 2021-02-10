import React from "react";
import Image from '../../Common/Components/image';
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import { connect } from 'react-redux';
import { Wrapper } from '../Css/profile';

function ProfileContainer(props) {
    const redirectToEdit = () => {
        props.history.push('/edit-profile');
    }
    return <Wrapper className="profile-section">
        <div className="container">
            <div className="row mg-top-50"></div>

            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 profile-section-div">
                            <div className="active-profile-div">
                                <Image name="living_with_forms.png" alt="profile-img" className="profile-section-img" />
                                <span>Living Will forms</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 profile-section-div">
                            <div className="not-active-profile-div">
                                <Image name="self_proving_form.png" alt="profile-img" className="profile-section-img" />
                                <span>Self Proving affidavit form</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 profile-section-div">
                            <div className="not-active-profile-div">
                                <Image name="witness_form.png" alt="profile-img" className="profile-section-img" />
                                <span>Witness form</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 profile-section-div">
                            <div className="not-active-profile-div">
                                <Image name="download_form.png" alt="profile-img" className="profile-section-img" />
                                <span>Download Will documents</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>

            <div className="row mg-top-100"></div>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-8 col-md-8 col-sm-8 center">
                    <h1 ><span className="bold blue">Complete</span> your will form</h1>
                    <div className="row mg-top-20"></div>
                    <button className="click-here-btn" onClick={()=>redirectToEdit()}>Click Here</button>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>
            <div className="row mg-top-50"></div>
        </div>
    </Wrapper>;
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
