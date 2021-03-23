import React from 'react';
import { Wrapper } from "../../Css/contactus";
import { Style } from "../../Css/index";
import Image from "../../../Common/Components/image";
import GetStartedBanner from "../../../Common/Components/getStartedBanner";
export default function ContactUs(props) {
    return <Wrapper>
        <Style/>
        <GetStarted />
        <ContactDetail />
        <Messages />
        <GetStartedBanner />
    </Wrapper>
}

function GetStarted(props) {
    return <section className="get-started">
        <div className="started-img">
            <Image name="contact-us-top-img.png" alt="contact us img" />
            <div className="banner-text">
                <div className="banner-heading">
                    <h1>CONTACT US</h1>
                </div>
                <div className="banner-details">
                    <p>we'd love to talk about how we can help you</p>
                </div>
            </div>
        </div>
    </section>
}

function ContactDetail(props) {
    return <section className="contact-section">
        <div className="container" style ={{width:'100%', padding:'0px 10px',margin:'auto'}}>
            <div className="row">
                <div className="">
                    <div className="col-md-4 c-details">
                        <div className="c-detail-icon">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <div className="mini-details">
                            <h3 className="address">Address</h3>
                            <p className="mini-details-p">3509 Connecticut Ave.</p>
                            <p className="mini-details-p">NW Washington DC - 2008</p>
                        </div>
                    </div>
                    <div className="col-md-4 c-details">
                        <div className="c-detail-icon">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <div className="mini-details">
                            <h3 className="address">Email</h3>
                            <p className="mini-details-p">support@theuswillresitry.org</p>
                            <p className="mini-details-p">.</p>
                        </div>

                    </div>
                    <div className="col-md-4 c-details">
                        <div className="c-detail-icon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="mini-details">
                            <h3 className="address">Phone number</h3>
                            <p className="mini-details-p">+1(062)109-9222</p>
                            <p className="mini-details-p">.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
}

function Messages(props) {
    return <section className="message-section">
        <div className="container">
            <div className="row" style ={{padding:'0px 10px'}}>
                <div className="leave-message">
                    <span>Leave a message</span>
                </div>
                <div className="tell-us">
                    <span>Not Found Your Answer? Just Ask</span>
                </div>
                <div className="details">
                    <span>Whether you have questions or you just like to say hello</span>
                </div>
            </div>
            <form action="/" className="contact-us-form">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Name" value="" className="c-input-field" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Email" value="" className="c-input-field" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Subject" value="" className="c-input-field" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Phone" value="" className="c-input-field" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="c-input-field-textarea"></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 c-submit">
                            <button className="submit">Submit</button>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </form>
        </div>
    </section>
}