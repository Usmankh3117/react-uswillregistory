import React, { useEffect, useState } from "react";
import Image from "../Common/Components/image";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { LogoutUser } from "../Auth/ApiCalls/auth";
import { ClearApiByNameAction } from "../ApiCallStatus/Actions/action";
import { getSlugPages } from "../LandingPages/Apicalls/landing";
import { getCookie, setCookie } from "../../Services/cookies";
import { logOutAction } from "../Auth/Actions/action";


function Header(props) {
    const [state, setState] = useState({
        activeTab: "/"
    })
    useEffect(() => {
        if (props.apiCallStatus.apiCallFor === "LogoutUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
            props.history.push('/')
        }
    })
    useEffect(() => {
        props.getSlugPages()
    }, [])
    const logoutUser = () => {
        // setCookie("token", "");
        // setCookie("userType", "");
        // setCookie("userId", "");
        // setCookie("email", "");
        // logOutAction();
        // props.history.push('/')
        props.LogoutUser();
    }
    const getUserName = (email) => {
        var nameMatch = email.match(/^([^@]*)@/);
        var name = nameMatch ? nameMatch[1] : null;
        return name;
    }
    const handleChangeTab = (tabName) => {
        props.history.push(tabName)
        setState({
            activeTab: tabName
        })
    }
    return <section className="header-section">
        <div className="icondiv">
            <div className="header-top-part">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="upper-header">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <Link to={"/"}><Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="header-right-img">
                                <Image name="round-logo-2.png" alt="" />
                            </div>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="header-lower-part">
                <div className="container">
                    <div className="lower-header">
                        <nav className="navbar navbar-default navbar-expand-lg">
                            {/* Collect the nav links, forms, and other content for toggling  */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className={`nav navbar-nav`}>
                                    {props.user.isLogin ?
                                        <li className={state.activeTab === "/profile" ? "active" : ""}>
                                            <Link to="/profile" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/profile")} className="top-menu" > Dashboard</Link>
                                        </li>
                                        :
                                        <li className={state.activeTab === "/" ? "active" : ""}><Link to="/" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/")}>Home </Link></li>
                                    }
                                    <li className={state.activeTab === "/contact-us" ? "active" : ""}><Link data-toggle="collapse" data-target=".navbar-collapse.show" to="/contact-us" onClick={() => handleChangeTab("/contact-us")}>Contact Us</Link></li>
                                    <li className={state.activeTab === "/about-us" ? "active" : ""}><Link to="/about-us" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/about-us")}>About Us</Link></li>
                                    <li><Link to="#">Site Map</Link></li>
                                    <li className={state.activeTab === "/search" ? "active" : ""}><Link to="/search" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/search")}>Dictionary</Link></li>
                                    {/* <li><Link to="#">Terms of Service</Link></li> */}
                                    <li className={state.activeTab === "/privacy" ? "active" : ""}><Link to="/privacy" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/privacy")}>Privacy Notice</Link></li>
                                    {/* <li className={state.activeTab === "/last-will" ? "active" : ""}><Link to="/last-will" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/last-will")}>For Non Profit</Link></li> */}
                                    <li className={state.activeTab === "/faq" ? "active" : ""}><Link to="/faq" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/faq")}>FAQ</Link></li>
                                </ul>
                                {props.user.isLogin ?
                                    <ul class="nav navbar-nav right-navbar-list">
                                        <li class="dropdown ">
                                            <a href="#" class="dropdown-toggle top-menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Profile <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li className={state.activeTab === "/profile" ? "active" : ""}><Link to="/profile" className="top-menu" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/profile")}>Profile</Link></li>
                                                <li className={state.activeTab === "/edit-profile" ? "active" : ""}><Link to="/edit-profile" className="top-menu" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={() => handleChangeTab("/edit-profile")}>Edit Profile</Link></li>
                                                <li><a href="#" className="top-menu" onClick={() => logoutUser()} data-toggle="collapse" data-target=".navbar-collapse.show"> Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul> : ""}
                            </div>
                            {/* <!-- /.navbar-collapse --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    user: {
        isLogin: state.authReducer.isLogin,
        email: state.authReducer.email
    }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getSlugPages: () => dispatch(getSlugPages()),
    LogoutUser: () => dispatch(LogoutUser()),
    logOutAction: () => dispatch(logOutAction()),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)