import { Wrapper } from '../../Css/search';
import Image from "../../../Common/Components/image";
import { Fragment } from 'react';
export default function Index(props) {
    return <Wrapper>
        <Search />
        <SearchDetail />
        <LastWill />
    </Wrapper>
}

function Search(props) {
    return <Fragment>
        <section class="search-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2"></div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="search">
                            <div class="search__form">
                                <form action="#">
                                    <input type="text" placeholder="Search for Products... " />
                                    <button type="submit" class="site-btn"><i class="fa fa-search" style={{ fontSize: "22px" }}></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2"></div>
                </div>
            </div>
        </section>
        <section class="search-alpha-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                    <div class="col-lg-10 col-md-10 col-sm-10">
                        <ul class="search-list-group">
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">A</a>
                            </li>
                            <li class="search-list-group-item search-active-menu">
                                <a href="#" class="search-menu">B</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">C</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">D</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">E</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">F</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">G</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">H</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">I</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">J</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">K</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">L</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">M</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">N</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">O</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">P</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">Q</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">R</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">S</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">T</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">U</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">V</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">W</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">X</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">Y</a>
                            </li>
                            <li class="search-list-group-item">
                                <a href="#" class="search-menu">Z</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </div>
        </section>
    </Fragment>
}

function SearchDetail(props) {
    return <section class="search-details-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">A</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    </div>
                    <div class="row search-detail">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">B</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    </div>
                    <div class="row search-detail">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">C</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">D</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">E</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">F</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">G</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">H</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">I</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">J</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">K</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span class="search-heading">L</span>
                    <div class="search-detail-icon">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


function LastWill(props) {
    return <section class="last-will-section">
        <div class="make-your-will">
            <Image name="make-will.png" alt="make your will" />
            <button>GET STARTED</button>
        </div>
    </section>
}