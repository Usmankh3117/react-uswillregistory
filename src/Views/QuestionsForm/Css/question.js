import styled from "styled-components";

export const Wrapper = styled.div`
.started-img > img {
    width: 100%;
}
.form-section {
    margin: 5% 0%;
}
.header-lower-part {
    height: 90px;
}
.left-outer-form-div {
    background-color: #033168;
    padding: 90px 50px 50px 50px;
    width: 94%;
    margin-left: -15px;
    border-radius: 0px 10px 10px 0px;
}
.left-outer-form-div h4 {
    margin-top: 30px;
    width: 60%;
}
.right-outer-form-div {
    position: relative;
    border: 1px solid #dcdcdc;
    margin-top: 30px;
    background-color: #fff;
    margin-left: -20%;
    border-radius: 10px;
    padding: 15px;
    width: 114%;
}
.sidebar-countdown {
    position: absolute;
    left: -21px;
    right: 0;
    width: 40px;
    z-index: 1;
    border-radius: 50px;
}
.sidebar-countdown .active{
    background-color: green !important;
    border: 1px solid green !important;
    color: #fff;
}
.sidebar-countdown p {
    background-color: white;
    padding: 6px 7px 6px 14px;
    margin: 30px 0px 0px 0px;
    font-size: 18px;
    border-radius: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#Basic {
    padding:50px 30px 30px 65px;
}
.form-basic-details {
    font-weight: bold;
    color: #5a5a5a;
}
.form-inner-heading {
    font-size: 16px;
    color: gray;
    margin-top: 15px;
}
.form-input-field {
    padding: 15px;
    background-color: #d4e7e1;
    border: 1px solid #c1c1c1;
    font-size: 15px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
}
.form-btn-div {
    margin-top: 13%;
}
.form-btn-div .exit-btn {
    float: right;
    padding: 10px 10px 10px 10px;
    width: 20%;
    font-size: 15px;
    text-align: right;
    background-color: #ef3d3d;
    border: 1px solid #ef3d3d;
    color: #fff;
}
.form-btn-div .exit-btn i {
    float: left;
    margin-top: 3px;
}
.form-btn-div .next-btn {
    float: right;
    padding: 10px 10px 10px 10px;
    width: 20%;
    font-size: 15px;
    text-align: left;
    background-color: #033168;
    border: 1px solid #033168;
    color: #fff;
    margin-left: 10px;
}
.form-btn-div .next-btn i {
    float: right;
    margin-top: 3px;
}

.Residuary-form-btn-div {
    margin-top: 13%;
}
.Residuary-form-btn-div .exit-btn {
    float: right;
    padding: 10px 10px 10px 10px;
    width: 20%;
    font-size: 15px;
    text-align: right;
    background-color: #ef3d3d;
    border: 1px solid #ef3d3d;
    color: #fff;
}
.Residuary-form-btn-div .exit-btn i {
    float: left;
    margin-top: 3px;
}
.Residuary-form-btn-div .next-btn {
    float: right;
    padding: 10px 10px 10px 10px;
    width: 20%;
    font-size: 15px;
    text-align: left;
    background-color: #033168;
    border: 1px solid #033168;
    color: #fff;
    margin-left: 10px;
}
.Residuary-form-btn-div .next-btn i {
    float: right;
    margin-top: 3px;
}
.form_top_controls {
	text-align: left;
	border-bottom: 2px solid #d4e7e1;
    margin-top: 1px;
    margin-left: 30px;
}

.form_top_controls ul li {
    list-style: none;
    font-size: 22px;
    color: #8a8787;
    display: inline-block;
    margin-right: 6%;
    position: relative;
    cursor: pointer;
}
.form_top_controls ul li.active:after {
    opacity: 1;
    bottom: -12px;
    width: 100%;
    height: 3px;
    background: #033168;
    content: "";
}
.pd-left-0 {
    padding-left: 0px;
}

.form_top_controls ul li:after {
	position: absolute;
	left: 0;
	bottom: -2px;
	width: 100%;
	height: 2px;
	background: #14ff00;
	content: "";
	opacity: 0;
}

.form_top_controls ul li:last-child {
	margin-right: 0;
}

.enable-tab {
    display: block;
}
.disable-tab {
    display: none;
}
.add-another-one {
    border: 1px dotted gray;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 15px;
    margin-top: 15px;
}


`