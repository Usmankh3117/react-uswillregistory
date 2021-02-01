import styled from "styled-components";
import BgImage from "../../../assets/images/login-bg.jpg";

export const Wrapper = styled.div`
height:100vh;
background:url(${BgImage});
background-size:cover;
background-position: center center;

.authHolder{width: 660px;background:#250A72;border-radius:10px;position: relative;-webkit-box-shadow: 3px 5px 13px 2px #0000004f;box-shadow: 3px 5px 13px 2px #0000004f;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;z-index: 0;justify-content: space-between;}
.form-short-des {font-size: 14px;}
.resetPassScreen .form-short-des {margin-bottom:40px}
.authHolder:after{content:"";display:block;clear: both;}
.authBlockHolder,
.authHolder .textHolder{-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}
.authHolder .formHolder{width:calc(100% - 310px);background:#fff;border-radius: 10px;float:left;margin:-25px 28px -25px 0;padding:40px;-webkit-filter: drop-shadow(2px 2px 8px #0000004f);filter: drop-shadow(2px 2px 8px #0000004f);-webkit-animation: slideIn 1s ease-out;animation: slideIn 1s ease-out;}
.signUpHolder .formHolder {margin: -25px 0 -25px 28px;}
.authHolder h1{font-size:21px;line-height:27px;font-weight:500;color:#250a72;margin:0 0 40px;position:relative;z-index: 0;padding-bottom: 12px;}
.authHolder.resetPassScreen h1 {margin-bottom:25px}
.authHolder h1:before {content: '';position: absolute;width: 50px;height: 2px;background: #250a72cf;bottom: 0;left: 0;z-index: -1;border-radius: 20px;}
.authHolder h1:after {content: '';position: absolute;width: 4px;height: 4px;background: #250a72cf;bottom: -1px;left: 55px;z-index: -1;border-radius: 50%;}
.authHolder h2{font-size:18px;line-height: 30px;margin:0 0 50px;color:#fff;font-weight:normal;}
.authHolder .textBlock{width:262px;float:right;padding:0 30px;}
.authMeshForm .form-group{margin:0 0 15px;}
.authMeshForm .form-group.floating-label-wrap {margin:0 0 25px;}
.authMeshForm .form-control{width:100%;border:none !important;border-width:0 0 2px;font-size:14px;line-height:17px;font-family:'Montserrat';padding: 5px 15px;height: 45px;color: #282828;}
.authMeshForm .form-control:focus{border:solid #9B9B9B;border-width:0 0 2px;outline:none;-webkit-box-shadow: none;box-shadow: none;}
// .authMeshForm .form-control::-webkit-input-placeholder {color:#9B9B9B;}
// .authMeshForm .form-control::-moz-placeholder {color:#9B9B9B;opacity:  1;}
// .authMeshForm .form-control:-ms-input-placeholder {color:#9B9B9B;}
// .authMeshForm .form-control::-ms-input-placeholder {color:#9B9B9B;}
// .authMeshForm .form-control::placeholder {color:#9B9B9B;}
.btn-secondary{min-width: 150px;max-width: max-content;;box-shadow: 1px 1px 6px 1px #00000033, -1px -1px 6px 1px #00000033;padding: 12px 20px 11px;position: relative;z-index: 0;border: none;background: #250a72 !important;font-weight: 500;border-radius: 30px;margin-left: auto;margin-top: 40px;outline: none !important;}
.btn-secondary:before {content: '';position: absolute;top: 2px;left: 2px;width: calc(100% - 4px);height: 0;background: #fff;-webkit-transition: 0.6s;-o-transition: 0.6s;transition: 0.6s;z-index: -1;opacity: 0;border-radius: 20px;}
.btn-secondary:hover:before,.btn-secondary:focus:before {height: calc(100% - 4px);-webkit-transition: 0.6s;-o-transition: 0.6s;transition: 0.6s;opacity: 1;}
.btn-secondary:hover,.btn-secondary:focus,.themeReguler-btn:focus,.themeReguler-btn:active{-webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);}
.btn-secondary.bg-white {background: #fff !important;color:#250a72}
.btn-secondary.bg-white:before {background: #250a72 !important;}
.btn-secondary.bg-white:hover,.btn-secondary.bg-white:focus {color: #fff !important}
.authLogoholder{width:192px;position: absolute;right:60px;bottom: 40px;}
.linkForgotPass{font-size:14px;line-height:17px;font-family:'Montserrat';color:#9B9B9B;}
.linkForgotPass:hover{color:#250A72;}
.resetPassScreen .formHolder {-webkit-animation: slideTop 1s ease-out;animation: slideTop 1s ease-out;}
.signUpHolder .formHolder {-webkit-animation: slideOut 1s ease-out;animation: slideOut 1s ease-out;}
.authHolder.resetPassScreen.reset-wrap {width: 450px;}
.authHolder.resetPassScreen.reset-wrap .formHolder {width: 100%;margin-left: 28px;}
.form-control.is-valid, .was-validated .form-control:valid,.form-control.is-invalid, .was-validated .form-control:invalid {background-position: right calc(.375em + -0.205rem) center !important;padding-right: 21px !important;white-space: nowrap;-o-text-overflow: ellipsis;text-overflow: ellipsis;overflow: hidden;}
.login-icon-wrap {width: 90px;margin: 0 auto;opacity: 0.8;}
.authHolder:before {content: '';position: absolute;width: 80%;height: calc(100% - 30px);border: 2px solid #ffffff8a;border-radius: 10px;top: 15px;left: 15px;border-right: 0;border-top-right-radius: 0;border-bottom-right-radius: 0;z-index: -1;}
.authHolder.signUpHolder:before {border-right: 2px solid #ffffff8a;border-radius: 10px;border-top-left-radius: 0;border-bottom-left-radius: 0;z-index: -1;left:auto;right:15px;border-left:0}
.animated-border {position: absolute;z-index: 0;display: block;top: 0;left: 0;width: 100%;height: 100%;pointer-events: none;}
.animated-border:before {content: '';position: absolute;width: 100%;height: 100%;bottom: 0;left: 0;border-radius:30px;border: 1px solid #0c0c0c2e;z-index: -1}
.animated-border:after {content: '';position: absolute;width: 0;height: 100%;bottom: 0;left: 0;border-radius:30px;border: 1px solid #4b1dcf;z-index: -2;transition: all 0.3s ease-in-out;border-width: 0;opacity: 0}
.floating-label-wrap .form-control:focus + .foating-labels-sty,.floating-label-wrap .form-control:not(:placeholder-shown) + .foating-labels-sty{-webkit-transform:translate3d(-4%,-100%,0) scale(0.9);transform:translate3d(-4%,-100%,0) scale(0.9);opacity:1;color: #250a72;background-color: #ffffff;display: inline-block;z-index: 1;font-family: sans-serif;top: 10px;}
.floating-label-wrap .form-control:focus + .foating-labels-sty + .animated-border:after,.floating-label-wrap .form-control:not(:placeholder-shown) + .foating-labels-sty + .animated-border:after {width: 100%;border-width: 1px;opacity: 1}
.foating-labels-sty {padding: 0 4px;font-size: 14px;top: 13px;left: 15px;}
.authHolder.resetPassScreen.reset-wrap:before {width: calc(100% - 30px);border-right: 2px solid #ffffff8a;border-radius: 10px;}

/* Css Animations */
@-webkit-keyframes slideIn {
   0% {
	   -webkit-transform: translate(100px, -100px);
			   transform: translate(100px, -100px)
   }
   100% {
	   -webkit-transform: translate(0, 0);
			   transform: translate(0, 0)
   }
}
@keyframes slideIn {
   0% {
	   -webkit-transform: translate(100px, -100px);
			   transform: translate(100px, -100px)
   }
   100% {
	   -webkit-transform: translate(0, 0);
			   transform: translate(0, 0)
   }
}
@-webkit-keyframes slideTop {
   0% {
	   -webkit-transform: translate(0, -100px);
			   transform: translate(0, -100px)
   }
   100% {
	   -webkit-transform: translate(0, 0);
			   transform: translate(0, 0)
   }
}
@keyframes slideTop {
   0% {
	   -webkit-transform: translate(0, -100px);
			   transform: translate(0, -100px)
   }
   100% {
	   -webkit-transform: translate(0, 0);
			   transform: translate(0, 0)
   }
}
@-webkit-keyframes slideOut {
   0% {
	   -webkit-transform: translate(-100px, -100px);
			   transform: translate(-100px, -100px)
   }
   100% {
	   -webkit-transform: translate(0, 0);
			   transform: translate(0, 0)
   }
}
@keyframes slideOut {
   0% {
	   -webkit-transform: translate(-100px, -100px);
			   transform: translate(-100px, -100px)
   }
   100% {
	   -webkit-transform: translate(0, 0);
			   transform: translate(0, 0)
   }
}

// Responsive Queries

@media only screen and (max-width:1600px){
   .authHolder{width:540px}
   .authHolder .textBlock{width:232px}
   .authHolder h1{font-size:17px;padding-bottom:7px}
   .authHolder h1:before{height:1.5px;width:40px}
   .authHolder h1:after{width:3px;left:45px;height:3px}
   .authMeshForm .form-control{height:36px}
   .foating-labels-sty{font-size:12px;top:10px}
   .authMeshForm .form-control{font-size:12px}
   .authMeshForm .form-group.floating-label-wrap{margin:0 0 18px}
   .btn-secondary{margin-top:30px;font-size:12px;min-width:110px;padding:9px 15px 8px}
   .authHolder .formHolder{padding:30px 20px;width:calc(100% - 260px)}
   .authHolder h2{font-size:16px;line-height:27px;margin:0 0 30px}
   .btn-secondary:before{top:1.5px;left:1.5px;width:calc(100% - 3px)}
   .btn-secondary:hover:before{height:calc(100% - 3px)}
   .authHolder.resetPassScreen.reset-wrap{width:360px}
   .resetPassScreen .form-short-des{margin-bottom:30px}
   .form-short-des{font-size:12px}
   .login-icon-wrap{width:75px}
   .authLogoholder{width:140px}
   .linkForgotPass {font-size: 12px;}
}
@media only screen and (max-width: 767px){
   .authHolder{flex-direction:column;padding:20px;padding-top:0;margin-top:80px;margin-bottom:30px;width:270px;max-width:270px}
   .authHolder .formHolder,.authHolder.resetPassScreen.reset-wrap .formHolder{margin:-30px 0 15px;width:100%;padding:25px 15px}
   .authHolder:before,.authHolder.signUpHolder:before,.authHolder.resetPassScreen.reset-wrap:before{width:calc(100% - 30px);height:calc(100% - 30px);border:2px solid #ffffff8a!important;border-radius:10px!important}
   .authHolder .textBlock{width:100%;padding-left:0;padding-right:0;text-align:center}
   .authHolder h2{font-size:12px;margin:0}
   .authHolder .textBlock .btn-secondary{margin-top:12px;margin-bottom:15px;padding:6px 15px 5px;min-width:80px;font-size:11px;margin-left:auto!important}
   .authLogoholder{width:90px;right:30px;bottom:auto;top:20px}
   .authHolder.signUpHolder .textBlock{order:2}
  .login-icon-wrap {width: 55px;margin-bottom: 10px;}
}
@media only screen and (max-width: 575px){
   .authLogoholder {right: calc(50% - 45px);}
   .authHolder {margin-top: 90px;}
}
`