import styled from "styled-components";

export const Wrapper = styled.section`
  .left-div {
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
    padding: 2% 3% 0% 2% !important;
    margin-top: 2.3%;
    font-size: 17px;
  }

  @media only screen and (max-width: 767px){
    .left-div {
     display:none;
    }
  }
  .left-div-2 {
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
    padding: 2% 3% 0% 2% !important;
    margin-top: 2.3%;
    font-size: 17px;
  }

  @media only screen and (min-width: 768px){
    .left-div-2 {
     display:none;
    }
  }
  .number-left {
    color: #033168;
  }
  .alpha-left {
    color: gray;
    margin-left: 5%;
  }
  .top-heading {
    color: #033168;
  }
  .date {
    color: #a0a0a0;
  }
  .mini-heading {
    color: #033168;
  }
  .number-right {
    color: #033168;
    font-size: 24px;
    font-weight: bold;
  }
  .alpha-right {
    color: #033168;
    margin-left: 5%;
    font-size: 20px;
  }
  .text-detail {
    color: gray;
    margin-left: 5%;
  }
  .bold {
    font-weight: bold;
  }
`;
