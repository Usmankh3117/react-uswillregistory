import styled from "styled-components";

export const Wrapper = styled.div`
/* last-will-and-testaments-style */
.tab-section {
    margin-bottom: 5%;
}
.form-sub-heading {
    text-align: center;
    margin: 2% 0%;
}
.form-sub-heading > span {
    background-color: #dfeeff;
    padding: 10px 30px 10px 30px;
    color: #489bff;
    border-radius: 25px;
}
.form-heading {
    color: #033168;
    text-align: center;
    margin-bottom: 5%;
}

a:hover,a:focus{
    text-decoration: none;
    outline: none;
}
.tab .nav-tabs{
    position: relative;
    border-bottom: none;
    margin-left: 10%;
}
.tab .nav-tabs li{
    margin: 0 54px 0 0;
    z-index: 1;
}
.tab .nav-tabs li:after{
    content: "";
    width: 100%;
    border: 1px solid #b7b7b7;
    position: absolute;
    top: 30%;
    left: 76%;
    z-index: -1;
}
.tab .nav-tabs li:last-child:after{
    border: none;
}
.tab .nav-tabs li a{
    display: block;
    width: 70px;
    height: 70px;
    line-height: 65px;
    border-radius: 50%;
    background: #dfeefe;
    font-size: 20px;
    color: #ffffff;
    padding: 0;
    margin-right: 0;
    text-align: center;
    border: 2px solid #dadada;
}
.tab .nav-tabs li.active a{
    background-color: #033168 !important;
    color: #ffffff !important;
    border: 2px solid #cecece !important;
    position: relative;
}
.tab-lower-heading {
    text-align: center;
    color: #808080;
    font-size: 20px;
}
.tabpanel-heading {
    background-color: #033168;
    padding: 2%;
    font-size: 18px;
    border-radius: 10px;
    border: 1px solid #033168;
    margin-bottom: 3%;
    color:#fff;
}
.tabpanel-heading > .count {
    float: right;
}
.tabpanel-form {
    background-color: white;
    padding: 2%;
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px #ececec;
    border-radius: 25px;
}
.input-field {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #cccccc;
    background-color: #dfeefe;
    margin: 20px 0px;
}
.form-inner-heading {
    font-size: 15px;
    margin-bottom: 0% !important;
    font-weight: bold;
    color: #8e8e8e;
}
.tab-content {
    margin-top: 5%;
}
.exit-btn {
    background-color: red;
    padding: 8px 16px;
    font-size: 20px;
    border: 1px solid red;
    border-radius: 25px;
    color: #fff;
    box-shadow: 0px 0px 5px #ff5757;
}
.next-btn {
    float: right;
    background-color: #033168;
    padding: 8px 40px;
    font-size: 20px;
    border: 1px solid #033168;
    border-radius: 25px;
    color: #fff;
    box-shadow: 0px 0px 5px #6cacf9;
    
}


@media only screen and (max-width: 767px){
    .tab .nav-tabs li{ margin: 0 25px 0 0; }
    .tab .nav-tabs li a {
        width: 40px;
        height: 40px;
        line-height: 34px;
        font-size: 15px;
    }
    .tab .nav-tabs li.active a:after{
        font-size: 30px;
        bottom: -63px;
    }
    .tab .tab-content{ margin-top: 40px; }
    .tab-lower-heading {
        font-size: 13px;
        margin-top: 5px;
        margin-bottom: 2px;
    }
}
@media only screen and (max-width: 480px){
    .tab .nav-tabs li{ margin-bottom: 3px; }
    .tab .nav-tabs li:after{ border: none; }
    .tab .nav-tabs li.active a:after{ content: ""; }
    .tab .tab-content{ margin-top: 10px; }
}
`;