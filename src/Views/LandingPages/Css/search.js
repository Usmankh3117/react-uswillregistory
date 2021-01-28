import styled from "styled-components";

export const Wrapper = styled.div`
.search {
    overflow: hidden;
    margin-top: 20px;
}
.search__form {
    width: 100%;
    border-radius: 25px;
    padding: 0px 20px 0px 2px;
    border: 1px solid #6c757d;
    position: relative;
    float: left;
}
.search__form form input {
    width: 94%;
    border: none;
    height: 48px;
    font-size: 16px;
    color: #b2b2b2;
    margin-left: 20px;
}
.search__form form button {
    position: absolute;
    right: 0;
    top: 0px;
    height: 47px;
    border: 1px solid #033168;
    background-color: #033168;
    margin: 1px 2px 0px 0px;
    border-radius: 50%;
    width: 0%;
    padding: 8px 30px 8px 15px;
    color: white;
}
.search-alpha-section{
    background-color: #ececec;
    margin: 5% 0%;
}
.search-list-group {
    display: flex;
    margin-bottom: 0px !important;
}
.search-list-group-item {
    position: relative;
    display: block;
    padding: 0.6% 0.6%;
    background-color: #ececec;
    border: none !important;
}
.search-active-menu {
    background-color: #023169;
}

.search-active-menu > a {
   color: #fff !important;
}
.search-menu {
    font-size: 36px;
    color: #3c3c3c;
    text-decoration: none !important;
}
.site-btn > i {
    font-size: 25px;
}


.search-detail-div {
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
    margin: 20px 15px;
    width: 47%;
    border-radius: 25px;
    position: relative;
    padding: 1%;
}
.search-detail-icon {
    position: absolute;
    right: 2%;
    top: 15%;
    font-size: 20px;
    background-color: white;
    padding: 5px 10px 5px 10px;
    color: #033168;
    border-radius: 72px;
    border: 1px solid #fff;
    box-shadow: 0px 0px 10px #ececec;
}
.search-detail-details {
    padding: 0%;
    width: 92%;
}
.search-heading {
    font-size: 30px;
    padding: 0px 0px 0px 10px;
    color: #033168;
}
.search-detail {
    margin-top: 2%;
}





.last-will-section {
    /* margin-bottom: 5%; */
    padding-top: 5%;
    position: relative;
}
.last-will-section > .make-your-will {
    position: absolute;
    top: 10%;
    right: 25%;
}
.last-will-section > .make-your-will > img{
    border-radius: 15px;
}
.last-will-section > .make-your-will > button{
    right: 10%;
    top: 35%;
    padding: 8px 8px 5px 8px;
    position: absolute;
    border-radius: 25px;
    color: #f34531;
    border: none;
    background-color: #fff;
    font-weight: bold;
    font-size: 17px;
}
`;