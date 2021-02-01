import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { connect } from 'react-redux';
import { forgotPassword } from "../ApiCalls/auth";
const defaultState = {
	email: "",
	message: "",
	messageType: "",
	messageFor: ""
}
function ForgotPassword(props) {
	const [state, setState] = useState(defaultState);
	useEffect(() => {
		if (props.apiCallStatus.apiCallFor === "forgotPassword" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
			setState(defaultState)
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
			props.forgotPassword({ email: state.email })
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
			<div className="authHolder resetPassScreen">
				<div className="formHolder">
					<h1>Forgot your Password</h1>
					<p className="form-short-des">Enter your email address below and we'll send you a secure link to reset your password.</p>
					{/* <p>Click the secure link we sent you to reset your password. If you didn’t receive an e-mail, check your spam folder.</p> */}
					<form className="authMeshForm resetPassForm needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
						<div className="form-group floating-label-wrap mb-0">
							<input type="email" className="form-control" id="email" placeholder="Email" value={state.email} onChange={(e) => handleStateChange(e)} required />
							<label className="foating-labels-sty">Email</label>
							<span className="animated-border"></span>
						</div>
						{props.apiCallStatus.apiCallFor === "forgotPassword" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
							<div className="loader-img text-center">
								<img style={{ width: "46px" }} src={require("../../../assets/images/Spinner-1s-200px.gif")} alt='' />
							</div>
							: ""}
						{props.apiCallStatus.apiCallFor === "forgotPassword" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed ?
							<div className="alert alert-danger">
								{props.apiCallStatus.message}
							</div>
							: ""}
						{props.apiCallStatus.apiCallFor === "forgotPassword" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
							<div className="alert alert-success mt-3">
								{props.apiCallStatus.message}
							</div>
							: ""}
						<div clasName="formBtnHolder">
							<button className="btn btn-secondary d-block text-center w-100" onClick={(e) => handleSubmit(e)}>Send Email</button>
						</div>
					</form>
				</div>
				<div className="textBlock">
					<div className="d-flex">
						<div className="textHolder w-100">
							<h2>Don't have an account?</h2>
							<Link className="btn btn-secondary d-block text-center bg-white mr-auto ml-0" to="/signup">Sign Up</Link>
						</div>
					</div>
				</div>
			</div>
		</AuthWrapper>
	);
}

const mapStateToProps = (state, ownProps) => ({
	apiCallStatus: state.apicallStatusReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	forgotPassword: (data) => dispatch(forgotPassword(data))
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ForgotPassword)