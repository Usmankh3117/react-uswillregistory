import {createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
/* sign in style sheet */

.heading-section {
    text-align: center;
}
.heading {
    color: #033168;
}
.link {
    font-size: 22px;
}
.link > a {
    color: red;
    text-decoration: underline;
}
.please-login {
	text-align: center;
	color: #595959;
}

.login-img-div {
    border-radius: 25px;
    background-color: #254b8c;
}
.form-heading {
	text-align: center;
}

.register-form-div {
	background-color: #fff;
	border-right: 1px;
	border-top-right-radius: 25px;
	border-bottom-right-radius: 25px;
}
.for-bg-shadow {
	padding: 0px !important;
	border-radius: 25px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.register-form {
    padding: 0% 10%;
}
.register-form > form > .input-group {
	border: 1px solid black !important; 
	margin-top: 20px;
}
.register-form > form > .input-group > span {
    background-color: #033168;
    border: none !important;
    font-size: 29px;
    color: white;
    padding: 15px 30px;
    border-radius: 0px;
}
.register-form > form > .input-group > .form-control {
    border: none !important;
	box-shadow: none !important;
	font-size: 21px;
	padding-bottom: 0px;
	margin: 14px 0px 0px 0px;
}
.register-form > form > .input-group1 {
	font-size: 16px;
	margin-top: 15px;
}
.register-form > form > .input-group1 > a {
    float: right;
    font-size: 16px;
    text-decoration: none;
    color: #989cab;
}
.register-form > form > .input-group1 > label {
	font-weight: normal;
	color: #9999af;
}
.input-group1 > input:checked ~ label {
    color: #00a44b;    
}
.input-group1 > input:checked {
    color: #00a44b;    
}
.submit-btn {
	text-align: center;
	margin-top: 30px;
}
.submit-btn > .submit {
    font-size: 25px;
    color: white;
    background-color: #f85656;
    border-radius: 30px;
    border: 1px solid #f85656;
    padding: 10px 40px 10px 40px;
}
.create-one-account {
	text-align: center;
	font-size: 17px;
}
.create-one-account > span > a {
	color: #f85656;
	text-decoration: none;
}
.logo-img {
	width: 100%;
}
.red {
    color: #f85656;
}

.or-outer-div {
    border-bottom: 2px solid #d1caca;
}
.or-div {
    margin-left: 50%;
    margin-bottom: -3.5%;
}
.or {
    color: #8b8b8b;
    background-color: white;
    padding: 10px;
    font-size: 20px;
}

.mg-bottom-30 {
    margin-bottom: 30px;
}
.bottom-icons {
    margin-left: 10%;
    color: #626161;
    font-size: 20px !important;
    border: 1px solid;
    border-radius: 25px;
    padding: 10px 11px;
}

.input-group1 {
    width: 100%;
    margin: 6.2px 0px;
}

.form-control1 {
    display: block;
    width: 100%;
    height: 48px;
    padding: 8px 7px;
    font-size: 18px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #acacac;
    border-radius: 0px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
}
`