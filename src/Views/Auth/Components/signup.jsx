import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from '../Css/signUp';
import { connect } from 'react-redux';
import { AuthWrapper } from "./authWrapper";
import { signUpUser } from "../ApiCalls/auth";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Swal from 'sweetalert2'

const defaultState = {
	email: "",
	password: "",
	repeatPassword: "",
	message: "",
	messageType: "",
	messageFor: ""
}

function SignUp(props) {
	const [state, setState] = useState(defaultState);
	useEffect(() => {
		if (props.apiCallStatus.apiCallFor === "signUpUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
			setState(defaultState)
			props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
			// props.history.push("/create-vessel")
		}
		if (props.apiCallStatus.apiCallFor === "signUpUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
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
		<Wrapper>
			<AuthWrapper formName="Register" name="Register" description="Please ! Register your self and make an" linkUrl="" linkLabel="Account">
				<div class="register-form">
					<form action="">
						<div class="row">
							<div class="col-lg-4 col-md-4 col-sm-4">
								<div class="input-group1">
									<input id="firstname" type="text" class="form-control1" name="firstname" placeholder="First Name" />
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-sm-4">
								<div class="input-group1">
									<input id="" type="text" class="form-control1" name="" placeholder="Middle Name" />
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-sm-4">
								<div class="input-group1">
									<input id="" type="text" class="form-control1" name="" placeholder="Last Name" />
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12">
								<div class="input-group1">
									<input id="" type="text" class="form-control1" name="" placeholder="Email" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12">
								<div class="input-group1">
									<input id="" type="password" class="form-control1" name="" placeholder="Your Password" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12">
								<div class="input-group1">
									<input id="" type="password" class="form-control1" name="" placeholder="Retype Password" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12">
								<div class="input-group1">
									<select name="State" id="State" class="form-control1">
										<option value="State">State</option>
										<option value="State2">State2</option>
										<option value="State3">State3</option>
									</select>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-4 col-md-4 col-sm-4">
								<div class="input-group1">
									<select name="days" id="days" class="form-control1">
										<option value="Days">Days</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-sm-4">
								<div class="input-group1">
									<select name="month" id="month" class="form-control1">
										<option value="Month">Month</option>
										<option value="feb">Feb</option>
										<option value="March">March</option>
									</select>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="input-group1">
									<select name="year" id="year" class="form-control1">
										<option value="Year">Year</option>
										<option value="2011">2011</option>
										<option value="2012">2012</option>
									</select>
								</div>
							</div>
						</div>
						<div class="submit-btn">
							<input id="submit" class="submit" type="submit" value="Sign In" class="form-control1" name="submit" />
						</div>
					</form>

					<div class="row mg-top-25"></div>
					<div class="row mg-top-30"></div>

				</div>
			</AuthWrapper>
		</Wrapper>
	);
}

const mapStateToProps = (state, ownProps) => ({
	apiCallStatus: state.apicallStatusReducer,
	user: { isLogin: state.authReducer.isLogin }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	signUp: (data) => dispatch(signUpUser(data)),
	ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName))
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);