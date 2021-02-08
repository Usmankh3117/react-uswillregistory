import React from 'react';
import { Wrapper } from '../../Css/lastWill';
export default function Index(props) {
    return <Wrapper>
        <section className="tab-section">
            <div className="container">
                <div className="row">
                    <div className="form-sub-heading">
                        <span>Form</span>
                    </div>
                    <h1 className="form-heading">Last Will & Testaments</h1>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="tab" role="tabpanel">
                            <Tabs />
                            <TabContent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Wrapper>
}

function Tabs(props) {
    return <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active">
            <a href="#form1" aria-controls="home" role="tab" data-toggle="tab">1</a>
            <h3 className="tab-lower-heading">Basic</h3>
        </li>
        <li role="presentation">
            <a href="#form2" aria-controls="profile" role="tab" data-toggle="tab">2</a>
            <h3 className="tab-lower-heading">Nomiees</h3>
        </li>
        <li role="presentation">
            <a href="#form3" aria-controls="messages" role="tab" data-toggle="tab">3</a>
            <h3 className="tab-lower-heading">Residuary</h3>
        </li>
        <li role="presentation">
            <a href="#form4" aria-controls="messages" role="tab" data-toggle="tab">4</a>
            <h3 className="tab-lower-heading">Gifts</h3>
        </li>
        <li role="presentation">
            <a href="#form5" aria-controls="messages" role="tab" data-toggle="tab">5</a>
            <h3 className="tab-lower-heading">Funeral</h3>
        </li>
        <li role="presentation">
            <a href="#form6" aria-controls="messages" role="tab" data-toggle="tab">6</a>
            <h3 className="tab-lower-heading">Provisions</h3>
        </li>
        <li role="presentation">
            <a href="#form7" aria-controls="messages" role="tab" data-toggle="tab">7</a>
            <h3 className="tab-lower-heading">Review</h3>
        </li>
    </ul>
}
function TabContent(props) {
    return <div className="tab-content tabs">
        <div role="tabpanel" className="tab-pane fade in active" id="form1">
            <div className="tabpanel-heading">
                <span className="head">Personal information related questions</span>
                <span className="count">1 of 7</span>
            </div>
            <div className="tabpanel-form">
                <div className="row">
                    <div className="col-lg-12 col-lg-12 col-sm-12">
                        <h4 className="form-inner-heading">Full Legal Name</h4>
                        <div className="col-lg-4 col-lg-4 col-sm-4" style={{ paddingLeft: "0px" }} >
                            <input type="text" name="first-name" className="input-field" placeholder="First Name" />
                        </div>
                        <div className="col-lg-4 col-lg-4 col-sm-4">
                            <input type="text" name="middle-name" className="input-field" placeholder="Middle Name" />
                        </div>
                        <div className="col-lg-4 col-lg-4 col-sm-4">
                            <input type="text" name="last-name" className="input-field" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-lg-12 col-sm-12">
                        <h4 className="form-inner-heading">Email Address</h4>
                        <div className="col-lg-12 col-lg-12 col-sm-12" style={{ paddingLeft: "0px" }}>
                            <input type="text" name="email" className="input-field" placeholder="Email Address" />
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-12 col-lg-12 col-sm-12">
                        <button className="exit-btn">EXIT</button>
                        <button className="next-btn">NEXT</button>
                    </div>
                </div>
            </div>
        </div>
        <div role="tabpanel" className="tab-pane fade" id="form2">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" className="tab-pane fade" id="form3">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" className="tab-pane fade" id="form4">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" className="tab-pane fade" id="form5">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" className="tab-pane fade" id="form6">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" className="tab-pane fade" id="form7">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
    </div>
}