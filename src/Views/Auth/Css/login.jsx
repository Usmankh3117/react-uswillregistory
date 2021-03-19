import { createGlobalStyle } from "styled-components";
import BGImage from "../../../assets/img/Sign-In_background-img.png";
import BottomShadow from "../../../assets/img/bottom-shadow.png";
import LoginSplash from "../../../assets/img/login-splash.png"
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

.submit-btn>.submit:focus {
    border: 1px solid #f85656 !important;
}

.mg-top-21-si {
    margin-top: 21px;
}

.sign-in-heading-section .heading {
    color: #033168;
    font-size: 43px;
    margin: 0px;
    font-weight: 400;
    text-transform: capitalize;
}

.link {
    font-size: 22px;
}

.link>a {
    color: red;
    text-decoration: underline;
}

.please-login {
    text-align: center;
    color: #595959;
}

.sign-in-section {
    margin: 160px 0px;
}

.login-img-div {
    border-radius: 25px;
    /* background-color: #254b8c; */
}

.form-heading {
    text-align: center;
    margin-top: 15%;
}

.login-form {
    /* padding: 0% 10%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.login-form h2 {
    font-size: 43px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 0px;
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
    background-image: url(${BGImage});
    background-size: 100%;
}

.login-form {
    /* padding: 0% 10%; */
}

.login-form form>.input-group {
    border: 1px solid #03336c !important;
    margin-top: 20px;
    display: flex;
}

.login-form form>.input-group>span {
    background: rgb(4, 58, 122);
    background: -moz-linear-gradient(180deg, rgba(4, 58, 122, 1) 0%, rgba(1, 41, 89, 1) 66%);
    background: -webkit-linear-gradient(180deg, rgba(4, 58, 122, 1) 0%, rgba(1, 41, 89, 1) 66%);
    background: linear-gradient(180deg, rgba(4, 58, 122, 1) 0%, rgba(1, 41, 89, 1) 66%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#043a7a", endColorstr="#012959", GradientType=1);
    border: none !important;
    font-size: 20px;
    color: white;
    padding: 10px 15px;
    border-radius: 0px;
    width: 92px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.login-form form>.input-group>.form-control {
    border: none !important;
    box-shadow: none !important;
    font-size: 17px;
    padding: 0px 20px 0px 20px;
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

.login-form form>.input-group1 {
    font-size: 16px;
    margin-top: 15px;
}

.login-form form>.input-group1>a {
    float: right;
    font-size: 15px;
    text-decoration: none;
    color: #989cab;
}

.login-form form>.input-group1>label {
    font-weight: normal;
    color: #9999af;
    font-size: 15px;
}

.input-group1>input:checked~label {
    color: #f35455;
}

.input-group1>input:checked {
    color: #f35455;
}

.login-left-outer-div1 {
    position: relative;
    margin-top: 30px;
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

.login-left-inner-div1>.heading1 {
    font-size: 26px;
    font-family: 'Poppins', sans-serif;
}

.login-left-inner-div1 .bold-text {
    font-weight: 600;
}

.login-left-inner-div1>.para1 {
    font-size: 14px;
}

.submit-btn {
    text-align: center;
    margin-top: 30px;
}

.submit-btn>.submit {
    font-size: 19px;
    color: white;
    background-color: #f85656;
    border-radius: 30px;
    border: 1px solid #f85656;
    padding: 0px 20px;
    text-transform: uppercase;
    height: 49px;
    line-height: 49px;
    min-width: 220px;
    -webkit-transition: all, 0.3s;
    -moz-transition: all, 0.3s;
    -ms-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
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
    font-size: 18px;
    margin-top: 26px;
}

.fa-arrow-right {
    color: #052d5e;
}

.create-one-account>span>a {
    color: #ff0000;
    text-decoration: none !important;
    font-weight: 600;
    position: relative;
}

.create-one-account>span>a::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #ff0000;
    position: absolute;
    right: 0px;
    bottom: -1px;
}

.create-one-account>span>a:hover {
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

.login-social-media-icons {
    margin-top: 15px;
}

.mg-bottom-30 {
    margin-bottom: 30px;
}

.bottom-icons {
    margin: 0px 20px;
    color: #052f61;
    font-size: 15px;
    border: 1px solid #c3c3c3;
    border-radius: 100px;
    padding: 0px;
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    -webkit-transition: all, 0.3s;
    -moz-transition: all, 0.3s;
    -ms-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
}

.bottom-icons:hover {}

a.facebookIcon:hover i {
    background: #3b5998;
    color: #fff;
    border: 1px solid #3b5998;
}

a.instIcon:hover i {
    background: #7232bd;
    color: #fff;
    border: 1px solid #7232bd;
}

a.googleIcon:hover i {
    background: #ea4335;
    color: #fff;
    border: 1px solid #ea4335;
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

.login-wrapper {
    display: flex;
    border-radius: 20px;
    margin-top: 50px;
    position: relative;
    margin-bottom: 117px;
    flex-direction: column;
}

.login-wrapper:after {
    content: '';
    display: block;
    height: 112px;
    width: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -112px;
    background: url(${BottomShadow});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top center;
}

.login-holder {
    box-shadow: 10px 0px 40px #ebecee;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
}

.login-block {
    flex: 1 0 50%;
}

.login-block.login-block-left {
    justify-content: center;
    align-items: center;
    background: url(${LoginSplash});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.login-left-content {
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    min-height: 595px;
}

.login-left-content h2 {
    font-weight: 400;
    font-size: 26px;
}

.login-left-content p {
    font-size: 17px;
    font-weight: 200;
}

/* zee */
.login-block-holder {
    padding: 50px;
}

@media all and (max-width:992px) {
    .form-heading {
        margin-top: 5%;
    }

    .login-form form>.input-group>.form-control {
        height: 45px !important;
    }

    .login-left-outer-div1 {
        background: unset !important;
    }

    .sign-in-heading-section .heading {
        font-size: 40px;
    }

    .login-wrapper:after {
        height: 70px;
        bottom: 0px;
        position: relative;
    }

    .login-wrapper {
        margin-right: 10px;
        margin-left: 10px;
    }

    .sign-in-section {
        margin: 0px;
    }

    .login-left-content {

        padding: 0px 20px;
    }

}

@media all and (max-width:768px) {
    .login-form {
        /* padding: 0% 0 !important; */
    }

    .sign-in-heading-section .heading {
        /* font-size: 25px; */
    }

    .form-heading h2 {
        font-size: 20px;
        padding-bottom: 10px;
    }

    .login-block.login-block-left {
        display: none;
    }


}

@media all and (max-width:500px) {
    .create-one-account .text {
        font-size: 13px;
    }

    .login-form form>.input-group1>label {
        font-size: 12px;
    }

    .login-form form>.input-group1>a {
        font-size: 12px;
    }
}

@media screen and (max-width: 991px) and (min-width: 769px) {

    .login-block-holder {
        padding: 50px 40px;
    }

    .login-form form>.input-group1>label {
        font-size: 12px;
    }

    .login-form form>.input-group1>a {
        font-size: 12px;
    }

    .create-one-account {
        font-size: 13px;
    }

    .login-left-content h2 {
        font-size: 16px;
    }

    .login-left-content p {
        font-size: 14px;
    }

}

`