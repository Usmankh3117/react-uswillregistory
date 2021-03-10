import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
/* sign in style sheet */
.login-left-outer-div1 {
    background-size: cover;
    background-position: revert;
}
.mg-top-15-si {
    margin-top: 15px;
}
.mg-top-30-si {
    margin-top: 30px;
}
.heading-section .heading {
    padding-bottom: 20px;
}
.sign-in-heading-section .heading .bold {
    font-weight: 600;
}
.mg-top-30-si-not {
    margin-top: 30px;
}
.mg-top-25-si {
    margin-top: 30%;
}
.submit-btn > .submit:focus {
    border: 1px solid #f85656 !important;
}
.mg-top-21-si {
    margin-top: 21px;
}
.sign-in-heading-section .heading {
    color: #033168;
    font-size: 36px;
    padding-bottom: 13px;
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
.sign-in-section {
    margin: 5% 0%;
}
.login-img-div {
    border-radius: 25px;
    /* background-color: #254b8c; */
}
.form-heading {
    text-align: center;
}

.login-form-div {
	background-color: #fff;
	border-right: 1px;
	border-top-right-radius: 25px;
	border-bottom-right-radius: 25px;
}
.for-bg-shadow {
	padding: 0px !important;
	/* border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    
    
}
.abcd {
    background-image: url("dist/assets/img/Sign-In_background-img.png");background-size: 100%;
}
.login-form {
    padding: 0% 10%;
}
.login-form > form > .input-group {
    border: 1px solid #03336c !important;
    margin-top: 20px;
}
.login-form > form > .input-group > span {
    background-color: #033672;
    border: none !important;
    font-size: 20px;
    color: white;
    padding: 10px 24px;
    border-radius: 0px;
}
.login-form > form > .input-group > .form-control {
    border: none !important;
    box-shadow: none !important;
    font-size: 17px;
    padding: 0px 0 0 20px;
    margin: 0px 0px 0px 0px;
    height: 54px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
}
.form-control:focus {
    border: 1px solid #0d3460;
    outline: unset !important;
    box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);
}
.login-form > form > .input-group1 {
	font-size: 16px;
	margin-top: 15px;
}
.login-form > form > .input-group1 > a {
    float: right;
    font-size: 15px;
    text-decoration: none;
    color: #989cab;
}
.login-form > form > .input-group1 > label {
	font-weight: normal;
    color: #9999af;
    font-size: 15px;
}
.input-group1 > input:checked ~ label {
    color: #f35455;    
}
.input-group1 > input:checked {
    color: #f35455;    
}
.login-left-outer-div1 {
    position: relative;
}
.login-left-inner-div1 {
    position: absolute;
    left: 48px;
    top: 45%;
    color: #fff;
    line-height: 16px;
    text-align: center;
    margin: auto;
    /* right: 0; */
    width: 47%;
}
.login-left-inner-div1 > .heading1 {
    font-size: 26px;
    font-family: 'Poppins', sans-serif;
}
.login-left-inner-div1 .bold-text {
    font-weight: 600;
}
.login-left-inner-div1 > .para1 {
    font-size: 14px;  
}
.submit-btn {
	text-align: center;
	margin-top: 30px;
}
.submit-btn > .submit {
    font-size: 17px;
    color: white;
    background-color: #f85656;
    border-radius: 30px;
    border: 1px solid #f85656;
    padding: 6px 51px;
    text-transform: uppercase;
}
.rememberme {
    height: 11px;
}
.submit:hover {
    background-color: #fff;
    color: #f85656;
}
.create-one-account {
    text-align: center;
    font-size: 16px;
    margin-top: 26px;
}
.fa-arrow-right {
    color: #052d5e;
}
.create-one-account > span > a {
    color: #ff0000;
    text-decoration: underline !important;
    font-weight: 600;
}
.create-one-account > span > a:hover {
    transform: scale(1.1);
}
.logo-img {
	/* width: 100%; */
}
.red {
    color: #f85656;
}

.or-outer-div {
    border-bottom: 1px solid #d1caca;
    margin: 20px 0px;
}
.or-div {
    margin-left: 47%;
    margin-bottom: -3%;
}
.or {
    color: #8b8b8b;
    background-color: white;
    padding: 6px;
    font-size: 18px;
}
.auth-page-left-section img {
    width: 100%;
}
.login-social-media-icons {
    margin-top: 12px;
    padding-bottom: 30px;
}
.mg-bottom-30 {
    margin-bottom: 30px;
}
.bottom-icons {
    margin-left: 6%;
    color: #052f61;
    font-size: 15px;
    border: 1px solid #c3c3c3;
    border-radius: 25px;
    padding: 10px 11px;
}
.bottom-icons:hover {
    transform: scale(1.1);
}

.sign-in-outer-div {
    position: relative;
}
.sign-in-inner-div {
    position: absolute;
}
.form-heading h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 40px;
    padding-bottom: 40px;
    margin-top: 0;
}
.auth-page-left-section {
    height: 581px;
    background-repeat: no-repeat;
    background-size: cover;
}
    .auth-right-form {
    box-shadow: 1px 1px 3px 0px #ccc;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 4px;
    padding-top: 50px;
    }
.auth-page-caption-text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    top: 0;
    flex-direction: column;
}
.auth-page-caption-text h5 {
    margin: 0;
    font-size: 25px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
}
    .auth-page-caption-text p {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    }


@media all and (min-width:769px){
.auth-custom-container .col-lg-6 {
    padding: 0;
}
}

@media all and (max-width:1198px){
    .auth-page-left-section {
    height: 643px;
}

}
@media all and (max-width:992px){
        .auth-page-caption-text {
    display: none;
}
    .auth-custom-container {
    box-shadow: unset;
    border-radius: 0;
}
.auth-page-left-section {
    background: unset !important;
    height: 100%;
}
.login-form > form > .input-group > .form-control {
    height: 45px !important;
}
.login-left-outer-div1 {
    background: unset !important;
}
.sign-in-heading-section .heading {
    font-size: 40px;
}

}

@media all and (max-width:768px){
    .login-form {
    padding: 0% 0 !important;
}
.sign-in-heading-section .heading {
    font-size: 25px;
}
.form-heading h2 {
    font-size: 20px;
    padding-bottom: 10px;
}
}
@media all and (max-width:500px){
    .create-one-account .text {
    font-size: 13px;
}
.login-form > form > .input-group1 > label {
    font-size: 12px;
}
.login-form > form > .input-group1 > a {
    font-size: 12px;
}
}
`