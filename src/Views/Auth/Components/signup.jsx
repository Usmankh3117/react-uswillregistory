import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Style } from '../Css/signUp';
import { connect } from 'react-redux';
import { AuthWrapper } from "./authWrapper";
import { signUpUser } from "../ApiCalls/auth";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Swal from 'sweetalert2';
import csc from 'country-state-city'
import { getYearList } from '../../../Services/common';
import moment from 'moment';
import Image from '../../Common/Components/image';
import RegisterBg from "../../../assets/img/Register-Form_background-img.png";

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
	"messageFor": ""
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
			let msg = '';
			if (typeof props.apiCallStatus.message === 'object') {
				for (const property in props.apiCallStatus.message) {
					if (props.apiCallStatus.message[property][0] !== "") {
						msg = props.apiCallStatus.message[property][0];
						break;
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
		let id = e.target.id;
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
	}
	const validateForm = () => {
		var form = document.getElementsByClassName('needs-validation')[0];
		let isValid = true;
		let msg = "";
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
		}
		return isValid;
	}
	return (
		<React.Fragment>
			<Style />
			<section className="sign-in-section">
				<div className="container">
					<div className="row">
						<div className="heading-section">
							<h1 className="heading"><span className="bold">Register</span> form</h1>
						</div>
					</div>
					<div className="row">

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 login-left-outer-div1"
							style={{ backgroundImage: `url(${RegisterBg})`, backgroundSize: "cover" }}>
							<div className="login-left-inner-div1">
								<p className="heading1"> <span className="bold">Welcome</span> to the The Will Registry </p>
								<p className="para1">Please register yourself and make an account</p>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">

							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div style={{ marginLeft: "30px" }}>
									<div className="form-heading">
										<h2 style={{ color: "#033168" }}>Register</h2>
									</div>
									<div className="register-form">
										<form className="needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
											<div className="row">
												<div className="col-lg-4 col-md-4 col-sm-4">
													<Input value={state.form.first_name} type="text" className="form-control1" id="first_name" placeholder="First Name" onChange={(e) => handleStateChange(e)} />
												</div>

												<div className="col-lg-4 col-md-4 col-sm-4">
													<Input value={state.form.middle_name} type="text" className="form-control1" id="middle_name" placeholder="Middle Name" onChange={(e) => handleStateChange(e)} />
												</div>

												<div className="col-lg-4 col-md-4 col-sm-4">
													<Input value={state.form.last_name} type="text" className="form-control1" id="last_name" placeholder="Last Name" onChange={(e) => handleStateChange(e)} />
												</div>
											</div>

											<div className="row">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<Input value={state.form.email} type="email" className="form-control1" id="email" placeholder="Email" onChange={(e) => handleStateChange(e)} />
												</div>
											</div>
											<div className="row">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<Input value={state.form.password} type="password" className="form-control1" id="password" placeholder="Your Password" onChange={(e) => handleStateChange(e)} />
												</div>
											</div>
											<div className="row">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<Input value={state.form.repeatPassword} type="password" className="form-control1" id="repeatPassword" placeholder="Retype Password" onChange={(e) => handleStateChange(e)} />
												</div>
											</div>
											<div className="row">
												{/* <div className="col-lg-6 col-md-6 col-sm-6">
								<div className="input-group1">
									<select name="country" id="country" className="form-control1" value={state.country} onChange={(e) => handleStateChange(e)} required>
										<option value="">Select Country</option>
										{state.countryList.map((item, index) => {
											return <option key={index} value={item.isoCode} selected={state.form.country === item.isoCode}>{item.name}</option>
										})}
									</select>
								</div>
							</div> */}
												<div className="col-lg-6 col-md-6 col-sm-6">
													<div className="input-group1">
														<select name="gender" id="gender" className="form-control1" onChange={(e) => handleStateChange(e)} required>
															<option value="">Select gender</option>
															<option value={'male'} selected={state.form.gender === 'male'}>Male</option>
															<option value={'female'} selected={state.form.gender === 'female'}>Female</option>
														</select>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-6">
													<div className="input-group1">
														<select name="state" id="state" className="form-control1" value={state.state} onChange={(e) => handleStateChange(e)} required>
															<option value="">Select State</option>
															{state.stateList.map((item, index) => {
																return <option key={index} value={item.isoCode} selected={state.form.state === item.isoCode}>{item.name}</option>
															})}
														</select>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4 col-sm-4">
													<div className="input-group1">
														<select name="day" id="day" className="form-control1" onChange={(e) => handleStateChange(e)} required>
															<option value="">Day</option>
															{state.daysList.map((item, index) => {
																return <option key={index} value={item} selected={state.form.day === item}>{item}</option>
															})}
														</select>
													</div>
												</div>

												<div className="col-lg-4 col-md-4 col-sm-4">
													<div className="input-group1">
														<select name="month" id="month" className="form-control1" onChange={(e) => handleStateChange(e)} required>
															<option value="">Month</option>
															{state.monthsList.map((item, index) => {
																return <option key={index} value={item} selected={state.form.month === item}>{item}</option>
															})}
														</select>
													</div>
												</div>

												<div className="col-sm-4">
													<div className="input-group1">
														<select name="year" id="year" className="form-control1" onChange={(e) => handleStateChange(e)} required>
															<option value="">Year</option>
															{state.yearsList.map((item, index) => {
																return <option key={index} value={item} selected={state.form.year === item}>{item}</option>
															})}
														</select>
													</div>
												</div>
											</div>
											{props.apiCallStatus.apiCallFor === "signUpUser" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
												<div className="loader-img text-center">
													<Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
												</div>
												: ""}
											{state.messageFor === "signUp" && state.message !== "" ?
												<div className={`alert alert-${state.messageType}`}>
													{state.message}
												</div>
												: ""}
											<div className="submit-btn">
												<input id="submit" onClick={(e) => handleSubmit(e)} className="submit" type="submit" value="Sign Up" name="submit" />
											</div>
										</form>

										<div className="row mg-top-25-reg"></div>
										<div className="row mg-top-30"></div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment >
	);
}

const Input = (props) => {
	return <div className="input-group1">
		<input {...props} required />
	</div>
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
