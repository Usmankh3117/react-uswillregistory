import React,{ Fragment } from 'react';
import Image from '../../Common/Components/image'

export const AuthWrapper = (props) => (
    <Fragment>
        <section className="sign-in-section">
            <div className="container">
                <div className="row">
                    <div className="heading-section">
                        <h1 className="heading"><span className="bold">{props.name}</span> Form</h1>
                        {props.description ?
                            <span className="link">{props.description} <a href={props.linkUrl}>{props.linkLabel}</a></span> : ""}

                    </div>
                </div>
                <div className="row mg-top-30"></div>
                <div className="row">
                    <div className={`col-lg-12 col-md-12 col-sm-12 mg-bottom-30 ${props.parentClass}`}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 for-bg-shadow">
                                <div className="col-lg-6 col-md-6 col-sm-6" style={{ padding: "0px" }}>
                                    <Image name="signin-image-large.png" alt="signup-img" style={{ width: "100%", borderRadius: "25px 0px 0px 25px" }} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 login-form-div">
                                    <div className="row mg-top-30"></div>
                                    <div className="form-heading">
                                        <h2 style={{ "color": "#033168" }}>{props.formName}</h2>
                                        {props.formDescription ? <p> {props.formDescription}</p> : ""}
                                    </div>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="row mg-top-30"></div>
        <div className="row mg-top-30"></div>
        <div className="row mg-top-30"></div>
    </Fragment>
);