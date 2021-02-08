import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AuthWrapper } from "./authWrapper";
import { Wrapper } from '../Css/forgotPassword';
import { connect } from 'react-redux';
import { forgotPassword } from "../ApiCalls/auth";
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
		<Wrapper>
			<AuthWrapper formName="Forget Password" name="Forget" formDescription="Please enter your email below!" >
				<div className="login-form">
					<form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
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
							<input id="submit" onClick={(e) => handleSubmit(e)} className="submit" type="submit" value="Send Email" className="form-control" name="submit" />
						</div>
					</form>
				</div>
			</AuthWrapper>
		</Wrapper>
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