import styled from "styled-components";

export const Wrapper = styled.section`
  .started-img > img {
    width: 100%;
  }

  .contact-section {
    margin: 5%;
  }
  .c-details {
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
    /* margin: 15px; */
    position: relative !important;
  }
  .c-details > .c-detail-icon {
    position: absolute;
    right: 42%;
    top: -20%;
    font-size: 37px;
    background-color: white;
    padding: 3px 14px 3px 14px;
    color: #033168;
    border-radius: 72px;
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
  }
  .c-details > .c-detail-icon > i {
  }
  .c-details > .mini-details {
    margin-top: 20%;
    margin-bottom: 15%;
  }
  .c-details > .mini-details > .address {
    text-align: center;
    color: #033168;
  }
  .c-details > .mini-details > .mini-details-p {
    text-align: center;
    line-height: 4px;
  }

  /* contact form */

  .leave-message {
    text-align: center;
    margin-bottom: 2%;
  }
  .leave-message > span {
    background-color: #ccffcc;
    padding: 12px 30px 12px 30px;
    color: green;
    border-radius: 25px;
  }
  .tell-us {
    text-align: center;
    font-size: 38px;
    color: #033168;
  }
  .tell-us > span {
  }
  .tell-us > span > .yourself {
    font-weight: bold;
  }
  .message-section > .container > .row > .details {
    text-align: center;
    font-size: 22px;
  }
  .message-section > .container > .row > .details > p {
  }

  .contact-us-form {
    margin-top: 10%;
    margin-bottom: 15%;
  }
  .c-input-field {
    width: 100%;
    font-size: 16px;
    padding: 4%;
    margin: 2%;
    border: 1px solid #0d3460;
    color: #dadada;
  }
  .c-input-field-textarea {
    width: 100%;
    font-size: 16px;
    padding: 2%;
    margin: 1%;
    border: 1px solid #0d3460;
    color: #dadada;
  }
  .c-submit {
    text-align: center;
  }

  .c-submit > button {
    font-size: 17px;
    font-weight: 400;
    color: white;
    background-color: #f85656;
    border-radius: 30px;
    border: 1px solid #f85656;
    padding: 6px 51px;
    text-transform: uppercase;
  }
  .c-submit > button:hover {
    border: 1px solid #f85656 !important;
    background: transparent;
    color: #f85656;
  }

  .c-details {
    transition: 0.3s;
  }
  .c-details:hover {
    transition: 0.3s;
    border: 2px solid #696b6d;
  }
  .message-section > .container {
    margin-bottom: 3% !important;
  }
  @media only screen and  (min-width: 992px) and (max-width: 1200px) {
    .message-section > .container {
      margin-bottom: 10% !important;
    }
  }
  @media only screen and  (min-width: 768px) and (max-width: 992px) {
    .message-section > .container {
      margin-bottom: 10% !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .c-input-field {
      margin: 2% 0% 2% 0%;
    }
    .c-input-field-textarea {
      margin: 2% 0% 2% 0%;
    }
    .c-submit {
      padding-bottom: 20px;
    }
    .message-section > .container {
      margin-bottom: 10% !important;
    }
  }
`;
