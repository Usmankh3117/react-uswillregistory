import React from 'react';
import { getDashboardLink } from '../../../Services/common';
import { getCookie } from '../../../Services/cookies'
import Swal from 'sweetalert2';

export default function Welcomenote(props) {
    const redirectionalHandler = () => {
        let userType = getCookie('userType');
        let isSubAdmin = getCookie('isSubAdmin');
        let subType = getCookie('subType')
        let isFirstTimeLogin = getCookie('isFirstTimeLogin')
        if (isFirstTimeLogin === "true") {
            if (userType === "supplier" || (isSubAdmin === "true" && userType === "user" && subType === "captain")) {
                Swal.fire("Welcome to MESH – The Maritime Marketplace",
                    "<p>We provide you with our innovative order forms for your provisions and stores orders as well as your personal dashboard for your real time evaluation.</p>"
                    , "success");
            } else if (isSubAdmin === "true" && userType === "user" && subType !== "captain") {
                Swal.fire("Welcome to MESH – The Maritime Marketplace",
                    "<p>We provide you with our innovative order forms for your provisions and stores orders.”</p>"
                    , "success");
            }
        }
        props.history.push(getDashboardLink())
    }
    return (
        <div className="pageWrapper py-4">
            <div className="container min-H100 d-flex align-items-center justify-content-center">
                <div className="pageContainer mb-0">
                    <div className="customer-note-wrapper">
                        {/* welcome logo wrap */}
                        <div className="inn-pageLogo-wrap">
                            <img className="img-fluid" src={require('../../../assets/images/logo.png')} alt="Logo" />
                        </div>
                        {/* welcome content wrap */}
                        <div className="welcome-inn-content">
                            <h2>Welcome</h2>
                            <p>Dear Customer,</p>
                            <p>thank you for your login.<br />
                                We like to welcome you on the <span className="semi-bold">demo version</span> of our purchasing platform.</p>
                            <p>MESH is the only platform including a perfect catering order and monitoring tool to provide a varied, sufficient diet
                            from a carefully selected supplier network with a focus on nutrition & consumption beside a details budget control.</p>
                            <p>MESH is the neutral platform of maritime world bringing buyers and sellers together directly with a smooth process
                            including controlling- and monitoring facilities to ensure a transparent and detailed budget application.</p>
                            <p>MESH is the purchasing platform connection professionals professionally!</p>
                            <p><span className="semi-bold">Please be informed that you start playing now with a demo version without real names of people, ports and companies.</span><br />
                                Of course not all functions are working in the demo. We are happy to share these secrets in a presentation when you contact us.</p>
                            <div className="welcome-btn-wrap">
                                <button type="button" onClick={() => redirectionalHandler()} className="btn themeReguler-btn bg-dark-blue">GOT IT!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
