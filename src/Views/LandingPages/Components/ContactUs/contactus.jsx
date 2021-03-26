import React, { useState } from 'react';
import { Wrapper } from "../../Css/contactus";
import { Style } from "../../Css/index";
import Image from "../../../Common/Components/image";
import GetStartedBanner from "../../../Common/Components/getStartedBanner";
import Swal from 'sweetalert2';
export default function ContactUs(props) {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        phone: '',
        message: '',
        isValidate: false
    })
    const handleStateChange = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        let cloneState = { ...state };
        cloneState[id] = val;
        setState(cloneState);
    }
    const validateForm = () => {
        var form = document.getElementsByClassName('needs-validation')[0];
        let isValid = true;
        if (form.checkValidity() === false) {
            isValid = false;
            form.classList.add('was-validated');
        }
        return isValid;
    }
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let cloneState = { ...state }
        let isValid = validateForm();
        if (isValid) {
            cloneState["name"] = "";
            cloneState["subject"] = "";
            cloneState["email"] = "";
            cloneState["phone"] = "";
            cloneState["message"] = "";
            Swal.fire('Success',"Your form has been submitted successfully","success")
        }
        setState({
            ...cloneState,
            isValidate: !isValid
        })
    }
    return <Wrapper>
        <Style />
        <GetStarted />
        <ContactDetail />
        <Messages {...state} handleStateChange={handleStateChange} validateEmail={validateEmail} handleSubmit={handleSubmit} />
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
        <div className="container" style={{ width: '80%', padding: '0px 10px', margin: 'auto' }}>
            <div className="row">
                {/* <div className=""> */}
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
                {/* </div> */}
            </div>
        </div>

    </section>
}

function Messages(props) {
    return <section className="message-section">
        <div className="container">
            <div className="row" style={{ padding: '0px 10px' }}>
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
            <form className="contact-us-form needs-validation" onSubmit={(e) => props.handleSubmit(e)} noValidate>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Name" className="c-input-field" id="name" value={props.name} onChange={(e) => props.handleStateChange(e)} required />
                            {props.isValidate && props.name === "" ? <span className="alert-box"><i class="fa fa-exclamation-circle"></i> {` Please enter the Name`}</span> : ""}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Email" className="c-input-field" id="email" value={props.email} onChange={(e) => props.handleStateChange(e)} required />
                            {props.isValidate && !props.validateEmail(props.email) ? <span className="alert-box"><i class="fa fa-exclamation-circle"></i>{` Please enter the ${props.email === "" ? "" : "valid"} email address`}</span> : ""}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Subject" className="c-input-field" id="subject" value={props.subject} onChange={(e) => props.handleStateChange(e)} required />
                            {props.isValidate && props.subject === "" ? <span className="alert-box"><i class="fa fa-exclamation-circle"></i> {` Please enter the Subject`}</span> : ""}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Phone" className="c-input-field" id="phone" value={props.phone} onChange={(e) => props.handleStateChange(e)} required />
                            {props.isValidate && props.phone === "" ? <span className="alert-box"><i class="fa fa-exclamation-circle"></i> {` Please enter the Phone`}</span> : ""}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="c-input-field-textarea" value={props.message} onChange={(e) => props.handleStateChange(e)} required></textarea>
                            {props.isValidate && props.message === "" ? <span className="alert-box"><i class="fa fa-exclamation-circle"></i> {` Please enter the Message`}</span> : ""}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 c-submit">
                            <button className="submit" onClick={(e) => props.handleSubmit(e)}>Submit</button>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </form>
        </div>
    </section>
}