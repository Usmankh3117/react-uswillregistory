import React, { useEffect } from "react";
import Image from "../Common/Components/image";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { LogoutUser } from "../Auth/ApiCalls/auth";
import { ClearApiByNameAction } from "../ApiCallStatus/Actions/action";

function Header(props) {
    useEffect(() => {
        if (props.apiCallStatus.apiCallFor === "LogoutUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
            props.history.push('/')
        }
    })
    const logoutUser = () => {
        props.LogoutUser();
    }
    return <section className="header-section">
        <div className="icondiv">
            <Link to="/" className="header-right-img">
                <Image name="round-logo-2.png" alt="" />
            </Link>

            <div className="header-top-part">
                <div className="container">
                    <div className="upper-header">
                        <div className="row">
                            <Link to="/" className="col-lg-4 col-md-4 col-sm-6">
                                <Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" />
                            </Link>
                            <div className="col-lg-8 col-md-8 col-sm-6">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="header-lower-part">
                <div className="container">
                    <div className="lower-header">
                        <ul className={`list-group ${props.user.isLogin ? "right" : ""}`}>
                            {props.user.isLogin ? <React.Fragment>
                                <li className="list-group-item border-right">
                                    <Image name="user_img.png" alt="img" className="top-name-img" />
                                    <select name="profile" id="profile" class="profile-dropdown">
                                        <option value="Name">Name</option>
                                        <option value="Name2">Name2</option>
                                        <option value="Name3">Name3</option>
                                    </select>
                                </li>
                                <li className="list-group-item">
                                    <a onClick={() => logoutUser()} className="top-menu">Logout</a>
                                </li>
                            </React.Fragment> :
                                <React.Fragment>
                                    <li className="list-group-item">
                                        <Link to="/" className="top-menu active-menu">Home</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/contact-us" className="top-menu">Contact us Pages</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/about-us" className="top-menu">About Us</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/" className="top-menu">Site Map</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/" className="top-menu">Dictionary</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/privacy" className="top-menu">Terms of Service</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/privacy" className="top-menu">Privacy Notice</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/faq" className="top-menu">For Non Profit</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/faq" className="top-menu">FAQ</Link>
                                    </li>
                                </React.Fragment>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    user: { isLogin: state.authReducer.isLogin, }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    LogoutUser: () => dispatch(LogoutUser()),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)