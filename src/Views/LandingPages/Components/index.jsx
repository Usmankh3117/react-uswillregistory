import { Fragment } from 'react';

export default function Index(props) {
    return <Fragment>
        <GetStarted />
        <WillSection />
    </Fragment>
}

function GetStarted(props) {
    return <section class="get-started">
        <div class="started-img">
            <img src="./dist/assets/img/index-page-img1.png" alt="" />
        </div>
    </section>
}

function WillSection(props) {
    return <section class="will-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div class="top-image">
                            <img src="./dist/assets/img/will-img.png" alt="" />
                        </div>
                        <div class="will-icon">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div class="will-details">
                            <span class="detail-heading">Find Missing Will</span>
                            <p class="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div class="learn-more">
                                <a href="#">Learn More</a>
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div class="top-image">
                            <img src="./dist/assets/img/will-img.png" alt="" />
                        </div>
                        <div class="will-icon">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div class="will-details">
                            <span class="detail-heading">Find Missing Will</span>
                            <p class="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div class="learn-more">
                                <a href="#">Learn More</a>
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div class="top-image">
                            <img src="./dist/assets/img/will-img.png" alt="" />
                        </div>
                        <div class="will-icon">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div class="will-details">
                            <span class="detail-heading">Find Missing Will</span>
                            <p class="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div class="learn-more">
                                <a href="#">Learn More</a>
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 will-div">
                        <div class="top-image">
                            <img src="./dist/assets/img/will-img.png" alt="" />
                        </div>
                        <div class="will-icon">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div class="will-details">
                            <span class="detail-heading">Find Missing Will</span>
                            <p class="detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maxime? Ad, consequatur! Doloribus quasi natus excepturi.</p>
                            <div class="learn-more">
                                <a href="#">Learn More</a>
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}