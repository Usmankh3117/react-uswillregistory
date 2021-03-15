import React, { useEffect, useState } from "react";
import Image from "../Common/Components/image";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { LogoutUser } from "../Auth/ApiCalls/auth";
import { ClearApiByNameAction } from "../ApiCallStatus/Actions/action";
import { getSlugPages } from "../LandingPages/Apicalls/landing";
import { getCookie } from "../../Services/cookies";

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
        props.LogoutUser();
    }
    const getUserName = (email) => {
        var nameMatch = email.match(/^([^@]*)@/);
        var name = nameMatch ? nameMatch[1] : null;
        return name;
    }
    const handleChangeTab = (tabName) => {
        setState({
            activeTab: tabName
        })
    }
    return <header>
        <nav className="navbar navbar-default top visible-lg-block">
            <div className="container">

                <div className="navbar-header col-md-4">
                    <a className="navbar-brand" href="#">
                        <Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" /></a>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-default bottom">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand visible-xs-block" href="#"> <Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" /></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        {props.user.isLogin ? <React.Fragment>
                            <li>
                                {/* <Image name="user_img.png" alt="img" className="top-name-img" /> */}
                                <Link to="/edit-profile" className="top-menu">{getUserName(getCookie("email"))}</Link>
                            </li>
                            <li>
                                <a href="#" onClick={() => logoutUser()} className="top-menu">Logout</a>
                            </li>
                        </React.Fragment> : <React.Fragment>
                            <li className={state.activeTab === "/" ? "active" : ""}><Link to="/" onClick={() => handleChangeTab("/")}>Home <span className="sr-only">(current)</span></Link></li>
                            <li className={state.activeTab === "/contact-us" ? "active" : ""}><Link to="/contact-us" onClick={() => handleChangeTab("/contact-us")}>Contact Us</Link></li>
                            <li className={state.activeTab === "/about-us" ? "active" : ""}><Link to="/about-us" onClick={() => handleChangeTab("/about-us")}>About Us</Link></li>
                            <li><Link to="#">Site Map</Link></li>
                            <li><Link to="#">Dictionary</Link></li>
                            <li><Link to="#">Terms of Service</Link></li>
                            <li className={state.activeTab === "/privacy" ? "active" : ""}><Link to="/privacy" onClick={() => handleChangeTab("/privacy")}>Privacy Notice</Link></li>
                            <li className={state.activeTab === "/last-will" ? "active" : ""}><Link to="/last-will" onClick={() => handleChangeTab("/last-will")}>For Non Profit</Link></li>
                            <li className={state.activeTab === "/faq" ? "active" : ""}><Link to="/faq" onClick={() => handleChangeTab("/faq")}>FAQ</Link></li></React.Fragment>}
                    </ul>
                    <ul className="nav navbar-nav navbar-right visible-lg-block">
                        <li><Link className="navbar-brand" to="/" onClick={() => handleChangeTab("/")}><Image name="round-logo-2.png" alt="" /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header >


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
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)



    // return <section className="header-section">
                    //     <div className="icondiv">
                        //         <div className="header-top-part">
                            //             <div className="container">
                                //                 <div className="upper-header">
                                    //                     <div className="row">
                                        //                         <Link to="/" className="col-lg-4 col-md-4 col-sm-6">
                                            //                             <Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" />
    //                         </Link>
    //                         <div className="col-lg-8 col-md-8 col-sm-6">
                                            //                             <div className="logo">
                                                //                                 <Link to="/" className="header-right-img">
                                                    //                                     <Image name="round-logo-2.png" alt="" />
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="header-lower-part">
                            //             <div className="container">
                                //                 <div className="lower-header">
                                    //                     <ul className={`list-group ${props.user.isLogin ? "right" : ""}`}>
                                        //                         {props.user.isLogin ? <React.Fragment>
                                            //                             {/* <li className="list-group-item border-right">
    //                                 <Image name="user_img.png" alt="img" className="top-name-img" />
    //                                 <select name="profile"  value={getCookie("email")} className="profile-dropdown">
    //                                     <option value={getCookie("email")}>Edit Profile</option>
    //                                 </select>
    //                             </li> */}
    //                             <li className="list-group-item border-right">
                                                //                                 <Image name="user_img.png" alt="img" className="top-name-img" />
    //                                 <Link to="/edit-profile" className="top-menu">{getUserName(getCookie("email"))}</Link>
    //                             </li>
    //                             <li className="list-group-item">
                                                //                                 <a onClick={() => logoutUser()} className="top-menu">Logout</a>
    //                             </li>
    //                         </React.Fragment> :
    //                             <React.Fragment>
    //                                 <li className="list-group-item">
    //                                     <Link to="/" className="top-menu active-menu">Home</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/contact-us" className="top-menu">Contact us Pages</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/about-us" className="top-menu">About Us</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/" className="top-menu">Site Map</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/" className="top-menu">Dictionary</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/privacy" className="top-menu">Terms of Service</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/privacy" className="top-menu">Privacy Notice</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/faq" className="top-menu">For Non Profit</Link>
    //                                 </li>
    //                                 <li className="list-group-item">
    //                                     <Link to="/faq" className="top-menu">FAQ</Link>
    //                                 </li>
    //                             </React.Fragment>}
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>