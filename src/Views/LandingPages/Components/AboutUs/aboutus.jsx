import React, { Fragment } from 'react';
import { Wrapper } from "../../Css/aboutus";
import Image from "../../../Common/Components/image";

export default function AboutUs(props) {
    return <Wrapper>
        <GetStarted />
        <Welcome />
        <WithIcon />
        <MakeWill />
    </Wrapper>
}

function GetStarted(props) {
    return <section className="get-started">
        <div className="started-img">
            <Image name="about-us-img.png" alt="contact us img" />
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
                        <span className="right-side-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nam harum dolorem consequuntur modi incidunt, dolores quae repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

function WithIcon(props) {
    return <section className="with-icon-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-10 with-icon-div">
                        <div className="col-lg-6 col-md-6 col-sm-6 w-icon-div">
                            <div className="w-icon">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </div>
                            <div className="row" style={{ marginTop: "30%" }} ></div>
                            <span className="left-side-with-icon">Last Will Search</span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" style={{ borderLeft: "2px solid #e0e0e0" }}>
                            <span className="right-side-with-icon">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nam harum dolorem consequuntur modi incidunt, dolores quae repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.</span>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </div>
            <div className="row" style={{ marginTop: "5%" }}></div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-10 with-icon-div">
                        <div className="col-lg-6 col-md-6 col-sm-6 w-icon-div">
                            <div className="w-icon">
                                <i className="fa fa-address-card" aria-hidden="true"></i>
                            </div>
                            <div className="row" style={{ marginTop: "30%" }}></div>
                            <span className="left-side-with-icon">Will Registration</span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" style={{ borderLeft: "2px solid #e0e0e0" }} >
                            <span className="right-side-with-icon">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nam harum dolorem consequuntur modi incidunt, dolores quae repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.</span>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </div>
        </div>
    </section>
}

function MakeWill(props) {
    return <section className="last-section">
        <div className="make-will">
            <Image name="make-will.png" alt="make will" />
            <button>GET STARTED</button>
        </div>
    </section>
}