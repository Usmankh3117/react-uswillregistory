import React, { Fragment, useEffect, useState } from 'react';
import { Wrapper } from '../../Css/search';
import $ from "jquery";
import { Style } from '../../Css/index';
import Image from "../../../Common/Components/image";
import { Link } from 'react-router-dom';
import GetStartedBanner from "../../../Common/Components/getStartedBanner";
export default function Index(props) {
    const [state, setState] = useState({
        section: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
    })
    useEffect(() => {
        state.section.forEach((element, index) => {
            let id = index;
            $('#btn-collapse' + id).click(function () {
                $('#up' + id).toggle();
                $('#down' + id).toggle();
                $('#ans' + id).toggle();
            })
        });

    }, [])
    return <Wrapper>
        <Style />
        <Search />
        <SearchDetail sections={state.section} />
        <GetStartedBanner className="np-sec" />
        {/* <LastWill /> */}
    </Wrapper>
}

function Search(props) {
    return <Fragment>
        <section className="search-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="search" style={{ marginTop: "50px" }}>
                            <div className="search__form">
                                <form action="#">
                                    <input type="text" placeholder="Search for Products... " />
                                    <button type="submit" className="site-btn"><i className="fa fa-search" style={{ fontSize: "22px" }}></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="search-alpha-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
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
            {props.sections.map((item, index) => {
                return <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 search-detail-div">
                        <span className="search-heading">{item}</span>
                        <div style={{ top: "5%" }} id={"btn-collapse" + index} className="search-detail-icon">
                            <i className="fa fa-arrow-up" id={"up" + index} style={{ display: "none" }} aria-hidden="true"></i>
                            <i className="fa fa-arrow-down" id={"down" + index} aria-hidden="true"></i>
                        </div>
                        <div className="row search-detail" id={"ans" + index} style={{ display: "none" }}>
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
            })}

        </div>
    </section>
}


function LastWill(props) {
    return <section className="last-will-section np-sec">
        <div className="make-your-will" style={{ top: "10% !important" }}>
            <div className="left-div">
                <p className="heading">MAKE YOUR WILL</p>
                <p className="para">with us will registry today</p>
            </div>
            <Link to="/login">GET STARTED</Link>
        </div>
    </section>
}