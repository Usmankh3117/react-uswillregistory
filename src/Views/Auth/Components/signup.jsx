import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from '../Css/signUp';
import { connect } from 'react-redux';
import { AuthWrapper } from "./authWrapper";
import { signUpUser } from "../ApiCalls/auth";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import Swal from 'sweetalert2';
import csc from 'country-state-city'
import { getYearList } from '../../../Services/common';
import Image from '../../Common/Components/image';

const defaultState = {
	"email": "",
	"first_name": "",
	"middle_name": "",
	"last_name": "",
	"birthdate": "",
	"country": "",
	"state": "",
	"gender": "",
	"password": "",
	"repeatPassword": "",
	"day": "",
	"month": "",
	"year": "",
	"stateList": [],
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
	"monthsList": ["January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"],
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
			Swal.fire("Error!", props.apiCallStatus.message, "error");
			props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
		}
	});
	const handleStateChange = (e) => {
		let id = e.target.id;
		let val = e.target.value;
		let cloneState = { ...state };
		if (id === "country") {
			cloneState['state'] = "";
			cloneState['stateList'] = csc.getStatesOfCountry(val);
		}
		cloneState[id] = val;
		setState(cloneState);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// props.signUp({
		// 	"email": "facere",
		// 	"password": "pariatur",
		// 	"first_name": "perspiciatis",
		// 	"middle_name": "numquam",
		// 	"last_name": "aut",
		// 	"birthdate": "rerum",
		// 	"state": "AR",
		// 	"gender": "reprehenderit"
		// })
		let isValid = validateForm();
		if (isValid) {
			props.signUp({
				"email": "facere",
				"password": "pariatur",
				"first_name": "perspiciatis",
				"middle_name": "numquam",
				"last_name": "aut",
				"birthdate": "rerum",
				"state": "AR",
				"gender": "reprehenderit"
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
		} else if (state.password.length < 6) {
			isValid = false;
			msg = "Password must be greater than 6 characters";
		} else if (state.password !== state.repeatPassword) {
			isValid = false;
			msg = "Password and confirm password does not match";
		}
		if (!isValid) {
			Swal.fire("Error!", msg, "error");
		}
		return isValid;
	}
	return (
		<Wrapper>
			<AuthWrapper parentClass="register-form-div" formName="Register" name="Register" description="Please ! Register your self and make an" linkUrl="" linkLabel="Account">
				<div className="register-form">
					<form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-4">
								<Input id={state.first_name} type="text" className="form-control1" name="first_name" placeholder="First Name" />
							</div>

							<div className="col-lg-4 col-md-4 col-sm-4">
								<Input id={state.middle_name} type="text" className="form-control1" name="middle_name" placeholder="Middle Name" />
							</div>

							<div className="col-lg-4 col-md-4 col-sm-4">
								<Input id={state.last_name} type="text" className="form-control1" name="last_name" placeholder="Last Name" />
							</div>
						</div>

						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<Input id={state.email} type="email" className="form-control1" name="email" placeholder="Email" />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<Input id={state.password} type="password" className="form-control1" name="password" placeholder="Your Password" />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<Input id={state.repeatPassword} type="password" className="form-control1" name="repeatPassword" placeholder="Retype Password" />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="input-group1">
									<select name="country" id="country" className="form-control1" value={state.country} onChange={(e) => handleStateChange(e)}>
										<option value="">Select Country</option>
										{state.countryList.map((item, index) => {
											return <option key={index} value={item.isoCode} selected={state.country === item.isoCode}>{item.name}</option>
										})}
									</select>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="input-group1">
									<select name="state" id="state" className="form-control1" value={state.state} onChange={(e) => handleStateChange(e)}>
										<option value="">Select State</option>
										{state.stateList.map((item, index) => {
											return <option key={index} value={item.name} selected={state.state === item.name}>{item.name}</option>
										})}
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-4">
								<div className="input-group1">
									<select name="day" id="day" className="form-control1" onChange={(e) => handleStateChange(e)}>
										<option value="">Day</option>
										{state.daysList.map((item, index) => {
											return <option key={index} value={item} selected={state.day === item}>{item}</option>
										})}
									</select>
								</div>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-4">
								<div className="input-group1">
									<select name="month" id="month" className="form-control1" onChange={(e) => handleStateChange(e)}>
										<option value="">Month</option>
										{state.monthsList.map((item, index) => {
											return <option key={index} value={item} selected={state.month === item}>{item}</option>
										})}
									</select>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="input-group1">
									<select name="year" id="year" className="form-control1" onChange={(e) => handleStateChange(e)}>
										<option value="">Year</option>
										{state.yearsList.map((item, index) => {
											return <option key={index} value={item} selected={state.year === item}>{item}</option>
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
						<div className="submit-btn">
							<input id="submit" onClick={(e) => handleSubmit(e)} className="submit" type="submit" value="Sign Up" name="submit" />
						</div>
					</form>

					<div className="row mg-top-25"></div>
					<div className="row mg-top-30"></div>

				</div>
			</AuthWrapper>
		</Wrapper>
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