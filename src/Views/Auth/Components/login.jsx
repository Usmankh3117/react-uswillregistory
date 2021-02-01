import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { connect } from 'react-redux';
import { LoginUser } from "../ApiCalls/auth";
import { ApiClearAction } from "../../ApiCallStatus/Actions/action";
import { getLoginDashboardLink } from '../../../Services/common';
import Swal from 'sweetalert2';
const defaultState = {
	email: "",
	password: "",
	message: "",
	messageType: "",
	messageFor: ""
}
function Login(props) {
	const [state, setState] = useState(defaultState);
	const urlParams = new URLSearchParams(window.location.search);
	const msg = urlParams.get('msg');
	useEffect(() => {
		// if (props.user.isLogin) {
		// 	props.history.push(getDashboardLink());
		// }
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
			props.ApiClearAction();
			let redirectUrl = getLoginDashboardLink();
			props.history.push(redirectUrl)
		}
		if (props.apiCallStatus.apiCallFor === "LoginUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
			Swal.fire("Error!", props.apiCallStatus.message, "error");
			props.ApiClearAction();
		}
	});
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
	return (
		<AuthWrapper>
			<div className="authHolder">
				<div className="formHolder">
					<h1>Login</h1>
					<form className="authMeshForm needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
						<div className="form-group floating-label-wrap">
							<input type="email" className="form-control" id="email" placeholder="Email" value={state.email} onChange={(e) => handleStateChange(e)} required />
							<label className="foating-labels-sty">Email</label>
							<span className="animated-border"></span>
						</div>
						<div className="form-group floating-label-wrap mb-0">
							<input type="password" className="form-control" id="password" placeholder="Passowrd" autoComplete="new-password" value={state.password} onChange={(e) => handleStateChange(e)} required />
							<label className="foating-labels-sty">Password</label>
							<span className="animated-border"></span>
						</div>
						{props.apiCallStatus.apiCallFor === "LoginUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
							<div className="loader-img text-center">
								<img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
							</div>
							: ""}
						{/* {props.apiCallStatus.apiCallFor === "LoginUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed ?
							<div className="alert alert-danger">
								{props.apiCallStatus.message}
							</div>
							: ""} */}
						<div className="form-group pt-3">
							<Link className="linkForgotPass cur-poi" to="/forgotPasword">Forgot Password?</Link>
						</div>
						<div className="formBtnHolder">
							<button type="submit" className="btn btn-secondary d-block text-center w-100" onClick={(e) => handleSubmit(e)}>Login</button>
						</div>
					</form>
				</div>
				<div className="textBlock">
					<div className="d-flex">
						<div className="textHolder w-100">
							<h2>Don't have an account?</h2>
							<Link className="btn btn-secondary d-block text-center bg-white mr-auto ml-0" to="/signUp">Sign Up</Link>
						</div>
					</div>
				</div>
			</div>
		</AuthWrapper>
	);
}

const mapStateToProps = (state, ownProps) => ({
	apiCallStatus: state.apicallStatusReducer,
	user: { isLogin: state.authReducer.isLogin, }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	login: (data) => dispatch(LoginUser(data)),
	ApiClearAction: () => dispatch(ApiClearAction())
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
