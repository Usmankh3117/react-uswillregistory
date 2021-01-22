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
    margin: 15px;
    width: 30%;
    position: relative !important;
}
.c-details > .c-detail-icon{
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
.c-details > .c-detail-icon > i{

}
.c-details > .mini-details{
    margin-top: 20%;
    margin-bottom: 15%;
}
.c-details > .mini-details > .address{
    text-align: center;
    color: #033168;
}
.c-details > .mini-details > .mini-details-p{
    text-align: center;
    line-height: 4px;
}

/* contact form */
.message-section {

}
.leave-message {
    text-align: center;
    margin-bottom: 2%;
}
.leave-message > span{
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
.tell-us > span  {
    
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
    margin-top: 5%;
    margin-bottom: 5%;
}
.c-input-field {
    width: 100%;
    font-size: 16px;
    padding: 4%;
    margin: 2%;
    border: 1px solid #dadada;
    color: #dadada;
}
.c-input-field-textarea {
    width: 100%;
    font-size: 16px;
    padding: 2%;
    margin: 1%;
    border: 1px solid #dadada;
    color: #dadada;
}
.c-submit {
    text-align: center;
}

.c-submit > button{
    color: #fff;
    background: #f3452f;
    border: 1px solid;
    padding: 2% 6% 2% 6%;
    font-size: 20px;
    border-radius: 40px;
    font-weight: bold;
}


`;