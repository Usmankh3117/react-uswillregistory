import React, { Fragment } from 'react';
import { Wrapper } from "../../Css/aboutus";
import { Style } from "../../Css/index";
import Image, { Icon } from "../../../Common/Components/image";
import { Link } from 'react-router-dom';

export default function AboutUs(props) {
    return <Wrapper>
        <Style />
        <GetStarted />
        <Welcome />
        <WithIcon />
        <MakeWill />
    </Wrapper>
}

function GetStarted(props) {
    return <section className="get-started">
        <div className="started-img">
            <Image name="about-us-img.jpg" alt="contact us img" />
            <div className="banner-text">
                <div className="banner-heading">
                    <h1>ABOUT US</h1>
                </div>
                <div className="banner-details">
                    <p>Know about us! Please read briefly then</p>
                </div>
            </div>
        </div>
    </section>
}

function Welcome(props) {
    return <section className="welcome-section">
        <div className="container">
            <div className="w-heading">
                <h1>Welcome to the Us will registry</h1>
            </div>
            <div className="w-detail">
                <span>Detail</span>
            </div>
            <div className="w-mini-heading">
                <h1>About The U.S. Will Registry</h1>
            </div>
            <div className="w-mini-detail">
                <p>Whether you have questions or you just like to say hello</p>
            </div>
            <div className="row" style={{ marginTop: "5%" }}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="row" style={{ marginTop: "20%" }} ></div>
                        <span className="left-side-text">The US Will Registry Provides the Public with a Means of Find a Missing Last Will</span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{ borderLeft: "2px solid #e0e0e0" }} >
                        <span class="right-side-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Dignissimos nam harum dolorem consequuntur modi incidunt, dolores quae repellendus quo?
                        Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.repellendus quo?
                            Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

function WithIcon(props) {
    return <section className="with-icon-section">
        <div className="container" style={{ marginBottom: "75px" }}>
            <div class="container ">
                <div class="container container-bg-cc">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <div class="cc-container-prime ">
                                <div class="icon-shell">
                                    <Icon name="h_icon_find.png" alt="" style={{ width: "45px", paddingRight: "5px" }} />
                                </div>
                                <h2 class="cc-text-prime">Last Will Search</h2>
                            </div>
                        </div>
                        <div class="col-md-6 cc-col-border">
                            <div class="cc-text-card" >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, provident repellendus quas enim perspiciatis, similique esse quae at earum ipsum maxime excepturi itaque voluptate sequi doloribus officiis, non consequuntur debitis?
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row" style={{ marginTop: "5%" }}></div>

            <div class="container ">
                <div class="container container-bg-cc">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <div class="cc-container-prime">
                                <div class="icon-shell">
                                    <Icon name="h_icon_edit.png" style={{ width: "40px" }} alt="" />
                                </div>
                                <h2 class="cc-text-prime">Will Registration</h2>
                            </div>
                        </div>


                        <div class="col-md-6 cc-col-border">
                            <div class="cc-text-card" >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, provident repellendus quas enim perspiciatis, similique esse quae at earum ipsum maxime excepturi itaque voluptate sequi doloribus officiis, non consequuntur debitis?
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}

function MakeWill(props) {
    return <section class="last-will-section">
        <div class="make-your-will" style={{ top: "-75px" }}>
            <div class="left-div">
                <p class="heading">MAKE YOUR WILL</p>
                <p class="para">with us will registry today</p>
            </div>
            <Link to="/">GET STARTED</Link>
        </div>
    </section>
}