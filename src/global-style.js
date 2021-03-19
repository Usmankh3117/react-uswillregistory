import { createGlobalStyle } from "styled-components";
import BottomShadow from './assets/img/bottom-shadow.png';

export const Style = createGlobalStyle`
body {
    font-family: 'Poppins', sans-serif !important;
    background-color: #fefefe !important;
}



.header-section {
    /* position:relative; */
}

.header-section .container {
    position: relative;
}

.submit-btn>.submit:hover {
    border: 1px solid #f85656 !important;
    background: transparent;
    color: #f85656;
}

.list-group-item img {
    border-radius: 4px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
}

.footer-bottom {
    background: #363739;
    padding-top: 10px;
    padding-bottom: 10px;
}

button:focus {
    border: none !important;
}

.forgot:hover{
     
        color: #033168 !important;
      
}

.icondiv {
    position: relative;
}

.started-img {
    position: relative;
}

.banner-text {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
}

.banner-text>.banner-heading>h1 {
    font-size: 45px;
    font-weight: 500;
    margin-bottom: 0;
}

.banner-text>.banner-details>p {
    font-size: 30px;
    font-weight: 300;
}

.header-top-part {
    background-color: #033168;
    padding: 15px 0px;
}

.header-lower-part {
    background-color: #fff;
}

.header-right-img {
    position: absolute;
    right: -40px;
    top: 0px;
    width: 100%;
    max-width: 190px;
    z-index: 1;
}

.header-right-img>img {
    width: 100%;
}

.right-aline {
    float: right;
}

.list-group-horizontal {
    margin-top: 3%;
}

.list-group-item {
    border: none !important;
}

.logo-img {
    width: 100%;
    max-width: 475px;
}

.submit-btn>.submit:focus {
    border: none !important;
    outline: unset;
}

.btn4:focus {
    border: none !important;
    outline: unset;
}

.btn5:focus {
    border: none !important;
    outline: unset;
}

.mg-top-10 {
    margin-top: 10px;
}

.mg-top-15 {
    margin-top: 15px;
}

.mg-top-20 {
    margin-top: 20px;
}

.mg-top-21 {
    margin-top: 21px;
}

.mg-top-25 {
    margin-top: 25px;
}

.mg-top-28 {
    margin-top: 28px;
}

.mg-top-30 {
    margin-top: 30px;
}

.mg-top-50 {
    margin-top: 50px;
}

.mg-top-100 {
    margin-top: 100px;
}

.mg-top-extra {
    margin-top: 34px;
}

/* -----------------
    header
 ------------------*/
.list-group {
    display: flex;
    border-radius: .25rem;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    padding-left: 0;
}

a:hover,
a:active {
    text-decoration: none !important;
}

.list-group-item {
    border: none !important;
}

.top-menu {
    font-size: 15px;
    color: #3c3c3c;
    line-height: 5px;
    /* display: block; */
    text-decoration: none !important;
}

.active-menu {
    color: #023169;
}

/*  
.list-group {
    display: unset;
} */

/*---------------------
  rating
-----------------------*/

* {
    margin: 0;
    padding: 0;
}

.rate {
    float: left;
    height: 34px;
    padding: 0 2px;
}

.rate:not(:checked)>input {
    position: absolute;
    top: -9999px;
}

.rate:not(:checked)>label {
    float: right;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 24px;
    color: #ccc;
}

.rate:not(:checked)>label:before {
    content: '★ ';
}

.rate>input:checked~label {
    color: #ffc700;
}

.rate:not(:checked)>label:hover,
.rate:not(:checked)>label:hover~label {
    color: #deb217;
}

.rate>input:checked+label:hover,
.rate>input:checked+label:hover~label,
.rate>input:checked~label:hover,
.rate>input:checked~label:hover~label,
.rate>label:hover~input:checked~label {
    color: #c59b08;
}



/*---------------------
  Footer
-----------------------*/
.mr-2 {
    border: 1px solid #c7c7c7;
    margin-bottom: 10px;
}

.footer {
    background: #2a2a2c;
    padding-top: 30px;
    padding-bottom: 15px;
}

.footer__about {
    margin-bottom: 0px;
}

.footer__about ul li {
    font-size: 16px;
    color: #cfe9e0;
    line-height: 36px;
    list-style: none;
}

.footer__about__logo {
    margin-bottom: 15px;
    width: 100px;
}

.footer__about__logo>img {
    width: 100%;
}

.footer__about__logo a {
    display: inline-block;
}

.footer__widget {
    /* margin-bottom: 30px; */
    overflow: hidden;
}

.footer__widget h5 {
    color: #cfe9e0;
    font-weight: 700;
    margin-bottom: 10px;
}

.footer__widget ul {
    width: 50%;
    float: left;
    margin-top: 10%;
    line-height: 38px;
}

.footer__widget ul li {
    list-style: none;
}

.footer__widget ul li a {
    color: #9eaca7;
    font-size: 14px;
    line-height: 30px;
    white-space: nowrap;
    font-weight: 300;
    opacity: 0.8;
}

.footer__widget p {
    font-size: 14px;
    color: #cfe9e0;
    margin-bottom: 30px;
    line-height: 32px;
    font-weight: 300;
    opacity: 0.9;
}

.footer__widget form {
    position: relative;
    margin-bottom: 30px;
}

.footer__widget form input {
    width: 100%;
    font-size: 16px;
    padding-left: 20px;
    color: #cfe9e0;
    height: 46px;
    border: 1px solid #ededed;
}

.footer__widget form input::placeholder {
    color: #cfe9e0;
}

.footer__widget form button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 26px;
    height: 100%;
}

.footer__widget .footer__widget__social a {
    display: inline-block;
    height: 41px;
    width: 41px;
    font-size: 16px;
    color: #cfe9e0;
    border: 1px solid #ededed;
    border-radius: 50%;
    line-height: 38px;
    text-align: center;
    background: #ffffff;
    -webkit-transition: all, 0.3s;
    -moz-transition: all, 0.3s;
    -ms-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
    margin-right: 10px;
}

.footer__widget .footer__widget__social a:last-child {
    margin-right: 0;
}

.footer__widget .footer__widget__social a:hover {
    background: #7fad39;
    color: #ffffff;
    border-color: #ffffff;
}

.footer__copyright {
    border-top: 2px solid #555;
    padding: 15px 0;
    overflow: hidden;
    margin-top: 20px;
}

.footer__copyright__text {
    font-size: 14px;
    color: #cfe9e0;
    float: left;
    line-height: 25px;
}

.footer__copyright__payment {
    float: right;
}


.footer-store-logo {
    background-color: #2a2a2c !important;
    padding: 0px 0px 0px 0px !important;
}

.footer-store-logo:hover {
    transform: scale(1.1);
}

.footer-store-logo1 {
    background-color: #2a2a2c !important;
}

.footer-store-logo1 img {
    width: 50px;
    border-radius: 5px;
}

.footer-list-div {
    margin-top: 5%;
}

.pad-right-15 {
    padding-right: 15px;
}

.footer-heading {
    font-weight: 300;
    /* display: inline-block; */
    padding-bottom: 5px;
    position: relative;
}

.footer-heading::before {
    content: "";
    position: absolute;
    width: 15%;
    height: 1px;
    bottom: 0;
    left: 0%;
    /* border-bottom: 1px solid #cfe9e0; */
}

.copyrights {
    margin-top: 15px;
}

.copyrights>p {
    color: #fff;
    text-align: center;
    font-size: 16px;
}

.footer-icon {
    background-color: #1e1f26 !important;
    color: #cfe9e0 !important;
}

.footer-icon>i {
    font-size: 20px;
}

.footer-icon-signin {
    background-color: #2a2a2c !important;
    color: #fff !important;
}

.footer-icon-signin1 {
    background-color: #2a2a2c !important;
    color: #fff !important;
}

.footer-icon-signin>i {
    font-size: 20px;
}

.footer-submit-btn {
    font-size: 18px;
    position: absolute;
    top: 11px;
    right: 24px;
    color: #1e1f26;
    background-color: white;
    border: none;
    height: 10px;
}

.footer-submit-btn1 {

    font-size: 20px;
    position: absolute;
    top: 4px;
    right: 10px;
    color: #1e1f26;
    background-color: white;
    border: none;
    height: 10px;

}

.footer-submit-btn1:hover,
.footer-submit-btn1:active,
.footer-submit-btn1:focus {
    outline: none;

}

.footer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-form {
    margin-top: -5px !important;
}

.footer-form>form>input {
    color: black;
    height: 36px;
    line-height: 36px;
    font-size: 13px;
    padding: 0px 35px 0px 15px;
}

.footer-form>form>input:hover,
.footer-form>form>input:active,
.footer-form>form>input:focus {
    outline: none;

}

.footer1 {
    background: #2a2a2c;
    padding: 25px 0 25px 0;
}

.bottom-footer {
    background: #363739;
    padding: 10px 0 10px 0;
}

.footer-store-logo1:hover {
    transform: scale(1.1);
}

.list-group1 {
    display: flex;
    border-radius: .25rem;
    padding-left: 0;
    /* margin-bottom: 20px; */
    align-items: center;
    margin: 0px;
}

.list-group-item1 {
    position: relative;
    display: block;
    /* padding: 0px 10px; */
    margin-right: 10px;
    font-size: 17px;
}

.list-group-item1:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.margin-top-10 {
    margin-top: 10%;
}

.margin-top-6 {
    margin-top: 6%;
}

.bold {
    font-weight: 500;
}

.blue {
    color: #033168;
}

.center {
    text-align: center;
}

/*--------------------------------- Responsive Media Quaries -----------------------------*/

@media only screen and (min-width: 1441px) {
    .last-will-section>.make-your-will {
        right: 37% !important;
    }

    .last-section>.make-will {
        top: 78% !important;
        right: 37% !important;
    }

    .c-details {
        border: 1px solid #ffffff;
        box-shadow: 0px 0px 10px #ececec;
        margin: 15px;
        width: 30% !important;
        position: relative !important;
    }

    .faq-div {
        width: 47% !important;
    }
}

@media only screen and (min-width: 1200px) {

    .btn4 {
        /* float: right; */
    }

    .btn5 {
        padding: 0px 0px !important;
    }

    /* .container {
		max-width: 1170px;
    } */
    .will-div {
        box-shadow: 0px 0px 10px #ececec;
        border-radius: 5px;
        position: relative;
        width: 22% !important;
        margin: 15px;
    }

    .will-icon {
        font-size: 20px !important;
    }

    .witnesa-page-form>span {
        background: #00387b;
        padding: 24px 5px 29px 0px !important;
        font-size: 19px !important;
        color: white;
        margin-left: -5px;
        font-weight: 500;
    }

    .self-affidevit-form>span {
        background: #d81212;
        padding: 25px 5px 30px 0px !important;
        font-size: 19px !important;
        color: white;
        margin-left: -5px;
        font-weight: 500;
        width: 100%;
    }

    .login-form-div {
        padding-bottom: 8px;
    }
}


/* Medium Device = 1200px */

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .form-heading {
        margin-top: 15% !important;
    }

    .submit-btn {
        margin-top: 15px !important;
    }

    .login-left-inner-div1 {
        left: 5% !important;
        top: 44% !important;
    }

    .btn4 {
        float: right;
    }

    .btn5 {
        padding: 0px 0px !important;
    }

    .top-menu {
        font-size: 14px;
    }

    .info-heading {
        font-size: 16px;
    }

    .Nationwide {
        font-size: 18px;
    }

    .info-detail {
        font-size: 16px;
    }

    .header-right-img {
        /* position: absolute;
        right: 2%;
        top: 14%;
        width: 100px;
        z-index: 1; */
    }

    .landing-page-top-text {
        width: 50% !important;
    }

    .will-div {
        box-shadow: 0px 0px 10px #ececec;
        border-radius: 5px;
        position: relative;
        width: 20% !important;
        margin: 15px;
    }

    .will-icon {
        font-size: 20px !important;
    }

    .witnesa-page-form>span {
        background: #00387b;
        padding: 25px 5px 28px 0px !important;
        font-size: 19px !important;
        color: white;
        margin-left: -5px;
        font-weight: 500;
    }

    .self-affidevit-form>span {
        background: #d81212;
        padding: 25px 5px 29px 0px !important;
        font-size: 19px !important;
        color: white;
        margin-left: -5px;
        font-weight: 500;
        width: 100%;
    }

    .last-will-section>.make-your-will {
        position: absolute;
        top: 95%;
        right: 8% !important;
    }

    .last-section>.make-will {
        position: absolute;
        top: 95%;
        right: 17% !important;
    }

    .mg-top-top-extra {
        margin-top: 69px !important;
    }

    .mg-top-bottom-extra {
        margin-top: 111px !important;
    }

    .mg-top-top-extra-reset {
        margin-top: 33px !important;
    }

    .mg-top-bottom-extra-reset {
        margin-top: 31px !important;
    }

    .mg-top-top-extra-verify {
        margin-top: 155px !important;
    }

    .mg-top-bottom-extra-verify {
        margin-top: 158px !important;
    }

    .will-icon1 {
        right: 10% !important;
        top: 26% !important;
        padding: 0px 12px !important;
    }

    .will-icon1>img {
        width: 20px !important;
        height: 20px !important;
    }
}

/* Tablet Device = 768px */

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .form-control1 {
        height: 30px !important;
        padding: 3px 2px !important;
        font-size: 11px !important;
    }

    .submit-btn>.submit {
        font-size: 16px !important;
    }

    .will-icon1 {
        right: 10% !important;
        top: 22% !important;
        padding: 0px 12px !important;
    }

    .will-icon1>img {
        width: 20px !important;
        height: 20px !important;
    }

    .btn5 {
        padding: 0px 0px !important;
    }

    .top-menu {
        font-size: 9px;
    }

    .list-group {
        margin-top: 0px !important;
        margin-bottom: 0px !important;
    }

    .will-icon {
        top: 26% !important;
        font-size: 16px !important;
    }

    .will-details>.detail-heading {
        font-size: 12px !important;
    }

    .will-details>.detail-p {
        font-size: 9px !important;
        line-height: 13px !important;
    }

    .will-details>.learn-more>a {
        font-size: 9px !important;
    }

    .btn4 {
        float: right;
    }

    .btn4,
    .btn5 {
        font-size: 11px !important;
    }

    .button1 {
        font-size: 14px !important;
    }

    .footer__widget ul li a {
        line-height: 21px !important;
    }

    .landing-page-top-text {
        width: 63% !important;
        top: 10% !important;
    }

    .header-right-img {
        position: absolute;
        right: 4%;
        top: 7%;
        width: 84px;
        z-index: 1;
    }

    .logo-img {
        /* width: 70% !important;
        padding: 12px !important; */
    }

    .will-div {
        box-shadow: 0px 0px 10px #ececec;
        border-radius: 5px;
        position: relative;
        width: 20% !important;
        margin: 15px;
    }

    .witnesa-page-form>img {
        width: 35%;
    }

    .witnesa-page-form>span {
        padding: 14px 3px 16px 0px !important;
        font-size: 16px !important;
    }

    .self-affidevit-form>img {
        width: 35%;
    }

    .self-affidevit-form>span {
        padding: 15px 3px 16px 0px !important;
        font-size: 16px !important;
    }

    .last-will-img>img {
        width: 100%;
    }

    .last-section>.make-will>img {
        width: 100%;
    }

    .margin-top-10 {
        margin-top: 0% !important;
    }

    .last-will-section>.make-your-will {
        right: 4% !important;
    }

    .last-section>.make-will {
        right: 4% !important;
    }

    .c-details {
        margin: 5px !important;
    }

    .faq-div {
        width: 100% !important;
    }

    .mg-top-top-extra {
        margin-top: 25px !important;
    }

    .mg-top-bottom-extra {
        margin-top: 63px !important;
    }

    .mg-top-top-extra-reset {
        margin-top: 0px !important;
    }

    .mg-top-bottom-extra-reset {
        margin-top: 12px !important;
    }

    .form-heading>p {
        font-size: 22px !important;
    }

    .login-form>form>.input-group {
        margin-top: 10px;
    }

    .submit-btn {
        margin-top: 9px !important;
    }

    .login-left-inner-div1 {
        left: 6% !important;
    }

    .login-left-inner-div1>.heading1 {
        font-size: 20px !important;
    }

    .login-left-inner-div1>.para1 {
        font-size: 12px !important;
    }

    .mg-top-top-extra-verify {
        margin-top: 100px !important;
    }

    .mg-top-bottom-extra-verify {
        margin-top: 101px !important;
    }

    .profile-section-div>div>span {
        font-size: 10px !important;
    }

    .profile-section-div>div>img {
        width: 30px !important;
    }

    .profile-section-div {
        margin-top: 0px !important;
        margin-bottom: 0px !important;
        height: 50px !important;
    }
}

/* Wide Mobile = 480px */

@media only screen and (max-width: 767px) {
    .landing-page-top-text>.where-there {
        margin-bottom: 0;
        font-size: 21px !important;
    }

    .landing-page-top-text>.for-those-left-behind {
        font-size: 16px !important;
    }

    .landing-page-top-text>.there-a-will {
        font-size: 24px !important;
    }

    .last-will-img>img {
        width: 100% !important;
    }

    .will-details {
        margin-top: 3% !important;
    }

    .last-will-section>.make-your-will>a {
        position: unset !important;
        text-align: center !important;
        margin-top: 11px !important;
        display: block;
    }

    .form-control1 {
        height: 24px !important;
        padding: 3px 3px !important;
        font-size: 12px !important;
    }

    .submit-btn>.submit {
        /* font-size: 16px !important;
        padding: 4px 44px !important; */
    }

    .register-form {
        padding: 0% 5% !important;
        margin-top: 1% !important;
    }

    .form-heading {
        margin-top: 2% !important;
    }

    .submit-btn {
        margin-top: 9px !important;
    }

    .login-left-inner-div1 {
        left: 6% !important;
    }

    .login-left-inner-div1>.heading1 {
        font-size: 100% !important;
    }

    .login-left-inner-div1>.para1 {
        font-size: 100% !important;
    }

    .button1 {
        font-size: 11px !important;
    }

    .will-icon {
        right: 5% !important;
        top: 53% !important;
    }

    .btn4 {
        margin-bottom: 15px !important;
    }

    .btn5 {
        padding: 0px 14px 0px 0px !important;
    }

    .footer__widget h5 {
        margin-bottom: 0px !important;
    }

    .footer__widget ul {
        margin-top: 0% !important;
    }

    .footer__about__logo {
        margin-top: 15px !important;
    }

    .fa-scroll {
        font-size: 20px !important;
    }

    .landing-page-top-text {
        width: 63% !important;
        top: 10% !important;
    }

    /* .header-right-img {
        position: absolute;
        right: 8%;
        top: 7%;
        width: 60px;
        z-index: 1;
    } */

    .logo-img {
        /* width: 44% !important;
        padding: 12px; */
    }

    .list-group {
        display: contents;
        border-radius: .25rem;
        margin-top: 35px !important;
        margin-bottom: 35px !important;
        padding-left: 0;
    }

    .will-div {
        width: 100% !important;
        margin: 0px !important;
    }

    .self-affidevit-form {
        margin-top: 10% !important;
    }

    .last-will-section>.make-your-will {
        position: absolute;
        top: 98% !important;
        right: 0% !important;
        text-align: center;
    }

    .last-will-section>.make-your-will>.left-div>.heading {
        font-size: 18px !important;
        margin-top: 7px !important;
        margin-bottom: -10px;
    }

    .last-will-section>.make-your-will>.left-div>.para {
        font-size: 16px !important;
        margin-bottom: 4px !important;
    }

    .last-section>.make-will>img {
        width: 100%;
    }

    .last-section>.make-will {
        right: 0% !important;
    }

    .last-will-section>.make-your-will>img {
        width: 100%;
    }

    .footer-store-logo>img {
        /* width: 10% !important; */
    }

    .footer__about>.list-group {
        display: flex !important;
    }

    .c-details {
        margin: 5px !important;
    }

    .faq-div {
        width: 100% !important;
    }

    .search-menu {
        font-size: 24px !important;
    }

    .mg-top-top-extra {
        margin-top: 13px !important;
    }

    .mg-top-bottom-extra {
        margin-top: 54px !important;
    }

    .mg-top-top-extra-reset {
        margin-top: 0px !important;
    }

    .mg-top-bottom-extra-reset {
        margin-top: 20px !important;
    }

    .mg-top-top-extra-verify {
        margin-top: 100px !important;
    }

    .mg-top-bottom-extra-verify {
        margin-top: 100px !important;
    }

    .footer-logo {
        width: 90% !important;
    }


}

/* Small Device = 320px */

@media only screen and (max-width: 479px) {
    .form-control1 {
        /* height: 14px !important; */
        padding: 3px 3px !important;
        font-size: 6px !important;
    }

    .register-form {
        padding: 0% 0% !important;
        margin-top: 0% !important;
    }

    .empty-space {
        margin-bottom: 0% !important;
    }

    .form-control {
        height: 23px !important;
    }

    .login-form>form>.input-group {
        margin-top: 10px;
    }

    .rememberme {
        height: 9px !important;
    }

    .mg-top-15-si {
        margin-top: 0px !important;
    }

    .or {
        font-size: 9px !important;
    }

    .bottom-icons {
        margin-left: 3% !important;
        font-size: 9px !important;
        padding: 4px 5px !important;
    }

    .footer-store-logo1>img {
        width: 42% !important;
    }

    .footer-form {
        margin-top: 8px !important;
    }

    .footer-form>form>input {
        font-size: 12px !important;
        padding: 8px !important;
    }

    .copyrights>p {
        font-size: 5px !important;
    }

    .footer-icon-signin1>span {
        font-size: 12px !important;
    }

    .login-social-media-icons {
        margin-top: 4% !important;
    }

    .login-left-inner-div1 {
        left: 6% !important;
        top: 40% !important;
        line-height: 4px !important;
    }

    .heading-section>.heading {
        font-size: 16px !important;
    }

    .login-left-inner-div1>.heading1 {
        font-size: 9px !important;
    }

    .login-left-inner-div1>.para1 {
        font-size: 7px !important;
    }

    .last-will-section>.make-your-will>a {
        padding: 4px 8px 5px 8px !important;
        font-size: 11px !important;
    }

    .landing-page-top-text {
        width: 63% !important;
        top: 10% !important;
    }

    .landing-page-top-text>.where-there {
        font-size: 12px !important;
    }

    .landing-page-top-text>.there-a-will {
        font-weight: 600;
        font-size: 18px !important;
    }

    .landing-page-top-text>.for-those-left-behind {
        margin-bottom: 12%;
        font-size: 10px !important;
    }

    .landing-page-top-text>.get-started-link {
        padding: 6px 10px !important;
        font-size: 12px !important;
    }

    .c-details {
        width: 100% !important;
        margin-top: 10% !important;
    }

    .logo-img {
        /* width: 50% !important; */
    }

    .faq-div {
        width: 100% !important;
    }

    .search-menu {
        font-size: 14px !important;
    }

    .mg-top-top-extra {
        margin-top: 0px !important;
    }

    .mg-top-bottom-extra {
        margin-top: 28px;
    }

    .mg-top-top-extra-reset {
        margin-top: 0px !important;
    }

    .mg-top-bottom-extra-reset {
        margin-top: 20px !important;
    }

    .mg-top-top-extra-verify {
        margin-top: 0px !important;
    }

    .mg-top-bottom-extra-verify {
        margin-top: 15px !important;
    }

    .footer-logo {
        width: 25% !important;
    }
}

@media only screen and (max-width: 376px) {
    .form-control {
        height: 23px !important;
    }

    .login-form>form>.input-group {
        margin-top: 10px;
    }

    .rememberme {
        height: 7px !important;
    }

    .mg-top-15-si {
        margin-top: 0px !important;
    }

    .or {
        font-size: 9px !important;
    }

    .bottom-icons {
        margin-left: 3% !important;
        font-size: 9px !important;
        padding: 4px 6px !important;
    }

    .footer-store-logo1>img {
        width: 42% !important;
    }

    .footer-form {
        margin-top: 8px !important;
    }

    .footer-form>form>input {
        font-size: 12px !important;
        padding: 8px !important;
    }

    .copyrights>p {
        font-size: 5px !important;
    }

    .footer-icon-signin1>span {
        font-size: 12px !important;
    }

    .last-will-section>.make-your-will>a {
        padding: 4px 8px 5px 8px !important;
        font-size: 11px !important;
    }

    .witnesa-page-form>img {
        width: 34% !important;
    }

    .witnesa-page-form>span {
        padding: 20px 11px 25px 14px !important;
        font-size: 20px !important;
    }

    .self-affidevit-form>img {
        width: 34% !important;
    }

    .self-affidevit-form>span {
        padding: 21px 11px 26px 14px !important;
        font-size: 20px !important;
    }
}

/* zee chnges */

.navbar-collapse.collapse {}

.navbar-brand {
    display: none;

}

.navbar-default.navbar {
    margin-bottom: 0px;
    border: 1px solid transparent;
    margin-top: 10px;
    background: transparent;
}

.navbar-default.navbar .navbar-nav>.active>a,
.navbar-default.navbar .navbar-nav>.active>a:focus,
.navbar-default.navbar .navbar-nav>.active>a:hover {
    color: #012959;
    background-color: transparent;
}

.navbar-default.navbar .navbar-nav>.active>a,
.navbar-default.navbar .navbar-nav>.active>a:focus,
.navbar-default.navbar .navbar-nav>.active>a:hover {
    color: #012959;
    background-color: transparent;
}



.navbar-default.navbar .nav>li>a {
    padding: 10px 30px;
}

.navbar-default.navbar .navbar-nav>li>a:first-child {
    padding-left: 0px;
}


@media (max-width: 991px) {
    .navbar-header {
        float: none;
    }

    .navbar-left,
    .navbar-right {
        float: none !important;
    }

    .navbar-toggle {
        display: block;
    }

    .navbar-collapse {
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
    }

    .navbar-collapse.collapse {
        display: none !important;
        height: 370px !important;
        transition: height 1.5s ease;
    }

    .navbar-nav {
        float: none !important;
        margin-top: 7.5px;
    }

    .navbar-nav>li {
        float: none;
    }

    .navbar-nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .collapse.show {
        display: block !important;
    }


    .navbar-default.navbar .nav>li {
        border-bottom: 1px solid #e6e6e6;
    }
}

.header-right {
    display: flex;
    align-items: center;
}

.header-wrapper .navbar-toggle .icon-bar {
    background: #d9b230;
}

.header-wrapper .navbar-toggle {
    margin-right: 0px;
    margin-left: 10px;
}

.nav.navbar-nav {
    margin: 0px;
}

nav.navbar-default .navbar-collapse,
nav.navbar-default .navbar-form {
    border-color: transparent;
}

.header-wrapper .navbar-toggle {
    display: block;
}

@media (min-width: 992px) {
    .navbar-collapse {
        width: auto;
        border-top: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .navbar-collapse.collapse {
        display: block !important;
        height: auto !important;
        padding-bottom: 0;
        overflow: visible !important;
    }

    .navbar-collapse.in {
        overflow-y: visible;
    }

    .navbar-fixed-top .navbar-collapse,
    .navbar-static-top .navbar-collapse,
    .navbar-fixed-bottom .navbar-collapse {
        padding-right: 0;
        padding-left: 0;
    }
}

@media screen and (max-width: 1199px) and (min-width: 992px) {
    .header-wrapper {
        display: flex;
        justify-content: space-between;
    }

    .header-right-img {
        position: relative;
        max-width: 80px;
        right: 0px;
    }

    .navbar-default.navbar .nav>li>a {
        padding: 10px 24px;
    }
}

@media (min-width: 1200px) {
    .header-right-img {
        right: 0px;
    }
}

@media (min-width: 992px) {
    .header-wrapper .navbar-toggle {
        display: none;
    }
}

@media only screen and (max-width: 991px) {
    .logo-img {
        max-width: 300px;
    }

    .navbar-brand {
        display: none;
    }

    .header-right-img {
        position: relative;
        max-width: 60px;
        right: 0px;
    }

    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

@media only screen and (max-width: 768px) {
    .logo-img {
        max-width: 300px;
    }

    .footer-wrapper {
        flex-flow: column;
    }

    .footer__copyright__text {
        margin-bottom: 20px;
    }

    .list-group-item1 {
        font-size: 12px;
    }

    .copyrights>p {
        font-size: 12px;
    }
}





/* Custom CSS by Sajid Lakhani */
.cc-reset-shadow:after{
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
    z-index: -999;
}

.cc-input-ep{
 padding-right: 10px !important;   
}
.cc-input-ep1{
    padding-left: 5px !important;   
}
.submit-btn>#submit:focus, .c-submit>#submit:focus  {
    border: none !important;
    outline: unset;
}
.footer__widget ul li a:hover{
    color: white;
}
.list-group-item img:hover{
    cursor: pointer;
}
.input-group1 input{
    border: 2px solid #569fcf !important;
}
.input-group1 select{
    border: 2px solid #569fcf !important;
}
.c-details{
    transition: 0.3s;
}
.c-details:hover{
    transition: 0.3s;
    border: 2px solid #033168;
    transform: scale(1.1);
}
.search__form form button{
    height: 46px !important;
    /* bottom: 20px; */
    margin: 5px !important;

}
.last-will-section > .make-your-will{
 top: -75px;   
}
#ans2, #ans3, #ans4, #ans5, #ans6, #ans7{
    display: none;
}

@media screen and (min-width: 1200px){
    
.left-outer-form-div{
 padding: 147px 50px 75px 50px !important;
}
}

@media screen and (max-width: 1024px){
    
    .left-outer-form-div{
     padding: 147px 50px 75px 50px !important;
    }
    }
.btn-delete{
    background-color: red !important;
    text-decoration: none !important;
    height: 30px !important;
    width: 100px !important;
}

.cc-gender-reg{
    padding: 15px 15px 8px 15px !important;
    border: 2px solid #569fcf;
}
.cc-gender-reg label{
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400;
    font-size: 15px;
    color: #555;
}
@media screen and (max-width: 600px){
    .tell-us span{
        font-size: 18px !important;
    }
    .details span{
        font-size: 14px !important;
    }
    .banner-heading h1{
        font-size: 18px !important;
    }
    .banner-details p{
        font-size: 14px !important;
    }
    .faq-div{
        margin: 20px 0px !important;
    }
}
.container-bg-cc{
    background-color: white;
    padding: 40px 50px;
}
.cc-text-card{
    font-family: 'poppins';
    font-size: 18px;
    line-height: 40px;
}
.cc-container-prime{
    margin-top: 30px;
    font-family: 'poppins';
}
.cc-text-prime{

    color: #033168;
}
.icon-shell{
    
 
    
    background-color: white;
    padding: 17px 2px 0px 10px;
    color: #033168;
    border-radius: 72px;
    width: 75px;
    height: 75px;
    margin: 0 auto;
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #e0dede;
}

.main-text-cc{
    margin-left: 10px;
    font-family: 'poppins';
    font-size: 20px;
    margin: auto 20px;

}
.active-item-cc{
    border-radius: 50px;
    background-color: #00387b;
    color: white;
    padding-left: 20px !important;
}

.cc-col-profile{
    padding: 10px;
    margin: 20px;
    display: flex;
    
}
.cc-width-row{
    max-width: 85%;
    margin: 0 auto !important;
    
}`