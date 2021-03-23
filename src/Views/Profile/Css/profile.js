import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
.top-name-img {
    width: 24px;
    height: 24px;
}
.profile-dropdown {
    border: none;
    background-color: white;
    font-size: 18px;
    color: #666666;
    padding-bottom: 2px;
}
.border-right {
    border-right: 2px solid #a6a6a6 !important;
}
.list-group-item {
   padding: 3px 9px !important; 
   line-height: 29px;
}
.list-group-item > a {
    font-size: 18px;
}
.right {
    float: right;
    margin-right: 13%;
}

.profile-section-div {
    margin-top: 15px;
    margin-bottom: 40px;
    height: 50px !important;
}
.active-profile-div {
    background-color: #033168;
    color: white;
    border: 1px solid #033168;
    border-radius: 50px;
    padding-left: 5px;
    /* margin: 15px; */
    /* padding: 10px; */
    padding-top: 6px;
    padding-bottom: 4px;
    margin-left: 2px;
    margin-right: 108px;
    cursor : pointer;
}
.not-active-profile-div {
    /* background-color: #033168;
    color: white;
    border: 1px solid #033168; */
    border-radius: 25px;
    padding-left: 25px;
    /* margin: 15px; */
    padding: 10px;
    cursor : pointer;
}
.cc-col-profile img.image-hover {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: none;
    object-fit: contain;
    opacity: 0;
    transition: opacity .2s;
  }
  .cc-col-profile:hover img.image-main {
    opacity: 0;
    display: none;
  }
  .cc-col-profile:hover img.image-hover {
    opacity: 1;
    display: block;
  }
.profile-section-div > div > img {
    margin-left: 5%;
    width: 40px;
    padding: 5px;
}

.profile-section-div > div > span {
    font-size: 20px;
    padding-left: 9px;
    color: #515151;
}
.click-here-btn {
    font-size: 18px;
    color: white;
    margin-bottom: 40px;
    background-color: #033168;
    border-radius: 30px;
    border: 1px solid #033168;
    padding: 10px 50px 10px 50px;
}




.footer-logo {
    width: 70%;
}
.footer__widget p {
    margin-top: 5%;
    line-height: 30px;
}
.footer__widget ul { 
    width: 100% !important;
}
.footer__widget ul li {
    color: #cfe9e0;
    font-size: 16px;
    white-space: nowrap;
}
.footer__widget ul li input{
    color: #cfe9e0;
    font-size: 16px;
    background: #2a2a2c;
    white-space: nowrap;
    border: 1px solid white;
    padding: 10px 40px 10px 10px;
    margin-top: 15px;
}

.footer-store-logo1 > img {
    width: 70% !important;
    border-radius: 5px;
}
`;
