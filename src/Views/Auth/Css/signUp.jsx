import { createGlobalStyle } from "styled-components";

export const RegisterStyle = createGlobalStyle`
/* sign in style sheet */
.form-section {
    margin: 160px 0px;
    margin-bottom: 117px
}

.login-left-outer-div1 {
    background-size: cover;
    background-position: revert;
}
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
.heading-section .heading {
    padding-bottom: 20px;
}
.register-form-div {
	background-color: #fff;
	border-right: 1px;
	border-top-right-radius: 25px;
	border-bottom-right-radius: 25px;
}
.heading-section .heading .bold {
    font-weight: 600;
}
.register-form .form-control1:focus {
    box-shadow: unset !important;
}
.submit-btn > .submit:focus {
    border: 1px solid #f85656 !important;
}
@media only screen and (max-width: 767px){
    .submit-btn>.submit {
        font-size: 12px !important ;
        color: white !important;
        width:fit-content !important;
        height:fit-content !important;
        line-height:unset !important;
        min-width: unset !important;
        background-color: #f85656 !important;
        border-radius: 30px !important;
        border: 1px solid #f85656 !important;
        padding: 10px 50px !important;
        text-transform: uppercase !important;
        -webkit-transition: all, 0.3s;
        -moz-transition: all, 0.3s;
        -ms-transition: all, 0.3s;
        -o-transition: all, 0.3s;
        transition: all, 0.3s;
    }
}
.for-bg-shadow {
	padding: 0px !important;
	border-radius: 25px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.days-month-years-row {
    margin-top: 5px;
}
.days-month-years-row .col-sm-4 {
    padding-right: 0;
}
.days-month-years-row .col-sm-4:last-child {
    padding-right: 14px;
}
.form-part {
    padding-right: 60px;
    padding-left: 40px;
}
.container {
    // width: 100%;
    // padding-left: 70px;
    // padding-right: 70px;
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
    margin-bottom: 14px;
}
.submit-btn > .submit {
    font-size: 20px;
    color: white;
    background-color: #f85656;
    border-radius: 30px;
    border: 1px solid #f85656;
    padding: 4px 54px;
}
.submit:hover {
    background-color: #fff;
    color: #f85656;
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
	/* width: 100%; */
}
.login-left-outer-div1 {
    position: relative;
}
.login-left-inner-div1 {
    position: absolute;
    left: 10%;
    top: 45%;
    color: #fff;
    line-height: 16px;
    text-align: center;
}
.login-left-inner-div1 > .heading1 {
    font-size: 26px;
}
.login-left-inner-div1 > .para1 {
    font-size: 14px;  
    font-weight: 300;
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
    margin: 1.5% 0%;
}
.sign-in-section {
    margin: 5% 0%;
}
.form-heading {
    text-align: center;
    margin-top: 13%;
}

.form-control1 {
    display: block;
    width: 100%;
    height: 53px;
    padding: 8px 7px;
    font-size: 15px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #03336c;
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
.form-control1:focus {
    border: 1px solid #0d3460;
    outline: unset !important;
    box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);
}
.empty-space {
    margin-bottom: 20% ;
}
.fa-arrow-right {
    color: #052d5e;
}
.padding-form{
        padding-right: 1px;
    }
 @media (min-width: 1400px){
    .login-left-outer-div1 {
    padding-bottom: 110px;
}
 }
    @media (max-width: 992px){
    .login-left-outer-div1 {
        background: unset !important;
    }
}
@media only screen and (min-width: 768px) and (max-width: 2000px){
    .padding-form{
        padding-right: 0px !important;
    }
  }

 
 
`