import styled from "styled-components";

export const Wrapper = styled.section`
  .started-img > img {
    width: 100%;
  }
  .faq-section {
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .faq-div {
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
    margin: 20px 15px;
    width: 100% !important;
    border-radius: 25px;
    position: relative;
    padding: 1%;
  }
  .faq-icon {
    cursor: pointer;
    position: absolute;
    right: 3%;
    top: 18%;
    font-size: 20px;
    background-color: white;
    padding: 5px 10px 5px 10px;
    color: #033168;
    border-radius: 72px;
    border: 1px solid #fff;
    box-shadow: 0px 0px 10px #ececec;
  }
  .faq-icon:hover{
    background-color: #bfabab2e;
  }
  .faq-details {
    padding: 5px 0px;
    width: 92%;
  }
  .faq-details > .faq-que {
    color: #033168;
    font-size: 16px;
  }
  .faq-details > .faq-ans {
    color: #a7a7a7;
  }

  .leave-message {
    text-align: center;
    margin-bottom: 2%;
  }
  .leave-message > span {
    background-color: #e5f9f6;
    padding: 8px 30px 8px 30px;
    color: #51caae;
    border-radius: 25px;
    max-width: 220px;
    width: 100%;
    display: block;
    margin: auto;
  }
  .tell-us {
    text-align: center;
    font-size: 38px;
    color: #033168;
    font-weight: 300;
  }
  .details {
    text-align: center;
    font-size: 20px;
    margin-bottom: 31px;
  }

  .contact-us-form {
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .c-input-field {
    width: 100%;
    font-size: 16px;
    padding: 4%;
    margin: 2%;
    border: 1px solid #555555;
    color: #dadada;
  }
  .c-input-field-textarea {
    width: 100%;
    font-size: 16px;
    padding: 2%;
    margin: 1%;
    border: 1px solid #555555;
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
  @media only screen and (max-width: 768px) {
    .c-input-field{
      margin: 2% 0% 2% 0%;
    }
    .c-input-field-textarea {
      margin: 2% 0% 2% 0%;
    }
    .c-submit{
        padding-bottom: 20px;
    }
  }
`;
