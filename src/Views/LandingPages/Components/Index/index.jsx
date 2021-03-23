import React from "react";
import { Style } from '../../Css/index';
import Image, { Icon } from "../../../Common/Components/image";
import GetStartedBanner from "../../../Common/Components/getStartedBanner";
import curvebackimage from "../../../../assets/img/curve-back.png";
import { Link } from 'react-router-dom';
// import "../../Css/index.css";
export default function Index(props) {
    return <>
        <Style />
        <GetStarted />
        <WillSection />
        <Forms />
        <LastWill />
        <GetStartedBanner />
    </>
}

function GetStarted(props) {
    return <section className="get-started">
        <div className="started-img">
            <Image name="index-page-banner.png" alt="" />
            <div className="landing-page-top-text">
                <p className="empty-line"></p>
                <h2 className="where-there">WHERE THERE'S A WILL</h2>
                <h1 className="there-a-will">THERE'S A WAY</h1>
                <h3 className="for-those-left-behind">for Those Left Behind, to Find Peace of Mind.</h3>
                <Link to="/login" className=" button1">Get Started</Link>
            </div>
        </div>
    </section>
}

function WillSection(props) {
    return <section className="will-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <WillDetailBox imageName="will-img4.png" iconName="h_icon_find.png" heading="Find Missing Will" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati." />
                    <WillDetailBox imageName="will-img3.png" iconName="h_icon_hourglass.png" heading="Death Notice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati." />
                    <WillDetailBox imageName="will-img2.png" iconName="h_icon_edit.png" heading="Register Your Will" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati." />
                    <WillDetailBox imageName="will-img1.png" iconName="h_icon_will.png" heading="Living Will Form" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati." />
                </div>
            </div>
        </div>
    </section>
}

function WillDetailBox(props) {
    return <>
        <div className="col-lg-3 col-md-3 col-sm-6 will-div box">
            <div className="top-image">
                <Image name={props.imageName} alt="" />
            </div>
            <div className="will-icon1">
                <Icon name={props.iconName} alt="" />
            </div>
            <div className="will-details">
                <span className="detail-heading">{props.heading}</span>
                <p className="detail-p">{props.description}</p>
                <div className="learn-more">
                    <a href="#" className="button2">Learn More</a>
                    <i style={{ cursor: 'pointer', backgroundImage: `url(${curvebackimage})` }}
                        className="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </>
}

function Forms(props) {
    return <section className="forms-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{ marginTop: "10px" }}>
                        <div className="cc-width">
                            <a href="#" className="btn btn4 btn-primary btn-lg active homepage-form-tiles">
                                <Image name="homepage-1.png" alt="" />
                                <span>Witness Form</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 " style={{ marginTop: "10px" }}>
                        <div className="cc-width">
                            <a href="#" className="btn btn-primary btn5 btn-lg active homepage-form-tiles"><Image
                                name="homepage-form-tile-2.png" alt="" />
                                <span> Self Affidevit Form </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

function LastWill(props) {
    return <section className="last-will-section">
        <div className="upper-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="col-lg-5 col-md-5 col-sm-6 last-will">
                            <div className="heading-border">
                                <p className="heading"> HOW U.S. WILL REGISTRY WORKS</p>
                            </div>
                            <p className="last-will-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                                enim sequi voluptate distinctio laboriosam vero iste debitis quidem architecto.</p>
                            <LastWillPointDetail islast={false} heading="FILL OUT FORM" description="It only takes 20 minutes to fill out the information needed to create your last will and testament." count="1" />
                            <LastWillPointDetail islast={false} heading="PRINT OUT FORM" description="The information you provide is combined with the precise language of our legal forms, and provided back to you as a printable will." count="2" />
                            <LastWillPointDetail islast={false} heading="SIGN & KEEP SAFE" description="To make your will official, sign and initial the document in-person with your witnesses. Keep your new will somewhere safe but accessible." count="3" />
                            <LastWillPointDetail islast={true} heading="PAIR FREEWILL WITH AN ATTORNEY" description="If you have a larger estate, children with special needs, or complicated family dynamics, you may want to pair FreeWill with an experienced attorney's help. We provide all our will-makers with free forms to bring to an attorney (saving time and money)." count="4" />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6 last-will-img">
                            <Image name="last-will.png" alt="last will" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lower-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="info-border">
                                <span className="info-heading">THE U.S. WILL REGISTRY OFFERS</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    </div>
                </div>
                <div className="row">
                    <p className="Nationwide">Nationwide Search for a Missing Last Will</p>
                    <p className="info-detail">Lifetime registration of Last Will</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <p className="info-mini-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequuntur accusantium aspernatur similique maxime omnis.Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <p className="info-mini-detail-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Molestias sed cum accusamus doloremque esse! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius
                            earum beatae suscipit delectus, debitis ab, totam mollitia magni velit sed consequuntur
                                itaque illum.</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="make-your-will">
            <div className="left-div">
                <p className="heading">MAKE YOUR WILL</p>
                <p className="para">with us will registry today</p>
            </div>
            <Link to="/login">GET STARTED</Link>
        </div> */}
    </section>
}

function LastWillPointDetail(props) {
    return <div className="row margin-top-6">
        <div className="col-sm-12 col-xs-12">
            <div className="col-sm-3 col-xs-3">
                <p className={`${props.count === "1" ? "count-1" : "count"}`} style={props.countStyle}>{props.count}</p>
                {!props.islast ? <div className="vertical-line"></div> : ""}

            </div>
            <div className="col-sm-9 col-xs-9">
                <p className="mini-heading">{props.heading} </p>
                <p className="mini-para">{props.description}
                </p>
            </div>
        </div>
    </div>
}