import styled from "styled-components";

export const Wrapper = styled.div`
.form-conatiner{
margin-left:0px;
margin-right:0px;
}
  .started-img > img {
    width: 100%;
  }
  .form-section {
    margin: 5% 0%;
  }
  .header-lower-part {
    height: 90px;
  }
  .form-container{
    margin-left: 0px;
    margin-right: 0px
  }
  .left-outer-form-div {
    background-color: #033168;
    padding: 147px 50px 50px 50px;
    width: 94%;
    margin-left: -15px;
    border-radius: 0px 10px 10px 0px;
  }
  .left-outer-form-div h4 {
    margin-top: 30px;
    width: 81%;
  }
  .right-outer-form-div {
    position: relative;
    border: 1px solid #dcdcdc;
    margin-top: 30px;
    background-color: #fff;
    margin-left: -16%;
    border-radius: 10px;
    padding: 15px;
    width: 100%;
  }
  .sidebar-countdown {
    position: absolute;
    left: -21px;
    right: 0;
    width: 40px;
    z-index: 1;
    border-radius: 50px;
  }
  .sidebar-countdown .active {
    background-color: green !important;
    border: 1px solid green !important;
    color: #fff;
  }
  @media screen and (min-width: 1024px) and (max-width: 2500px){
    .form-container{
      margin-left: -15px;
      
    }
  }
  
  @media screen and (min-width: 1024px) and (max-width: 1400px){
    .sidebar-countdown p {
    padding: 6px 13px !important;
    margin: 15px 0px 0px 4px !important;
    font-size: 14px !important;
    }
  }

  @media screen and (max-width: 1500px) and (min-width: 1440px){
    .sidebar-countdown p {
      margin: 18px 0px 0px 1px !important;
    }
  }
  .sidebar-countdown p {
    background-color: white;
    padding: 6px 13px;
    margin: 16px 0px 0px 1px;
    font-size: 18px;
    border-radius: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #Basic {
    padding: 50px 30px 30px 65px;
  }
  #form-footer {
    padding: 50px 30px 30px 65px;
  }
  .form-basic-details {
    font-weight: bold;
    color: #5a5a5a;
  }
  .form-inner-heading {
    font-size: 16px;
    color: #002d63;
    margin-top: 15px;
  }
  .form-input-field {
    width: 100%;
    border-radius: 0px;
    height: 50px;
    font-family: "poppins";
    padding-left: 10px;
    /* border: 2px solid #569fcf; */
    border: 1px solid #03336c !important;
    // width: 100%;
    // padding: 15px;
    // background-color: #d4e7e1;
    // border: 1px solid #c1c1c1;
    // font-size: 15px;

    margin-top: 5px;
    margin-bottom: 5px;
  }
  .form-btn-div {
    margin-top: 5%;
  }
  .form-btn-div .exit-btn {
    float: right;
    padding: 10px 10px 10px 10px;
    width: 20%;
    border-radius: 30px;
    font-size: 15px;
    text-align: right;
    background-color: #ef3d3d;
    border: 1px solid #ef3d3d;
    color: #fff;
  }
  .form-btn-div .exit-btn i {
    float: left;
    margin-top: 3px;
    padding:0 10px
  }
  .form-btn-div .exit-btn:hover {
    border: 1px solid #ef3d3d !important;
    background: transparent;
    color: #ef3d3d;
  }
  .form-btn-div .next-btn {
    float: right;
    padding: 10px 10px 10px 10px;
    width: 20%;
    border-radius: 30px;
    font-size: 15px;
    text-align: left;
    background-color: #033168;
    border: 1px solid #033168;
    color: #fff;
    margin-left: 10px;
  }
  .form-btn-div .next-btn:hover {
    border: 1px solid #033168 !important;
    background: transparent;
    color: #033168;
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
    margin-left: 24px;
  }

  .form_top_controls ul li {
    list-style: none;
    font-size: 22px;
    color: #8a8787;
    display: inline-block;
    margin-right: 4%;
    font-weight: 300;
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

  .vertical-line {
    border-top: 1px solid #71c8fc;
    height: 120px;
    margin: -11px -21% -81px 64px;
  }

  .count {
    background: #71c9ff;
    border-radius: 100%;
    box-shadow: inset 0px 0px 0px 3px white;
    border: 1px solid #71c9ff;
    font-size: 22px;
    color: #fff;
    padding: 15px 25px 15px 25px;
  }
  .mini-heading {
    font-size: 24px;
    color: #033168;
    margin-top: 5%;
    font-weight: 500;
  }
  .form-message {
    text-align: center;
    margin-bottom: 2%;
  }
  .form-message > span {
    background-color: #e5f9f6;
    padding: 8px 30px 8px 30px;
    color: #51caae;
    border-radius: 25px;
    max-width: 220px;
    width: 100%;
    display: block;
    margin: auto;
  }
  .last-will {
    text-align: center;
    font-size: 38px;
    color: #033168;
    font-weight: 300;
  }

  // Custom Form Style
  .h-100 {
    height: 100% !important;
  }
  .form-card {
    padding: 20px 0 0 20px;
    width: calc(100% - 70px);
    margin: 0;
    position: relative;
    text-align: left;
    color: #9e9e9e;
  }
  .form-card .row {
    // opacity: 0.5;
  }
  .btn:hover:active:focus {
    outline: 0 !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .flex-fill {
    flex: 1 1 auto !important;
  }
  .flex-column {
    flex-direction: column !important;
  }
  .d-flex {
    display: flex !important;
  }
  .form-thanks-you-wrap {
    min-height: 520px;
  }
  .form-thanks-you-wrap h2 {
    font-size: 40px;
    font-weight: 600;
    color: #5a5a5a;
  }
  .form-thanks-you-wrap p {
    font-size: 15px;
  }
  .thank-you-icon-wrap h3 {
    color: #033168;
  }
  @media (max-width: 1600px) {
    .form-card {
      width: calc(100% - 60px);
    }
    .form-thanks-you-wrap {
      min-height: 412px;
    }
    .form-thanks-you-wrap h2 {
      font-size: 30px;
    }
    .thank-you-icon-wrap h3 {
      margin-top: 15px;
      font-size: 50px;
    }
    .form-thanks-you-wrap p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1024px){
    .left-outer-form-div{
        padding: 147px 50px 75px 50px !important;
    }
  }
  @media (max-width: 768px) {
    .form-card {
      width: calc(100% - 50px);
    }
    .form_top_controls {
      margin-left: 0px;
    }
    #Basic {
      padding: 0px 0px 0px 15px;
    }
    #form-footer{
      padding: 0px 0px 0px 15px;
    }
    .right-outer-form-div {
     margin:auto;
    }
    .page-description {
      display: none;
    }
    
    .form-btn-div .next-btn {
      width: 45%;
    }
    .form-btn-div .exit-btn {
      width: 45%;
    }
    .success-message {
      text-align: center;
    }
  }
  @media (max-width: 576px) {
    .form_top_controls {
      margin-left: 0px;
    }
    .right-outer-form-div {
     margin:auto !important;
     width:100% !important;
    }
    .page-description {
      display: none;
    }
   
    .form-card {
      width: calc(100% - 40px);
    }
    .success-message {
      text-align: center;
    }
    .form-card .form-input-container label:after {
      padding: 5px 9px;
      min-width: 80px;
      height: 27px;
      font-size: 10px;
      line-height: 16px;
    }
    .form-btn-div .next-btn {
      width: 45%;
    }
    .form-btn-div .exit-btn {
      width: 45%;
    }
  }
  @media (max-width: 375px) {
    .form-btn-div .next-btn {
      width: 100%;
    }
    .form-btn-div .exit-btn {
      width: 100%;
    }
    .pd-25 {
      padding: 25px;
    }
    .btn-success {
      margin-bottom: 6px;
    }
  }
`;
