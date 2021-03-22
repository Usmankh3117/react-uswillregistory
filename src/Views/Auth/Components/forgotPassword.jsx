import React, { useState, useEffect } from 'react';
import { Style } from '../Css/forgotPassword';
import { connect } from 'react-redux';
import { forgotPassword } from "../ApiCalls/auth";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Image from '../../Common/Components/image';

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
			setState({
				...defaultState,
				"message": props.apiCallStatus.message,
				"messageType": "success",
				"messageFor": "forgotPassword"
			})
			props.ClearApiByNameAction(props.apiCallStatus.apiCallFor)
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
			setState({
				...state,
				"message": "",
				"messageType": "",
				"messageFor": ""
			})
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
		<React.Fragment>
			<Style />
			<section className="sign-in-section">
				<div className="container">
					<div className="row">
						<div className="sign-in-heading-section text-center">
							<h1 className="heading">Forget Password</h1>
						</div>
					</div>
					<div className="login-wrapper">
						<div className="login-holder">
							<div className="login-block login-block-left">
								<div className="login-left-content">
									<h2><strong>Welcome</strong> to the The U.S. Will Registry</h2>
									<p>Please enter your email below! </p>
								</div>
							</div>
							<div className="login-block login-block-right">
								<div className="login-form">
									<div className="login-block-holder">
										<h2>Forget Password</h2>
										<form className="needs-validation" onSubmit={(e) => handleSubmit(e)} >
											<div className="input-group">
												<span className="input-group-addon"><i className="fa fa-user"></i></span>
												<input type="email" className="form-control" id="email" placeholder="Email" value={state.email} onChange={(e) => handleStateChange(e)} required />
											</div>
											{props.apiCallStatus.apiCallFor === "forgotPassword" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
												<div className="loader-img text-center">
													<Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='' />
												</div>
												: ""}
											{state.messageFor === "forgotPassword" && state.message !== "" ?
												<div className={`alert alert-${state.messageType}`}>
													{state.message}
												</div>
												: ""}

											<div className="submit-btn">
												<button type="submit" style={{fontSize: "12px"}}  className="submit">Send Email</button>
											</div>
										</form>
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
	apiCallStatus: state.apicallStatusReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	forgotPassword: (data) => dispatch(forgotPassword(data)),
	ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName)),
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ForgotPassword)