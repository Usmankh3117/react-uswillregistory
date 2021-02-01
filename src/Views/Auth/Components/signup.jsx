import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { AuthWrapper } from "./authWrapper";
import { signUpUser } from "../ApiCalls/auth";
import { ApiClearAction } from "../../ApiCallStatus/Actions/action";
import { getDashboardLink, getLoginDashboardLink } from '../../../Services/common';
import Swal from 'sweetalert2'

const defaultState = {
	email: "",
	password: "",
	repeatPassword: "",
	userType: "customer",
	message: "",
	messageType: "",
	messageFor: ""
}

function SignUp(props) {
	const [state, setState] = useState(defaultState);
	useEffect(() => {
		// if (props.user.isLogin) {
		// 	props.history.push(getDashboardLink());
		// }
		if (props.apiCallStatus.apiCallFor === "signUpUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
			setState(defaultState)
			props.ApiClearAction();
			props.history.push(getLoginDashboardLink())
			// props.history.push("/create-vessel")
		}
		if (props.apiCallStatus.apiCallFor === "signUpUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
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
			props.signUp({
				email: state.email,
				password: state.password,
				userType: state.userType
			})
		}
	}

	const validateForm = () => {
		var form = document.getElementsByClassName('needs-validation')[0];
		let isValid = true;
		if (form.checkValidity() === false) {
			isValid = false;
			form.classList.add('was-validated');
		} else if (state.password.length < 6) {
			isValid = false;
			Swal.fire("Error!", "Password must be greater than 6 characters", "error");
		} else if (state.password !== state.repeatPassword) {
			isValid = false;
			Swal.fire("Error!", "Password and confirm password does not match", "error");
		}

		return isValid;

	}
	return (
		<AuthWrapper>
			<div className="authHolder signUpHolder">
				<div className="textBlock">
					<div className="d-flex">
						<div className="textHolder w-100">
							<h2>Do you have an account?</h2>
							<Link className="btn btn-secondary d-block text-center bg-white mr-auto ml-0" to="/login">Login</Link>
						</div>
					</div>
				</div>
				<div className="formHolder">
					<h1>Sign Up</h1>
					<form className="authMeshForm needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
						<div className="form-group floating-label-wrap">
							<input type="email" className="form-control" id="email" placeholder="Email" value={state.email} onChange={(e) => handleStateChange(e)} required />
							<label className="foating-labels-sty">Email</label>
							<span className="animated-border"></span>
						</div>
						<div className="form-group floating-label-wrap">
							<input type="password" className="form-control" id="password" autoComplete="new-password" placeholder="Passowrd" value={state.password} onChange={(e) => handleStateChange(e)} required />
							<label className="foating-labels-sty">Password</label>
							<span className="animated-border"></span>
						</div>
						<div className="form-group floating-label-wrap mb-0">
							<input type="password" className="form-control" id="repeatPassword" autoComplete="new-password" placeholder="Repeat passowrd" value={state.repeatPassword} onChange={(e) => handleStateChange(e)} required />
							<label className="foating-labels-sty">Repeat Password</label>
							<span className="animated-border"></span>
						</div>
						{props.apiCallStatus.apiCallFor === "signUpUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
							<div className="loader-img text-center">
								<img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
							</div>
							: ""}
						{/* {props.apiCallStatus.apiCallFor === "signUpUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed ?
							<div className="alert alert-danger">
								{props.apiCallStatus.message}
							</div>
							: ""} */}
						<div clasName="formBtnHolder">
							<button className="btn btn-secondary d-block text-center w-100" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</AuthWrapper>
	);
}

const mapStateToProps = (state, ownProps) => ({
	apiCallStatus: state.apicallStatusReducer,
	user: { isLogin: state.authReducer.isLogin }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	signUp: (data) => dispatch(signUpUser(data)),
	ApiClearAction: () => dispatch(ApiClearAction())
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);