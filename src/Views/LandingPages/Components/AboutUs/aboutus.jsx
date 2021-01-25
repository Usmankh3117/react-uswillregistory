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
    return <section class="get-started">
        <div class="started-img">
            <Image name="about-us-img.png" alt="contact us img" />
        </div>
    </section>
}

function Welcome(props) {
    return <section class="welcome-section">
        <div class="container">
            <div class="w-heading">
                <h1>Welcome to the Us will registry</h1>
            </div>
            <div class="w-detail">
                <span>Detail</span>
            </div>
            <div class="w-mini-heading">
                <h1>About The U.S. Will Registry</h1>
            </div>
            <div class="w-mini-detail">
                <p>Whether you have questions or you just like to say hello</p>
            </div>
            <div class="row" style={{ marginTop: "5%" }}>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="row" style={{ marginTop: "20%" }} ></div>
                        <span class="left-side-text">The US Will Registry Provides the Public with a Means of Find a Missing Last Will</span>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6" style={{ borderLeft: "2px solid #e0e0e0" }} >
                        <span class="right-side-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nam harum dolorem consequuntur modi incidunt, dolores quae repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

function WithIcon(props) {
    return <section class="with-icon-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                    <div class="col-lg-10 col-md-10 col-sm-10 with-icon-div">
                        <div class="col-lg-6 col-md-6 col-sm-6 w-icon-div">
                            <div class="w-icon">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                            <div class="row" style={{ marginTop: "30%" }} ></div>
                            <span class="left-side-with-icon">Last Will Search</span>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6" style={{ borderLeft: "2px solid #e0e0e0" }}>
                            <span class="right-side-with-icon">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nam harum dolorem consequuntur modi incidunt, dolores quae repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.</span>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </div>
            <div class="row" style={{ marginTop: "5%" }}></div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                    <div class="col-lg-10 col-md-10 col-sm-10 with-icon-div">
                        <div class="col-lg-6 col-md-6 col-sm-6 w-icon-div">
                            <div class="w-icon">
                                <i class="fa fa-address-card" aria-hidden="true"></i>
                            </div>
                            <div class="row" style={{ marginTop: "30%" }}></div>
                            <span class="left-side-with-icon">Will Registration</span>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6" style={{ borderLeft: "2px solid #e0e0e0" }} >
                            <span class="right-side-with-icon">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nam harum dolorem consequuntur modi incidunt, dolores quae repellendus quo? Consequatur nihil vel eos cupiditate cum iusto ab error earum magnam.</span>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </div>
        </div>
    </section>
}

function MakeWill(props) {
    return <section class="last-section">
        <div class="make-will">
            <Image name="make-will.png" alt="make will" />
            <button>GET STARTED</button>
        </div>
    </section>
}