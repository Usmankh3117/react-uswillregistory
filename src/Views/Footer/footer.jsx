import React, { Fragment, useEffect, useState } from "react";
import Image from "../Common/Components/image";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const ignoreLinks = ["/login", "/signup"]


function Footer(props) {
    const [isIgnore, setIsIgnore] = useState(ignoreLinks.indexOf(window.location.pathname) !== -1)
    props.history.listen((location, action) => {
        if ((ignoreLinks.indexOf(window.location.pathname) !== -1) !== isIgnore) {
            setIsIgnore(ignoreLinks.indexOf(window.location.pathname) !== -1)
        }
    })
    return <Fragment>
        <footer className={`${isIgnore ? "footer1" : "footer"} spad`}>
            <div className="container">
                {isIgnore ?
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="footer-wrapper">
                                <div className="footer__copyright__text">

                                    <ul className="list-group1 list-group-horizontal">
                                        <li className="list-group-item1 footer-icon-signin1 pad-right-15">
                                            <span className="follow-us-on">FOLLOW US ON</span>
                                        </li>
                                        <li className="list-group-item1 footer-store-logo1">
                                            <a href="#"><Image name="twitter.png" alt="img1" /></a>
                                        </li>
                                        <li className="list-group-item1 footer-store-logo1">
                                            <a href="#"><Image name="fb.png" alt="img1" /></a>
                                        </li>
                                        <li className="list-group-item1 footer-store-logo1">
                                            <a href="#"><Image name="google.png" alt="img1" /></a>
                                        </li>
                                        <li className="list-group-item1 footer-store-logo1">
                                            <a href="#"> <Image name="insta.png" alt="img1" /></a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="footer__copyright__payment">
                                    <ul className="list-group1 list-group-horizontal">
                                        <li className="list-group-item1 footer-icon-signin1 pad-right-15">
                                            <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                                        </li>
                                        <li className="list-group-item1 footer-icon-signin1 footer-form">
                                            <form action="#">
                                                <input type="text" placeholder="Enter your Email" />
                                                <button type="submit" className="footer-submit-btn1"><i
                                                    className="fa fa-arrow-right"></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <Image name="round-logo-2.png" alt="logo" />
                                </div>
                                <div className="footer__widget">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate soluta illum
                                    delectus, deserunt, commodi dignissimos molestiae itaque magni voluptate officiis. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate soluta illum
                                delectus, deserunt, commodi dignissimos.</p>
                                </div>
                                <ul className="list-group list-group-horizontal">
                                    <li className="list-group-item footer-store-logo">
                                        <Image name="twitter.png" alt="img1" />
                                    </li>
                                    <li className="list-group-item footer-store-logo">
                                        <Image name="fb.png" alt="img1" />
                                    </li>
                                    <li className="list-group-item footer-store-logo">
                                        <Image name="google.png" alt="img1" />
                                    </li>
                                    <li className="list-group-item footer-store-logo">
                                        <Image name="insta.png" alt="img1" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 footer-list-div">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <div className="footer__widget">
                                        <h5 className="footer-heading">OUR SERVICES</h5>
                                        <ul>
                                            <li><Link to="/">About</Link></li>
                                            <li><Link to="/">Careers</Link></li>
                                            <li><Link to="/">Security</Link></li>
                                            <li><Link to="/">Contact Us</Link></li>
                                            <li><Link to="/">Press</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <div className="footer__widget">
                                        <h5 className="footer-heading">EXPLORE</h5>
                                        <ul>
                                            <li><Link to="/">Our Products</Link></li>
                                            <li><Link to="/">Blog</Link></li>
                                            <li><Link to="/">Glossary</Link></li>
                                            <li><Link to="/">Help Center</Link></li>
                                            <li><Link to="/">Community forum</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <div className="footer__widget">
                                        <h5 className="footer-heading">LEGAL </h5>
                                        <ul>
                                            <li><Link to="/">Terms & Conditions</Link></li>
                                            <li><Link to="/">Privacy Notice</Link></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <div className="footer__widget">
                                        <h5 className="footer-heading">FOR NONPROFITS</h5>
                                        <ul>
                                            <li><Link to="/">For nonprofits</Link></li>
                                            <li><Link to="/">Request a demo</Link></li>
                                            <li><Link to="/">Resources</Link></li>
                                            <li><Link to="/">Fundraising during</Link></li>
                                            <li><Link to="/">Coronavirus</Link></li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>}
            </div>
        </footer>
        <footer style={{ backgroundColor: "#404044" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 copyrights">
                        <p>Copyright &copy;2019-2020 US Will Registry Co, a Delaware Public Benifits Corporation. All rights
                        reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
}
const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    user: { isLogin: state.authReducer.isLogin, }
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)