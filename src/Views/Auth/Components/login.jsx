import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { Style } from '../Css/login';
import { connect } from 'react-redux';
import { LoginUser } from "../ApiCalls/auth";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Swal from 'sweetalert2';
import { Constant } from "../../../Constants/constant";
import Image from '../../Common/Components/image';
import RegisterBg from "../../../assets/img/left-panel-signup.png";
import { getCookie, setCookie } from '../../../Services/cookies';

const defaultState = {
	email: "",// "sharoza51@gmail.com",
	password: "",//"User@123",
	message: "",
	messageType: "",
	messageFor: "",
	rememberMe: getCookie("rememberMe")
}
function Login(props) {
	const [state, setState] = useState(defaultState);
	const urlParams = new URLSearchParams(window.location.search);
	const msg = urlParams.get('msg');
	useEffect(() => {
		if (msg && msg === 'expired') {
			var uri = window.location.toString();
			if (uri.indexOf("?") > 0) {
				var clean_uri = uri.substring(0, uri.indexOf("?"));
				window.history.replaceState({}, document.title, clean_uri);
			}
			Swal.fire("Error!", "Your session has been expired.", "error");
		}
		if (props.apiCallStatus.apiCallFor === "LoginUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
			setState(defaultState)
			props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
			let redirectUrl = '/profile';
			props.history.push(redirectUrl)
		}
		if (props.apiCallStatus.apiCallFor === "LoginUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
			let msg = '';
			if (typeof props.apiCallStatus.message === 'object') {
				if (props.apiCallStatus.message[0]) {
					msg = props.apiCallStatus.message[0];
				} else {
					for (const property in props.apiCallStatus.message) {
						if (props.apiCallStatus.message[property][0] !== "") {
							msg = props.apiCallStatus.message[property][0];
							break;
						}
					}
				}
			} else {
				msg = props.apiCallStatus.message;
			}
			Swal.fire("Error!", msg, "error");
			props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
		}
	});
	useEffect(() => {
		if (state.rememberMe === "true") {
			setState({
				...state,
				email: getCookie("uemail"),
				password: getCookie("pass")
			})
		}
	}, [])
	const handleStateChange = (e) => {
		let id = e.target.id;
		let val = e.target.value;
		let cloneState = { ...state };
		cloneState[id] = val;
		setState(cloneState);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = validateForm();
		if (isValid) {
			if (state.rememberMe === "true") {
				setCookie("rememberMe", "true", Constant.cookieExpireDays);
				setCookie("uemail", state.email, Constant.cookieExpireDays);
				setCookie("pass", state.password, Constant.cookieExpireDays);
			}
			props.login({
				email: state.email,
				password: state.password
			})
		}
	}
	const validateForm = () => {
		var form = document.getElementsByClassName('needs-validation')[0];
		let isValid = true;
		if (form.checkValidity() === false) {
			isValid = false;
			form.classList.add('was-validated');
		}
		return isValid;
	}
	const handleRememberMe = () => {
		/**
		 * saves credentials to save users time to keep logging back
		 */
		if (state.rememberMe === "true") {
			setState({
				...state,
				rememberMe: ""
			})
			setCookie("rememberMe", "", 0);
			setCookie("uemail", state.email, 0);
			setCookie("pass", state.password, 0);
		} else {
			setState({
				rememberMe: "true"
			})
			setCookie("rememberMe", "true", Constant.cookieExpireDays);
			setCookie("uemail", state.email, Constant.cookieExpireDays);
			setCookie("pass", state.password, Constant.cookieExpireDays);
		}

	}
	return (
		<React.Fragment>
			<Style />
			<section className="sign-in-section">
				<div className="container">
					<div className="row">
						<div className="sign-in-heading-section text-center">
							<h1 className="heading"><span className="bold">Login</span> Form</h1>
						</div>
					</div>
					<div className="row auth-custom-container">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="auth-page-left-section" style={{ backgroundImage: `url(${RegisterBg})` }}>
								<div className="auth-page-caption-text">
									<h5> Welcome to the The U.S. Will Registry </h5>
									<p> Enter your personal detail and start your journey  </p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="auth-right-form">
								<div className="form-heading">
									<h2 style={{ color: "#033168" }}>Login</h2>
								</div>
								<div className="login-form">
									<form className="needs-validation" onSubmit={(e) => handleSubmit(e)} >
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"></i></span>
											<input type="email" className="form-control" id="email" placeholder="Email" value={state.email} onChange={(e) => handleStateChange(e)} required />
										</div>
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-lock"></i></span>
											<input type="password" className="form-control" id="password" placeholder="Passowrd" autoComplete="new-password" value={state.password} onChange={(e) => handleStateChange(e)} required />
										</div>
										{props.apiCallStatus.apiCallFor === "LoginUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
											<div className="loader-img text-center">
												<Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
											</div>
											: ""}
										<div className="input-group1">
											<input type="checkbox" className="rememberme" id="rememberme" name="rememberme" onChange={() => handleRememberMe()} checked={state.rememberMe === "true" ? true : false} />
											<label for="rememberme"> &nbsp;Remember Me?</label>
											<Link to="/forgot-password">Forget Password?</Link>
										</div>

										<div className="submit-btn">
											<button type="submit" className="submit">Login</button>
										</div>
									</form>

									<div className="create-one-account">
										<span className="text">Don't have any account? <Link className="create-one" to="/signup">Create
                                        One</Link></span>
									</div>
									<div className="row">
										<div className="col-lg-12 col-md-12 col-sm-12 or-outer-div">
											<div className="or-div">
												<span className="or">OR</span>
											</div>
										</div>
									</div>

									<div className="row login-social-media-icons">
										<div className="col-lg-12 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
											<i className="fa fa-facebook bottom-icons" style={{ padding: "10px 14px" }}></i>
											<i className="fa fa-instagram bottom-icons"></i>
											<i className="fa fa-google bottom-icons"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</React.Fragment >
	);
}

const mapStateToProps = (state, ownProps) => ({
	apiCallStatus: state.apicallStatusReducer,
	user: { isLogin: state.authReducer.isLogin, }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	login: (data) => dispatch(LoginUser(data)),
	ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName)),
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

