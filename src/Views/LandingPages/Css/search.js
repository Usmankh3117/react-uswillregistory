import styled from "styled-components";

export const Wrapper = styled.div`
.search {
    overflow: hidden;
    margin-top: 20px;
}
make-your-will{
    top : 10% !important;
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
    :focus{
        outline: unset
    }
    width: 94%;
    border: none;
    height: 48px;
    font-size: 16px;
    color: #b2b2b2;
    margin-left: 20px;
}
@media only screen and (min-width: 300px) and (max-width: 1200px) {
    .for-search{
  margin-top: 80px !important;
    }
}
@media only screen and (max-width: 767px){
    .last-will-section>.make-your-will {
        top: 10% !important;
    }
}
.search__form form button {
    position: absolute;
    right: -4px;
    top: -4px;
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
    width: 100% !important;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    flex-wrap: nowrap;
    background-color: #ececec;
}
.search-list-group-item {
    position: relative;
    display: block;
    padding: 0.6% 0.6%;
    border: none !important;
}
.search-active-menu {
    background-color: #023169;
}

.search-active-menu > a {
   color: #fff !important;
}
.search-menu {
    font-size: 28px;
    color: #3c3c3c;
    text-decoration: none !important;
}
.site-btn > i {
    font-size: 25px;
}
.search-detail-icon:hover{
    background-color: #bfabab2e;
  }
.search-details-section{
    margin-bottom: 15% 
}
.search-detail-div {
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
    margin: 20px 0px;
    // width: 47%;
    border-radius: 25px;
    position: relative;
    padding: 1%;
}
@media screen and (max-width: 768px){
    .abc-container{
        
    }
    
}
.abc-container{
   
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
    // padding-top: 5%;
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
.last-will-section > .make-your-will > a{
    right: 5%;
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
`;