import React, { Fragment } from 'react';
import { Wrapper } from "../../Css/faq";
import Image from "../../../Common/Components/image";

export default function Faq(props) {
    return <Wrapper>
        <GetStarted />
        <FaqDetail />
        <Messages />
    </Wrapper>
}

function GetStarted(props) {
    return <section className="get-started">
        <div className="started-img">
            <Image name="faq-img.png" alt="contact us img" />
        </div>
    </section>
}

function FaqDetail(props) {
    return <section className="faq-section">
        <div className="container">
            <div className="row">
                <div className="leave-message">
                    <span>FAQ</span>
                </div>
                <div className="tell-us">
                    <span>Read Most Frequent Questions</span>
                </div>
                <div className="details">
                    <span>Questions you want to ask frequently</span>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                How long does it take to register? How does it take to search?
                    </h4>
                            <p className="faq-ans">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et nostrum, quasi asperiores inventore velit.
                    </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                Do I need to register my will if my children know where it is?
                    </h4>
                            <p className="faq-ans">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et nostrum, quasi asperiores inventore velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et nostrum, quasi asperiores inventore velit.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                What happens if I Don't Register and my child will is lost?
                    </h4>
                            <p className="faq-ans"></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                I don't have Will
                    </h4>
                            <p className="faq-ans"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                Do I send my will to you?
                    </h4>
                            <p className="faq-ans"></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                How much it take cost to write a will?
                    </h4>
                            <p className="faq-ans"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                Do I need an Anttorney to write a will?
                    </h4>
                            <p className="faq-ans"></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div className="faq-icon">
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                How much do you hold my details for?
                    </h4>
                            <p className="faq-ans"></p>
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
            <div className="row">
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
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </form>
        </div>
    </section>
}