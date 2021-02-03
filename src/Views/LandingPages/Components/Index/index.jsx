import React from "react";
import { Wrapper } from '../../Css/index';
import Image from "../../../Common/Components/image";
export default function Index(props) {
    return <Wrapper>
        <GetStarted />
        <WillSection />
        <Forms />
        <LastWill />
    </Wrapper>
}

function GetStarted(props) {
    return <section className="get-started">
        <div className="started-img">
            <Image name="index-page-img1.png" alt="" />
        </div>
    </section>
}

function WillSection(props) {
    return <section className="will-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div className="top-image">
                            <Image name="will-img.png" alt="" />
                        </div>
                        <div className="will-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="will-details">
                            <span className="detail-heading">Find Missing Will</span>
                            <p className="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div className="learn-more">
                                <a href="#">Learn More</a>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div className="top-image">
                            <Image name="will-img.png" alt="" />
                        </div>
                        <div className="will-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="will-details">
                            <span className="detail-heading">Find Missing Will</span>
                            <p className="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div className="learn-more">
                                <a href="#">Learn More</a>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div className="top-image">
                            <Image name="will-img.png" alt="" />
                        </div>
                        <div className="will-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="will-details">
                            <span className="detail-heading">Find Missing Will</span>
                            <p className="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div className="learn-more">
                                <a href="#">Learn More</a>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div className="top-image">
                            <Image name="will-img.png" alt="" />
                        </div>
                        <div className="will-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="will-details">
                            <span className="detail-heading">Find Missing Will</span>
                            <p className="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div className="learn-more">
                                <a href="#">Learn More</a>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}

function Forms(props) {
    return <section className="forms-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4 witnesa-page-form">
                        <Image name="form1.png" alt="" />
                        <span>Witnesa page form</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 self-affidevit-form">
                        <Image name="form2.png" alt="" />
                        <span>Self affidevit form</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
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
                                <span className="heading"> HOW US WILL REGISTRAY WORKS</span>
                            </div>

                            <p className="last-will-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim sequi voluptate distinctio laboriosam vero iste debitis quidem architecto, repudiandae modi, animi minus facere fugiat exercitationem quasi magnam quibusdam expedita?</p>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="col-sm-3">
                                        <span className="count">1</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="mini-heading"> FILL OUT FORM</span>
                                        <p className="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="col-sm-3">
                                        <span className="count">1</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="mini-heading"> FILL OUT FORM</span>
                                        <p className="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="col-sm-3">
                                        <span className="count">1</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="mini-heading"> FILL OUT FORM</span>
                                        <p className="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="col-sm-3">
                                        <span className="count">1</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="mini-heading"> FILL OUT FORM</span>
                                        <p className="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6 last-will-img">
                            <Image name="last-will.png" alt="last will" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lower-section">
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="info-border">
                            <span className="info-heading">THE U.S. WILL REGISTRAY OFFERS</span>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

                <p className="Nationwide">Nationwide Search for a Missing Last Will</p>
                <p className="info-detail">Lifetime registration of Last Will</p>
                <div className="col-sm-12">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <p className="info-mini-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aspernatur similique maxime omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <p className="info-mini-detail-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sed cum accusamus doloremque esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius earum beatae suscipit delectus, debitis ab, totam mollitia magni velit sed consequuntur itaque illum.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>

        <div className="make-your-will">
            <Image name="make-will.png" alt="make your will" />
            <button>GET STARTED</button>
        </div>
    </section>
}