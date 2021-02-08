import React, { Fragment } from 'react';
import { Wrapper } from '../../Css/search';
import Image from "../../../Common/Components/image";
export default function Index(props) {
    return <Wrapper>
        <Search />
        <SearchDetail />
        <LastWill />
    </Wrapper>
}

function Search(props) {
    return <Fragment>
        <section className="search-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="search">
                            <div className="search__form">
                                <form action="#">
                                    <input type="text" placeholder="Search for Products... " />
                                    <button type="submit" className="site-btn"><i className="fa fa-search" style={{ fontSize: "22px" }}></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                </div>
            </div>
        </section>
        <section className="search-alpha-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <ul className="search-list-group">
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">A</a>
                            </li>
                            <li className="search-list-group-item search-active-menu">
                                <a href="#" className="search-menu">B</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">C</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">D</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">E</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">F</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">G</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">H</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">I</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">J</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">K</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">L</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">M</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">N</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">O</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">P</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">Q</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">R</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">S</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">T</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">U</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">V</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">W</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">X</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">Y</a>
                            </li>
                            <li className="search-list-group-item">
                                <a href="#" className="search-menu">Z</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </div>
        </section>
    </Fragment>
}

function SearchDetail(props) {
    return <section className="search-details-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">A</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                    </div>
                    <div className="row search-detail">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">B</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                    </div>
                    <div className="row search-detail">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">C</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">D</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">E</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">F</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">G</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">H</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">I</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">J</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">K</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                    <span className="search-heading">L</span>
                    <div className="search-detail-icon">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


function LastWill(props) {
    return <section className="last-will-section">
        <div className="make-your-will">
            <Image name="make-will.png" alt="make your will" />
            <button>GET STARTED</button>
        </div>
    </section>
}