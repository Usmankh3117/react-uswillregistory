import { Wrapper } from "../../Css/contactus";

export default function ContactUs(props) {
    return <Wrapper>
        <GetStarted />
        <ContactDetail />
        <Messages />
    </Wrapper>
}

function GetStarted(props) {
    return <section class="get-started">
        <div class="started-img">
            <Image name="contact-us-top-img.png" alt="contact us img" />
        </div>
    </section>
}

function ContactDetail(props) {
    return <section class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">

                    <div class="col-lg-4 col-md-4 col-sm-4 c-details">
                        <div class="c-detail-icon">
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <div class="mini-details">
                            <h3 class="address">Address</h3>
                            <p class="mini-details-p">3509 Connecticut Ave.</p>
                            <p class="mini-details-p">NW Washington DC - 2008</p>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 c-details">
                        <div class="c-detail-icon">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <div class="mini-details">
                            <h3 class="address">Email</h3>
                            <p class="mini-details-p">support@theuswillresitry.org</p>
                            <p class="mini-details-p">.</p>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 c-details">
                        <div class="c-detail-icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div class="mini-details">
                            <h3 class="address">Phone number</h3>
                            <p class="mini-details-p">+1(062)109-9222</p>
                            <p class="mini-details-p">.</p>
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