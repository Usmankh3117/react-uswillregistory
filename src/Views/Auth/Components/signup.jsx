import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { AuthWrapper } from "./authWrapper";
import { Style } from '../Css/login';
import { connect } from 'react-redux';
import { signUpUser } from "../ApiCalls/auth";
import { logInAction } from "../Actions/action";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Swal from 'sweetalert2';
import Image from '../../Common/Components/image';
import moment from 'moment';
import csc from 'country-state-city'
import { getYearList, UpdateAuthCookiesState } from '../../../Services/common';

const defaultState = {
	"form": {
		"email": "",
		"first_name": "",
		"middle_name": "",
		"last_name": "",
		// "birthdate": "",
		"country": "",
		"state": "",
		"gender": "",
		"password": "",
		"repeatPassword": "",
		"day": "",
		"month": "",
		"year": "",
	},
	"stateList": csc.getStatesOfCountry("US"),
	"countryList": csc.getAllCountries(),
	"daysList": ["01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31"],
	"monthsList": ["Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"],
	"yearsList": getYearList(),
	"message": "",
	"messageType": "",
	"messageFor": "",
	isValidate: false
}

function SignUp(props) {
	const [state, setState] = useState(defaultState);
	useEffect(() => {
		if (props.apiCallStatus.apiCallFor === "signUpUser" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
			setState(defaultState)
			props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
			// props.history.push("/create-vessel")
			// 
			Swal.fire({
				text: "Your registration has been successful. Please verify your email.",
				confirmButtonText: `OK`,
				icon: 'success',
				title: 'Success',
			}).then((result) => {
				/* Read more about isConfirmed, isDenied below */
				if (result.isConfirmed) {
					props.history.push('/login')
				}
			})
			// Swal.fire("Success!", "Your registration has been successful. Please verify your email.", "success");
		}
		if (props.apiCallStatus.apiCallFor === "signUpUser" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
			let msg = '';
			if (typeof props.apiCallStatus.message === 'object') {
				if (props.apiCallStatus.message && props.apiCallStatus.message[0] && props.apiCallStatus.message.length === 1) {
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
	const handleStateChange = (e) => {
		let id = e.target.type === "radio" ? e.target.name : e.target.id;
		let val = e.target.value;
		let cloneState = { ...state };
		if (id === "country") {
			cloneState['form']['state'] = "";
			cloneState['stateList'] = csc.getStatesOfCountry(val);
		}
		cloneState['form'][id] = val;
		cloneState["message"] = "";
		cloneState["messageType"] = "";
		cloneState["messageFor"] = "";
		setState(cloneState);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = validateForm();
		if (isValid) {
			// props.logInAction(UpdateAuthCookiesState({
			// 	access_token: "test", user: {
			// 		email: "sharoza51@gmail.com",
			// 		id: 1,
			// 		type: "user"
			// 	}
			// }))
			// let redirectUrl = '/profile';
			// props.history.push(redirectUrl)
			let birthDate = `${state.form.day}-${state.form.month}-${state.form.year}`;
			birthDate = moment(birthDate).format('YYYY-MM-DD');
			props.signUp({
				"email": state.form.email,
				"password": state.form.password,
				"first_name": state.form.first_name,
				"middle_name": state.form.middle_name,
				"last_name": state.form.last_name,
				"birthdate": birthDate,
				"state": state.form.state,
				"gender": state.form.gender
			})
		}
		setState({
			...state,
			isValidate: !isValid
		})
	}
	const validateForm = () => {
		var form = document.getElementsByClassName('needs-validation')[0];
		let isValid = true;
		let msg = "";
		let isShowAlert = true;
		if (form.checkValidity() === false) {
			isValid = false;
			form.classList.add('was-validated');
			let obj = { ...state.form };
			for (const property in obj) {
				if (obj[property] === "") {
					let elem = document.getElementById(property);
					if (elem) {
						elem.focus();
					}
					msg = `${property.replace("_", " ")} is required`;
					isShowAlert = false;
					break;
				}
			}
		} else if (state.form.password.length < 6) {
			isValid = false;
			msg = "Password must be greater than 6 characters";
		} else if (state.form.password !== state.form.repeatPassword) {
			isValid = false;
			msg = "Password and confirm password does not match";
		}
		if (!isValid) {
			setState({
				...state,
				"message": msg,
				"messageType": "danger",
				"messageFor": "signUp"
			})
			if (isShowAlert) {
				Swal.fire('Error!', msg, 'error')
			}
		}
		return isValid;
	}
	const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	return (
		<React.Fragment>
			<Style />
			<section className="sign-in-section">
				<div className="container">
					<div className="row">
						<div className="sign-in-heading-section text-center">
							<h1 className="heading"><span className="bold">Registration </span> Form</h1>
						</div>
					</div>
					<div className="login-wrapper">
						<div className="login-holder" >
							<div className="login-block login-block-left">
								< div className="login-left-content">
									<h2><strong>Welcome</strong> to the The U.S. Will Registry</h2>
									<p>Enter your personal detail and start your journey </p>
								</div>
							</div>
							<div className="login-block login-block-right">
								<div className="login-form">
									<div className="login-block-holder" style={{ padding: '20px' }}>
										<form className="needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
											<div className="row">
												<div className="col-md-4 input-1">
													<Input value={state.form.first_name} parentclassName="cc-row-reg" type="text" className="form-control-cc" id="first_name" placeholder="First Name" onChange={(e) => handleStateChange(e)} />
												</div>

												<div className="col-md-4 input-2">
													<div className={`input-group-cc cc-row-reg`}>
														<input value={state.form.middle_name} parentclassName="cc-row-reg" type="text" className="form-control-cc" id="middle_name" placeholder="Middle Name" onChange={(e) => handleStateChange(e)} />
													</div>
													{/* <Input value={state.form.middle_name} parentclassName="cc-row-reg" type="text" className="form-control-cc" id="middle_name" placeholder="Middle Name" onChange={(e) => handleStateChange(e)} /> */}
												</div>

												<div className="col-md-4 input-3">
													<Input value={state.form.last_name} parentclassName="cc-row-reg" type="text" className="form-control-cc" id="last_name" placeholder="Last Name" onChange={(e) => handleStateChange(e)} />
												</div>
											</div>
											{state.isValidate && (state.form.first_name === "" || state.form.last_name === "") ? <span style={{ color: "red" }}><i class="fa fa-exclamation-circle"></i>{` Please enter the ${state.form.first_name === "" ? "first name" : state.form.last_name === "" ? "last name" : ""}`}</span> : ""}
											<div className="row cc-row-reg">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<Input value={state.form.email} type="email" className="form-control-cc" id="email" placeholder="Email" onChange={(e) => handleStateChange(e)} />
												</div>

											</div>
											{state.isValidate && !validateEmail(state.form.email) ? <span style={{ color: "red" }}><i class="fa fa-exclamation-circle"></i>{` Please enter the ${state.form.email === "" ? "" : "valid"} email address`}</span> : ""}
											<div className="row cc-row-reg">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<Input value={state.form.password} type="password" className="form-control-cc" id="password" placeholder="Your Password" onChange={(e) => handleStateChange(e)} />
												</div>
											</div>
											{state.isValidate && state.form.password === "" ? <span style={{ color: "red" }}><i class="fa fa-exclamation-circle"></i> {` Please enter the Password`}</span> : ""}
											<div className="row cc-row-reg">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<Input value={state.form.repeatPassword} type="password" className="form-control-cc" id="repeatPassword" placeholder="Retype Password" onChange={(e) => handleStateChange(e)} />
												</div>
											</div>
											{state.isValidate && state.form.repeatPassword === "" ? <span style={{ color: "red" }}><i class="fa fa-exclamation-circle"></i> {` Please enter the Retype Password`}</span> : ""}
											<div className="row cc-row-reg">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<div className="input-group-cc">
														<select name="state" id="state" className="form-control-cc" value={state.state} onChange={(e) => handleStateChange(e)} required>
															<option value="">Select State</option>
															{state.stateList.map((item, index) => {
																return <option key={index} value={item.isoCode} selected={state.form.state === item.isoCode}>{item.name}</option>
															})}
														</select>
													</div>
												</div>
											</div>
											{state.isValidate && state.form.state === "" ? <span style={{ color: "red" }}><i class="fa fa-exclamation-circle"></i> {` Please select the state`}</span> : ""}
											<div className="row" style={{ paddingLeft: "15px", marginBottom: "-20px" }}><label style={{ marginTop: "20px", fontFamily: 'poppins', fontSize: "16px", fontWeight: "500", margin: "15px 0", color: "inherit" }}>Gender <span className="badge badge-dark">?</span></label></div>
											<div className="row">
												<div className="col-lg-4 col-md-4 col-sm-4  input-1">
													<div className="input-group-cc2 cc-row-reg" onClick={() => handleStateChange({
														target: {
															name: "gender",
															type: "radio",
															value: "female"
														}
													})}>
														<label className="label-gender">Female</label>
														<input type="radio" className="form-control-cc2" onChange={(e) => handleStateChange(e)} checked={state.form.gender === 'female'} value="female" name="gender" />
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-4  input-2">
													<div className="input-group-cc2 cc-row-reg" onClick={() => handleStateChange({
														target: {
															name: "gender",
															type: "radio",
															value: "male"
														}
													})}>
														<label className="label-gender">Male</label>
														<input type="radio" className="form-control-cc2" onChange={(e) => handleStateChange(e)} checked={state.form.gender === 'male'} value="male" name="gender" />
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-4  input-3">
													<div className="input-group-cc2 cc-row-reg" onClick={() => handleStateChange({
														target: {
															name: "gender",
															type: "radio",
															value: "nonbinary"
														}
													})}>
														<label className="label-gender" style={{ margin: "auto 0" }}>Non-binary</label>
														<input type="radio" className="form-control-cc2" onChange={(e) => handleStateChange(e)} checked={state.form.gender === 'nonbinary'} value="nonbinary" name="gender" />
													</div>
												</div>
											</div>
											{state.isValidate && state.form.gender === "" ? <span style={{ color: "red" }}><i class="fa fa-exclamation-circle"></i> {` Please select the gender`}</span> : ""}
											<div className="row" style={{ paddingLeft: "15px", marginBottom: "-20px" }}><label style={{ marginTop: "20px", fontFamily: 'poppins', fontSize: "16px", fontWeight: "500", margin: "15px 0", color: "inherit" }}>Date of Birth <span className="badge badge-dark">?</span></label></div>
											<div className="row ">
												<div className="col-lg-4 col-md-4 col-sm-4  input-1">
													<div className="input-group-cc cc-row-reg">
														<select name="month" id="month" className="form-control-cc" onChange={(e) => handleStateChange(e)} required>
															<option value="" hidden>Month</option>
															{state.monthsList.map((item, index) => {
																return <option key={index} value={item} selected={state.form.month === item}>{item}</option>
															})}
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-4  input-2">
													<div className="input-group-cc cc-row-reg">
														<select name="day" id="day" className="form-control-cc" onChange={(e) => handleStateChange(e)} required>
															<option value="" hidden>Day</option>
															{state.daysList.map((item, index) => {
																return <option key={index} value={item} selected={state.form.day === item}>{item}</option>
															})}
														</select>
													</div>
												</div>
												<div className="col-sm-4 input-3">
													<div className="input-group-cc cc-row-reg  ">
														<select name="year" id="year" className="form-control-cc" onChange={(e) => handleStateChange(e)} required>
															<option value="" hidden>Year</option>
															{state.yearsList.map((item, index) => {
																return <option key={index} value={item} selected={state.form.year === item}>{item}</option>
															})}
														</select>
													</div>
												</div>
											</div>
											{state.isValidate && (state.form.month === "" || state.form.day === "" || state.form.year === "") ? <span style={{ color: "red" }}><i class="fa fa-exclamation-circle"></i> {` Please select the ${state.form.month === "" ? "month" : state.form.day === "" ? "day" : state.form.year === "" ? "year" : ""}`}</span> : ""}
											{props.apiCallStatus.apiCallFor === "signUpUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
												<div className="loader-img text-center">
													<Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
												</div>
												: ""}
											{/* {state.messageFor === "signUp" && state.message !== "" ?
												<div className={`alert alert-${state.messageType}`}>
													{state.message}
												</div>
												: ""} */}
											{/* <div className="submit-btn">

									<input id="submit" className="submit" type="submit" value="SIGN UP" name="submit" />
								</div> */}
											<div className="submit-btn">
												<button className="submit" type="submit" >Sign Up</button>
											</div>
										</form>
										<div className="create-one-account">
											<span className="text">Already have any account? <Link className="create-one" to="/login">Login</Link></span>
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
												<a className="facebookIcon" href="https://facebook.com/" target="_blank"><i className="fa fa-facebook bottom-icons" ></i></a>
												<a className="instIcon" href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram bottom-icons"></i></a>
												<a className="googleIcon" href="https://plus.google.com/" target="_blank"><i className="fa fa-google bottom-icons"></i></a>
											</div>
										</div>
									</div></div>
							</div>
						</div>
					</div>

				</div>
			</section >
		</React.Fragment >
	);
}

const Input = (props) => {
	let data = { ...props };
	let parentClass = data["parentclassName"]
	if (data["parentclassName"]) {
		delete data["parentclassName"]
	}
	return <div className={`input-group-cc ${parentClass ? parentClass : ""}`}>
		<input {...data} required />
	</div>
}

const mapStateToProps = (state, ownProps) => ({
	apiCallStatus: state.apicallStatusReducer,
	user: { isLogin: state.authReducer.isLogin }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	signUp: (data) => dispatch(signUpUser(data)),
	logInAction: (data) => dispatch(logInAction(data)),
	ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName))
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp)

