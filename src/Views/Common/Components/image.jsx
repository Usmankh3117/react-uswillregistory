import React from "react";
export default function Image(props) {
    var imageSrc = require(`../../../assets/img/${props.name}`);
    return <img style={props.style ? props.style : {}} src={imageSrc} alt={props.alt} className={props.className} />
}

export  function Icon(props) {
    var imageSrc = require(`../../../assets/icons/${props.name}`);
    return <img style={props.style ? props.style : {}} src={imageSrc} alt={props.alt} className={props.className} />
}