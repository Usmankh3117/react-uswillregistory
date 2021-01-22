import { Fragment } from "react";
import { Wrapper } from "../../Css/faq";

export default function Faq(props) {
    return <Wrapper>
        <GetStarted />
        <FaqDetail />
        <Messages />
    </Wrapper>
}

function GetStarted(props) {
    return <section class="get-started">
        <div class="started-img">
            <Image name="faq-img.png" alt="contact us img" />
        </div>
    </section>
}

function FaqDetail(props) {
    return <section class="faq-section">
        <div class="container">
            <div class="row">
                <div class="leave-message">
                    <span>FAQ</span>
                </div>
                <div class="tell-us">
                    <span>Read Most Frequent Questions</span>
                </div>
                <div class="details">
                    <span>Questions you want to ask frequently</span>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                How long does it take to register? How does it take to search?
                    </h4>
                            <p class="faq-ans">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et nostrum, quasi asperiores inventore velit.
                    </p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                Do I need to register my will if my children know where it is?
                    </h4>
                            <p class="faq-ans">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et nostrum, quasi asperiores inventore velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus vero error et nostrum, quasi asperiores inventore velit.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                What happens if I Don't Register and my child will is lost?
                    </h4>
                            <p class="faq-ans"></p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                I don't have Will
                    </h4>
                            <p class="faq-ans"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                Do I send my will to you?
                    </h4>
                            <p class="faq-ans"></p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                How much it take cost to write a will?
                    </h4>
                            <p class="faq-ans"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                Do I need an Anttorney to write a will?
                    </h4>
                            <p class="faq-ans"></p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 faq-div">
                        <div class="faq-icon">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                        <div class="faq-details">
                            <h4 class="faq-que">
                                How much do you hold my details for?
                    </h4>
                            <p class="faq-ans"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

function Messages(props) {
    return <section class="message-section">
        <div class="container">
            <div class="row">
                <div class="leave-message">
                    <span>Leave a message</span>
                </div>
                <div class="tell-us">
                    <span>Not Found Your Answer? Just Ask</span>
                </div>
                <div class="details">
                    <span>Whether you have questions or you just like to say hello</span>
                </div>
            </div>
            <form action="/" class="contact-us-form">
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                    <div class="col-lg-10 col-md-10 col-sm-10">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Name" value="" class="c-input-field" />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Email" value="" class="c-input-field" />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Subject" value="" class="c-input-field" />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <input type="text" placeholder="Phone" value="" class="c-input-field" />
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Message" class="c-input-field-textarea"></textarea>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 c-submit">
                            <button>Submit</button>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </form>
        </div>
    </section>
}