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
    return <section class="get-started">
        <div class="started-img">
            <Image name="index-page-img1.png" alt="" />
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
                            <Image name="will-img.png" alt="" />
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
                            <Image name="will-img.png" alt="" />
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
                            <Image name="will-img.png" alt="" />
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
                            <Image name="will-img.png" alt="" />
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

function Forms(props) {
    return <section class="forms-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="col-lg-2 col-md-2 col-sm-2"></div>
                    <div class="col-lg-4 col-md-4 col-sm-4 witnesa-page-form">
                        <Image name="form1.png" alt="" />
                        <span>Witnesa page form</span>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 self-affidevit-form">
                        <Image name="form2.png" alt="" />
                        <span>Self affidevit form</span>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2"></div>
                </div>
            </div>
        </div>
    </section>
}

function LastWill(props) {
    return <section class="last-will-section">
        <div class="upper-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="col-lg-5 col-md-5 col-sm-6 last-will">
                            <div class="heading-border">
                                <span class="heading"> HOW US WILL REGISTRAY WORKS</span>
                            </div>

                            <p class="last-will-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim sequi voluptate distinctio laboriosam vero iste debitis quidem architecto, repudiandae modi, animi minus facere fugiat exercitationem quasi magnam quibusdam expedita?</p>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="col-sm-3">
                                        <span class="count">1</span>
                                    </div>
                                    <div class="col-sm-9">
                                        <span class="mini-heading"> FILL OUT FORM</span>
                                        <p class="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="col-sm-3">
                                        <span class="count">1</span>
                                    </div>
                                    <div class="col-sm-9">
                                        <span class="mini-heading"> FILL OUT FORM</span>
                                        <p class="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="col-sm-3">
                                        <span class="count">1</span>
                                    </div>
                                    <div class="col-sm-9">
                                        <span class="mini-heading"> FILL OUT FORM</span>
                                        <p class="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="col-sm-3">
                                        <span class="count">1</span>
                                    </div>
                                    <div class="col-sm-9">
                                        <span class="mini-heading"> FILL OUT FORM</span>
                                        <p class="mini-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae maiores nihil dolores neque possimus ad magnam itaque labore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6 last-will-img">
                            <Image name="last-will.png" alt="last will" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lower-section">
            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <div class="info-border">
                            <span class="info-heading">THE U.S. WILL REGISTRAY OFFERS</span>
                        </div>
                    </div>
                    <div class="col-sm-4"></div>
                </div>

                <p class="Nationwide">Nationwide Search for a Missing Last Will</p>
                <p class="info-detail">Lifetime registration of Last Will</p>
                <div class="col-sm-12">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <p class="info-mini-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aspernatur similique maxime omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
                <div class="col-sm-12">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <p class="info-mini-detail-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sed cum accusamus doloremque esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius earum beatae suscipit delectus, debitis ab, totam mollitia magni velit sed consequuntur itaque illum.</p>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </div>
        </div>

        <div class="make-your-will">
            <Image name="make-will.png" alt="make your will" />
            <button>GET STARTED</button>
        </div>
    </section>
}