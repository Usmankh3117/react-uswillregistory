import { Fragment } from "react";
import Image from "../Common/Components/image";

export default function Footer(props) {
    return <Fragment>
        <footer class="footer spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="footer__about">
                            <div class="footer__about__logo">
                                <Image name="footer-logo1.png" alt="logo" />
                            </div>
                            <div class="footer__widget">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate soluta illum delectus, deserunt, commodi dignissimos molestiae itaque magni voluptate officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate soluta illum delectus, deserunt, commodi dignissimos molestiae itaque magni voluptate officiis.</p>
                            </div>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item footer-store-logo">
                                    <Image name="twitter.png" alt="img1" />
                                </li>
                                <li class="list-group-item footer-store-logo">
                                    <Image name="fb.png" alt="img1" />
                                </li>
                                <li class="list-group-item footer-store-logo">
                                    <Image name="google.png" alt="img1" />
                                </li>
                                <li class="list-group-item footer-store-logo">
                                    <Image name="insta.png" alt="img1" />
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 footer-list-div">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h5 class="footer-heading">OUR SERVICES</h5>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h5 class="footer-heading">EXPLORE</h5>
                                    <ul>
                                        <li><a href="#">Our Products</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Glossary</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Community forum</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h5 class="footer-heading">LEGAL </h5>
                                    <ul>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Notice</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h5 class="footer-heading">FOR NONPROFITS</h5>
                                    <ul>
                                        <li><a href="#">For nonprofits</a></li>
                                        <li><a href="#">Request a demo</a></li>
                                        <li><a href="#">Resources</a></li>
                                        <li><a href="#">Fundraising during</a></li>
                                        <li><a href="#">Coronavirus</a></li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </footer>
        <footer style="background-color: #1a1919;">
            <div class="container">
                <div class="row">

                    <div class="col-md-12 copyrights">
                        <p>Copyright &copy;2019-2020 US Will Registry Co, a Delaware Public Benifits Corporation. All rights reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
}