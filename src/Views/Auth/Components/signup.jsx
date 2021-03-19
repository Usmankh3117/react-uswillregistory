import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { RegisterStyle } from '../Css/signUp';
import { connect } from 'react-redux';
// import { AuthWrapper } from "./authWrapper";
import { signUpUser } from "../ApiCalls/auth";
import { logInAction } from "../Actions/action";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Swal from 'sweetalert2';
import csc from 'country-state-city'
import { getYearList, UpdateAuthCookiesState } from '../../../Services/common';
import moment from 'moment';
import Image from '../../Common/Components/image';
import RegisterBg from "../../../assets/img/signup-back-image.png";
import RegisterFormBG from "../../../assets/img/Register-Form_background-img.png"

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
			props.logInAction(UpdateAuthCookiesState({
				access_token: "test", user: {
					email: "sharoza51@gmail.com",
					id: 1,
					type: "user"
				}
			}))
			let redirectUrl = '/profile';
			props.history.push(redirectUrl)
			// let birthDate = `${state.form.day}-${state.form.month}-${state.form.year}`;
			// birthDate = moment(birthDate).format('YYYY-MM-DD');
			// props.signUp({
			// 	"email": state.form.email,
			// 	"password": state.form.password,
			// 	"first_name": state.form.first_name,
			// 	"middle_name": state.form.middle_name,
			// 	"last_name": state.form.last_name,
			// 	"birthdate": birthDate,
			// 	"state": state.form.state,
			// 	"gender": state.form.gender
			// })
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
			<RegisterStyle />
			<section className="form-section">
				<div className="container cc-reset-shadow1 bg-height">
					<div className="row cc-width">
						<div className="col-md-6 bg-image-cc">

							<div className="kuttapana">
								<h1><strong>Welcome</strong> to the The U.S. Will Registry</h1>
								<p className="txt-white-p">please register yourself and make an account</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 col-sm-12 cc-padding">
							<form className="needs-validation" onSubmit={(e) => handleSubmit(e)} >
								<div className="row">
									<div className="heading-section">
										<h1 className="heading"><span className="bold">Register</span> Form</h1>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-4">
										<Input value={state.form.first_name} parentclassName="cc-row-reg" type="text" className="form-control-cc" id="first_name" placeholder="First Name" onChange={(e) => handleStateChange(e)} />
									</div>

									<div className="col-lg-4 col-md-4 col-sm-4">
										<Input value={state.form.middle_name} parentclassName="cc-row-reg" type="text" className="form-control-cc" id="middle_name" placeholder="Middle Name" onChange={(e) => handleStateChange(e)} />
									</div>

									<div className="col-lg-4 col-md-4 col-sm-4">
										<Input value={state.form.last_name} parentclassName="cc-row-reg" type="text" className="form-control-cc" id="last_name" placeholder="Last Name" onChange={(e) => handleStateChange(e)} />
									</div>
								</div>

								<div className="row cc-row-reg">
									<div className="col-lg-12 col-md-12 col-sm-12">
										<Input value={state.form.email} type="email" className="form-control-cc" id="email" placeholder="Email" onChange={(e) => handleStateChange(e)} />
									</div>
								</div>
								<div className="row cc-row-reg">
									<div className="col-lg-12 col-md-12 col-sm-12">
										<Input value={state.form.password} type="password" className="form-control-cc" id="password" placeholder="Your Password" onChange={(e) => handleStateChange(e)} />
									</div>
								</div>
								<div className="row cc-row-reg">
									<div className="col-lg-12 col-md-12 col-sm-12">
										<Input value={state.form.repeatPassword} type="password" className="form-control-cc" id="repeatPassword" placeholder="Retype Password" onChange={(e) => handleStateChange(e)} />
									</div>
								</div>
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
								<div className="row" style={{ paddingLeft: "15px", marginBottom: "-20px" }}><label style={{ marginTop: "20px", fontFamily: 'poppins', fontSize: "16px", fontWeight: "500", color: "inherit" }}>Gender <span className="badge badge-dark">?</span></label></div>
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-4">
										<div className="input-group-cc2 cc-row-reg">
											<label className="label-gender">Female</label>
											<input type="radio" className="form-control-cc2" onChange={(e) => handleStateChange(e)} checked={state.form.gender === 'female'} value="female" name="gender" />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-4">
										<div className="input-group-cc2 cc-row-reg">
											<label className="label-gender">Male</label>
											<input type="radio" className="form-control-cc2" onChange={(e) => handleStateChange(e)} checked={state.form.gender === 'male'} value="male" name="gender" />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-4">
										<div className="input-group-cc2 cc-row-reg">
											<label className="label-gender">Non-binary</label>
											<input type="radio" className="form-control-cc2" onChange={(e) => handleStateChange(e)} checked={state.form.gender === 'nonbinary'} value="nonbinary" name="gender" />
										</div>
									</div>
								</div>
								<div className="row" style={{ paddingLeft: "15px", marginBottom: "-20px" }}><label style={{ marginTop: "20px", fontFamily: 'poppins', fontSize: "16px", fontWeight: "500", color: "inherit" }}>Date of Birth <span className="badge badge-dark">?</span></label></div>
								<div className="row ">
									<div className="col-lg-4 col-md-4 col-sm-4">
										<div className="input-group-cc cc-row-reg">
											<select name="month" id="month" className="form-control-cc" onChange={(e) => handleStateChange(e)} required>
												<option value="">Month</option>
												{state.monthsList.map((item, index) => {
													return <option key={index} value={item} selected={state.form.month === item}>{item}</option>
												})}
											</select>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-4">
										<div className="input-group-cc cc-row-reg">
											<select name="day" id="day" className="form-control-cc" onChange={(e) => handleStateChange(e)} required>
												<option value="">Day</option>
												{state.daysList.map((item, index) => {
													return <option key={index} value={item} selected={state.form.day === item}>{item}</option>
												})}
											</select>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="input-group-cc cc-row-reg">
											<select name="year" id="year" className="form-control-cc" onChange={(e) => handleStateChange(e)} required>
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
								{/* <div class="submit-btn">

									<input id="submit" class="submit" type="submit" value="SIGN UP" name="submit" />
								</div> */}
								<div className="submit-btn">
									<button className="submit" type="submit" >Sign Up</button>
								</div>
							</form>
							<div className="create-one-account">
								<span style={{ display: "flex", justifyContent: "center" }} className="text">Already have any account? <Link className="create-one" to="/login" style={{ marginLeft: "5px", fontWeight: "600", fontSize: "18px" }}>Login Here</Link></span>
							</div>
						</div>
					</div>
				</div >
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
)(SignUp);
