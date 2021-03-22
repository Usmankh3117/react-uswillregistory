import React from "react";
import { Link } from 'react-router-dom';

export default function GetStartedBanner(props) {
    return <section className={`last-will-section ${props.className ? props.className : ""}`}><div className="make-your-will">
        <div className="left-div">
            <p className="heading">MAKE YOUR WILL</p>
            <p className="para">with us will registry today</p>
        </div>
        <Link to="/login">GET STARTED</Link>
    </div></section>
}


