import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { connect } from 'react-redux';
import { LoginUser } from "../ApiCalls/auth";
import { ApiClearAction } from "../../ApiCallStatus/Actions/action";
import { getDashboardLink } from '../../../Services/common';
import Swal from 'sweetalert2';
const defaultState = {
	email: "",
	password: "",
	message: "",
	messageType: "",
	messageFor: ""
}
function LoginSupplier(props) {
	const [state, setState] = useState(defaultState);
	useEffect(() => {
		if (props.apiCallStatus.apiCallFor === "LoginUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
			setState(defaultState)
			props.ApiClearAction();
			let redirectUrl=getDashboardLink();
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
					<h1>Login as Supplier ...</h1>
					<form className="authMeshForm needs-validation" autoComplete={false} onSubmit={(e) => handleSubmit(e)} noValidate>
						<div className="form-group floating-label-wrap">
							<input type="email" className="form-control" id="email" placeholder="Email" value={state.email} onChange={(e) => handleStateChange(e)} required autoComplete={false} />
							<label className="foating-labels-sty">Email</label>
							<span className="animated-border"></span>
						</div>
						<div className="form-group floating-label-wrap mb-0">
							<input type="password" className="form-control" id="password" placeholder="Passowrd" value={state.password} onChange={(e) => handleStateChange(e)} required  autoComplete="new-password"/>
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
							{/* <h2 className="login-title">Supplier Login here!</h2> */}
							<div className="login-icon-wrap">
								<img src={require("../../../assets/images/supplier-icon1.svg")} className="img-fluid" alt='icon' />
							</div>
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
	login: (data) => dispatch(LoginUser(data)),
	ApiClearAction: () => dispatch(ApiClearAction())
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginSupplier)
