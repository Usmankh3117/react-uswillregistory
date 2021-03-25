import React, { useState, useEffect } from 'react';
import { Wrapper } from "../../Css/faq";
import { Style } from "../../Css/index";
import Image from "../../../Common/Components/image";
import $ from "jquery";
import Swal from 'sweetalert2';
import GetStartedBanner from "../../../Common/Components/getStartedBanner";
export default function Faq(props) {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        phone: '',
        message: '',
        isValidate: false
    })
    useEffect(() => {
        $('#btn-collapse').click(function () {
            $('#up').toggle();
            $('#down').toggle();
            $('#ans').toggle();
        })
        $('#btn-collapse1').click(function () {
            $('#up1').toggle();
            $('#down1').toggle();
            $('#ans1').toggle();
        })
        $('#btn-collapse2').click(function () {
            $('#up2').toggle();
            $('#down2').toggle();
            $('#ans2').toggle();
        })
        $('#btn-collapse3').click(function () {
            $('#up3').toggle();
            $('#down3').toggle();
            $('#ans3').toggle();
        })
        $('#btn-collapse4').click(function () {
            $('#up4').toggle();
            $('#down4').toggle();
            $('#ans4').toggle();
        })
        $('#btn-collapse5').click(function () {
            $('#up5').toggle();
            $('#down5').toggle();
            $('#ans5').toggle();
        })
        $('#btn-collapse6').click(function () {
            $('#up6').toggle();
            $('#down6').toggle();
            $('#ans6').toggle();
        })
        $('#btn-collapse7').click(function () {
            $('#up7').toggle();
            $('#down7').toggle();
            $('#ans7').toggle();
        })

    }, [])
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
            Swal.fire('Success', "Your form has been submitted successfully", "success")
        }
        setState({
            ...cloneState,
            isValidate: !isValid
        })
    }
    return <Wrapper>
        <Style />
        <GetStarted />
        <FaqDetail />
        <Messages{...state} handleStateChange={handleStateChange} validateEmail={validateEmail} handleSubmit={handleSubmit} />
        <GetStartedBanner />
    </Wrapper>
}

function GetStarted(props) {
    return <section className="get-started">
        <div className="started-img">
            <Image name="faq-img.png" alt="contact us img" />
            <div className="banner-text">
                <div className="banner-heading">
                    <h1>FAQ</h1>
                </div>
                <div className="banner-details">
                    <p>Here are the answers, frequently asked questions</p>
                </div>
            </div>
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

                <div className="col-md-6">

                    <div className="faq-div">
                        <div style={{ top: "5%" }} id="btn-collapse" className="faq-icon">
                            <i className="fa fa-arrow-up" id="up" aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down" style={{ display: "none" }} aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                How long does it take to register? How does it take to search?
                   </h4>
                            <p style={{ marginBottom: "13px" }} className="faq-ans" id="ans">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et
                                nostrum, quasi asperiores inventore velit.
                   </p>
                        </div>
                    </div>

                    <div className="faq-div">
                        <div className="faq-icon " id="btn-collapse2">
                            <i className="fa fa-arrow-up" id="up2" style={{ display: "none" }} aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down2" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                What happens if I Don't Register and my child will is lost?
                   </h4>
                            <p className="faq-ans" id="ans2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, veniam? Doloribus atque eum quo, provident nisi error ipsam reiciendis eos eaque nemo soluta ipsum, placeat pariatur asperiores? Quam, minima consequuntur.</p>
                        </div>
                    </div>


                    <div className="faq-div" >
                        <div className="faq-icon" id="btn-collapse4">

                            <i className="fa fa-arrow-up" id="up4" style={{ display: "none" }} aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down4" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                Do I send my will to you?
                           </h4>
                            <p className="faq-ans" id="ans4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque deleniti voluptates fugiat perferendis voluptate, dicta unde a blanditiis quas iusto facilis, voluptatibus illo illum repudiandae alias molestiae maiores corrupti doloremque!</p>
                        </div>
                    </div>

                    <div className="faq-div">
                        <div className="faq-icon" id="btn-collapse6">
                            <i className="fa fa-arrow-up" id="up6" style={{ display: "none" }} aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down6" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                Do I need an Anttorney to write a will?
                       </h4>
                            <p className="faq-ans" id="ans6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe libero aliquam rerum ea possimus soluta, maiores, architecto ipsum doloribus, esse optio nostrum dolore inventore illo! Culpa dignissimos aut laboriosam reprehenderit?</p>
                        </div>
                    </div>



                </div>



                <div className="col-md-6">
                    <div className="faq-div">
                        <div style={{ top: "5%" }} id="btn-collapse1" className="faq-icon">
                            <i className="fa fa-arrow-up" id="up1" aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down1" style={{ display: "none" }} aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                Do I need to register my will if my children know where it is?
                   </h4>
                            <p className="faq-ans" id="ans1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et
                                nostrum, quasi asperiores inventore velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et
                                nostrum, quasi asperiores inventore velit.
                   </p>
                        </div>
                    </div>



                    <div className="faq-div">
                        <div className="faq-icon" id="btn-collapse3">
                            <i className="fa fa-arrow-up" id="up3" style={{ display: "none" }} aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down3" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                I don't have Will
                   </h4>
                            <p className="faq-ans" id="ans3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia incidunt, aspernatur et totam illum asperiores nobis laboriosam, excepturi atque necessitatibus fugiat fuga nulla? Modi quaerat ullam ipsum cumque magni amet.</p>
                        </div>
                    </div>


                    <div className="faq-div">
                        <div className="faq-icon" id="btn-collapse5">
                            <i className="fa fa-arrow-up" id="up5" style={{ display: "none" }} aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down5" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                How much it take cost to write a will?
               </h4>
                            <p className="faq-ans" id="ans5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam voluptatum, ducimus, eos nisi a architecto ut optio odio culpa velit saepe mollitia voluptatibus ea perspiciatis. Ratione sapiente corporis rem.</p>
                        </div>
                    </div>

                    <div className="faq-div">
                        <div className="faq-icon" id="btn-collapse7">
                            <i className="fa fa-arrow-up" id="up7" style={{ display: "none" }} aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id="down7" aria-hidden="true"></i>
                        </div>
                        <div className="faq-details">
                            <h4 className="faq-que">
                                How much do you hold my details for?
           </h4>
                            <p className="faq-ans" id="ans7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus iusto deleniti ratione ab neque saepe illum, qui minima, quam iste eum autem, optio accusantium aperiam! Voluptas id sequi fugiat.</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </section >
}

function Messages(props) {
    return <section className="message-section">
        <div className="container">
            <div className="row">
                <div className="leave-message">
                    <span>Leave a message</span>
                </div>
                <div className="tell-us">
                    <span>Not Found Your Answer? Just Ask Us!</span>
                </div>
                <div style={{ fontWeight: "400" }} className="details">
                    <p style={{ padding: '10px' }}>Whether you have questions or you just like to say hello</p>
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