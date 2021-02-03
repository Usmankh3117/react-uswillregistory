import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { Wrapper } from '../Css/login';
import { connect } from 'react-redux';
import { LoginUser } from "../ApiCalls/auth";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
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
			let redirectUrl = '/';
			props.history.push(redirectUrl)
		}
		if (props.apiCallStatus.apiCallFor === "LoginUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
			Swal.fire("Error!", props.apiCallStatus.message, "error");
			props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
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
		<Wrapper>
			<AuthWrapper parentclassName="login-img-div" formName="Login" name="Sign In" description="Please ! Login to this form or" linkUrl="" linkLabel="Create an account">
				<div className="login-form">
					<form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-user"></i></span>
							<input type="email" className="form-control" id="email" placeholder="Email" value={state.email} onChange={(e) => handleStateChange(e)} required />
						</div>
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-lock"></i></span>
							<input type="password" className="form-control" id="password" placeholder="Passowrd" autoComplete="new-password" value={state.password} onChange={(e) => handleStateChange(e)} required />
						</div>
						{/* {props.apiCallStatus.apiCallFor === "LoginUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
							<div className="loader-img text-center">
								<img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
							</div>
							: ""} */}
						<div className="input-group1">
							<input type="checkbox" className="rememberme" id="rememberme" name="rememberme" value="rememberme" />
							<label for="rememberme"> Remember Me?</label>
							<a href="#">Forget Password?</a>
						</div>
						<div className="submit-btn">
							<input id="submit" onClick={(e) => handleSubmit(e)} className="submit" type="submit" value="Sign In" className="form-control" name="submit" />
						</div>

					</form>
					<div className="row mg-top-15"></div>
					<div className="create-one-account">
						<span className="text">Don't have any account? <a className="create-one" href="#">Create One</a></span>
					</div>
					<div className="row mg-top-15"></div>
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 or-outer-div">
							<div className="or-div">
								<span className="or">OR</span>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="row mg-top-30"></div>
						<div className="row mg-top-30"></div>
						<div className="col-lg-12 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
							<i className="fa fa-facebook bottom-icons" style={{ padding: "10px 14px" }}></i>
							<i className="fa fa-instagram bottom-icons"></i>
							<i className="fa fa-google bottom-icons"></i>
						</div>
					</div>
					<div className="row mg-top-25"></div>
					<div className="row mg-top-21"></div>
				</div>
			</AuthWrapper>
		</Wrapper>
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
