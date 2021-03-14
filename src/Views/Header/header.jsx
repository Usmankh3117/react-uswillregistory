import React, { useEffect } from "react";
import Image from "../Common/Components/image";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { LogoutUser } from "../Auth/ApiCalls/auth";
import { ClearApiByNameAction } from "../ApiCallStatus/Actions/action";
import { getSlugPages } from "../LandingPages/Apicalls/landing";
import { getCookie } from "../../Services/cookies";

function Header(props) {
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
    return <header>
        <nav class="navbar navbar-default top visible-lg-block">
            <div class="container">

                <div class="navbar-header col-md-4">
                    <a class="navbar-brand" href="#">
                        <Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" /></a>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-default bottom">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand visible-xs-block" href="#"> <Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" /></a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Site Map</a></li>
                        <li><a href="#">Dictionary</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Notice</a></li>
                        <li><a href="#">For Non Profit</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right visible-lg-block">
                        <li><a class="navbar-brand" href="#"><Image name="round-logo-2.png" alt="" /></a></li>
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
    //                                 <select name="profile"  value={getCookie("email")} class="profile-dropdown">
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