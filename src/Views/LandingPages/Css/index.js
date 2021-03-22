import {createGlobalStyle } from "styled-components";
import LastWillBg from "../../../assets/img/last-will-background-img.png";
import ChangeBg from "../../../assets/img/Changes.png";
import Font from "../../../assets/fonts/Trajan-Pro-Regular.ttf";
export const Style = createGlobalStyle`
/* index page style sheet */

/* .started-img {
    
} */

@font-face {
  font-family: trajanRegular;
  src: url(${Font});
}
/* index page style sheet */

/* .started-img {
    
} */

.body{
    /* font-family: 'Quicksand', sans-serif!important; */
}
.started-img > img {
    width: 100%;
}
.will-section {
    margin-top: 3%;
    margin-bottom: 3%;
}
.will-div {
    box-shadow: 0px 0px 10px #ececec;
    border-radius: 5px;
    position: relative;
    width: 22%;
    margin: 15px;
}
@media only screen and (min-width: 1300px) {
    .started-img {
       margin-top: 25px !important;
    }
}
.started-img {
    position: relative;
}
.landing-page-top-text {
    position: absolute;
    top: 30%;
    left: 10%;
    color: #fff;
    width: 27%;
}
.landing-page-top-text > .empty-line {
    border-bottom: 2px solid lime;
    width: 35%;
}
.landing-page-top-text > .where-there {
    margin-bottom: 0;
}
.landing-page-top-text > .there-a-will {
    font-weight: 600;
    font-size: 45px;
    margin-top: 0;
}
.landing-page-top-text > .for-those-left-behind {
    margin-bottom: 17px;
    margin-top: 0;
    padding-left: 10px;
}
.landing-page-top-text > .get-started-link {
    color: #fff;
    background-color: red;
    padding: 20px 30px;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid red;
    border-radius: 50px;
    
}
.will-icon1 {
    position: absolute;
    right: 10%;
    top: 36%;
    background-color: #fff;
    padding: 7px 14px;
    font-size: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #033168;
    box-shadow: 0 0 10px #d7d7d7;
}
.will-icon1:hover {
    transform: scale(1.1);
}
.will-icon1 > img {
    width: 30px;
    height: 30px;
}

.will-div > .top-image > img {
    width: 100%;
    margin-top: 6%;
    border-radius: 14px 14px 0px 0px;
}

.will-details {
    padding: 5%;
    margin-top: 20%;
      
}
.will-details > .detail-heading {
    font-size: 22px;
    color: #003069;
    transition: all 0.2s;
    font-weight: 700;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 500;
}
.will-details > .detail-p {
    font-size: 12px;
    line-height: 30px;
    color: #5f5c5c;
    font-weight: 400;
    margin-top: 1rem;
}
.will-details > .learn-more {
    background-color: #ececec;
    padding: 8px;
    margin-top:2rem;
}
.will-details > .learn-more:hover {
    
    transform: scale(1.01); 
    text-rendering: geometricPrecision;
}
.fa-file-signature {
    width: 15px;
}
.fa-scroll {
    font-size: 15px;
}
.will-details > .learn-more > a{
    font-size: 12px;
    color: #033168;
    font-weight: 500;
}
.will-details > .learn-more > a:hover {
    color: #033168;
}

.will-details > .learn-more > i {
    color: #fff;
    float: right;
    padding: 0px 9px 0px 0;
    margin-top: -7px;
    margin-right: -7px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 60px;
    text-align: right;
    display: block;
    font-size: 16px;
    height: 34px;
    line-height: 33px;
}
.forms-section {
    margin-bottom: 5%;
}
.witnesa-page-form {
    text-align: center;
}
.witnesa-page-form > span{
    background: #00387b;
    font-size: 24px;
    color: white;
    margin-left: -5px;
    font-weight: 500;
}
.self-affidevit-form {
    text-align: center;
}
.self-affidevit-form > span{
    background: #d81212;
    padding: 21px 11px 27px 14px;
    font-size: 24px;
    color: white;
    margin-left: -5px;
    font-weight: 500;
    width: 100%;
}
.last-will {
    margin-top: 5%;

}
.left-border {
    
    border-left: 1px solid red;
}
.last-will-section:not(.np-sec) {
    background-image: url(${LastWillBg});
    background-repeat: no-repeat;background-attachment: fixed;
    background-position: center;
    position: relative;
}
.upper-section {
    background-image: url(${ChangeBg});
    background-color: #f7f7f7;
    border-radius: 0% 0% 0% 25%;
    background-position: top;
    background-size: cover;
}
.lower-section {
    line-height: 35px;
}
.last-will > .heading-border {
    border-left: 3px solid #033168;
    margin-top: 10px;
}
.last-will > .heading-border > .heading {
    font-size: 19px;
    font-family: trajanRegular;
    margin-left: 15px;
    color: #033168;
    font-weight: 600;
}
.last-will > p {
    font-size: 16px;
    margin: 5%;
    font-weight: 300 !important;
    line-height: 30px;
    color: gray;
}
.homepage-form-tiles {
    width: 100%;
       display: flex !important;
    align-items: center;
}
.last-will-img {
    
    margin-top: 10%;
    margin-bottom: 39.5%;
}
.last-will-img img:hover {
    box-shadow:         3px 3px 3px 3px #ccc;
}

.last-will-img > img {
    border: 0px solid #e2e2e2;
    padding: 26px;
    box-shadow: 0 0 10px #d7d7d7;
    border-radius: 22px;
    width: 85%;
}
.count {
    background: #71c9ff;
    border-radius: 100%;
    box-shadow: inset 0px 0px 0px 3px white;
    border: 1px solid #71c9ff;
    font-size: 22px;
    margin-top: 10px;
    color: #fff;
    padding: 15px 36px 15px 25px;
}
@media only screen and (min-width: 1440px){
    .count {
        padding:20px 32px
    }
}
.vertical-line {
    width: 2px;
    height: 120px;
    background: #71c8fc;
    margin: 0px 0px -40px 31px;
}
.mini-heading {
    font-size: 24px;
    color: #033168;
    margin:auto;
     margin-top: 5%;
    font-weight: 500;
}
.mini-para {
    font-size: 13px;
    line-height: 23px;
    color: #6f6f6f;
    margin-bottom: 30px
}
.info-border {
    border-left: 3px solid #fff;
    margin-top: 10%;
    margin-bottom: 5%;
    color: #fff;
    text-align: center;
}
.info-heading {
    font-size: 18px;
    font-family: 'trajanRegular';
    margin-left: 15px;
    color: #fff;
}
.Nationwide {
    color: #fff;
    text-align: center;
    font-size: 24px;
    line-height: 26px;
}
.info-detail {
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 15px;
    font-style: italic;
    margin-bottom: 3.5%;
}
.info-mini-detail {
    color: #fff;
    margin-bottom: 5%;
    opacity: 0.8;
    font-weight: 300;
}
.info-mini-detail-b {
    color: #fff;
    margin-bottom: 15%;
        opacity: 0.8;
    font-weight: 300;
}

.last-will-section > .make-your-will {
    position: absolute;
    // top: 97%;
    // margin-top:2%;
    right: 10% !important;
    background-color: #f34531;
    width: 80%;
    border: 1px solid #f34531;
    border-radius: 10px;
    padding: 15px;
}
.last-will-section > .make-your-will > .left-div {
    margin-left: 5%;
    color: #fff;
}
.last-will-section > .make-your-will > .left-div > .heading{
    font-size: 30px;
    margin-top: 17px;
    margin-bottom: -10px;
    font-weight: bold;
}

.last-will-section > .make-your-will > .left-div > .para{
    font-size: 27px;
    margin-bottom: 26px;
    margin: 10px 0;
}

@media only screen and (min-width: 300px) and (max-width: 1200px) {
    .for-search{
  margin-top: 80px !important;
    }
}


.last-will-section > .make-your-will > a{
    right: 10%;
    top: 36%;
    padding: 12px 26px 12px 26px;
    position: absolute;
    border-radius: 25px;
    color: #f34531;
    background-color: #fff;
    font-weight: bold;
    font-size: 17px;
    box-shadow: inset 0px 0px 0px 2px #f34531;
    border: 1px solid #ffffff;
}
.last-will-section > .make-your-will > a:hover{
    transform: scale(1.1);
    text-decoration: none;
}
.footer {
    padding-top: 8%;
}
 /* buttons */
.button1 {
    display: inline-block;
    padding: 0.5em 1.5em;
    border: 0.16em solid #ff473a;
    margin: 0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    transition: all 0.15s;
    background-color: #ff473a;
    font-size: 20px;
    border-radius: 50px;
}
 .button1:hover{
    color:#ff0000;
    background-color:#FFFFFF;
    border:0.16em solid #FFFFFF ;
}
.box:hover{
    box-shadow:         3px 3px 3px 3px #ccc;  
}



.btn4{
    padding: 0px 0px!important;
    background-color:#012c5f!important;
    border-radius: 1px!important;
}
.btn4:hover{
    transform: scale(1.1);
    box-shadow: 0 0 6px rgb(35 173 255)!important;
    border: none !important;
}
.btn4 > span {
    padding: 0px 35px;
}

.btn5{
    padding: 0px 0px;
    background-color:#d81212!important;
    border: none!important;
    border-radius: 1px!important;
}
.btn5:hover{
    border: none !important;
    transform: scale(1.1);
    box-shadow: 0 0 6px rgb(35 173 255)!important;
}

@media screen and (min-width: 600px){
    .btn5 > span {
        padding: 0px 40px;
    } 
}

  

  
@media screen and (min-width: 600px){
    
.homepage-form-tiles img {
    width: 115px;
    float: left;
}
}


@media screen and (max-width: 500px){
    
    .homepage-form-tiles img {
        width: 70px !important;
        
    }
}
`;
