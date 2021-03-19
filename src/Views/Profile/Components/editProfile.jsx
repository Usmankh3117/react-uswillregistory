import React, { useEffect, useState } from "react";
import Image from '../../Common/Components/image';
import Swal from 'sweetalert2';
import csc from 'country-state-city'
import moment from 'moment';
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import { connect } from 'react-redux';
import { getUserDetail, updateUserDetail, getCityByState } from "../ApiCalls/profile";
import { getYearList } from '../../../Services/common';
import { Style } from '../Css/editProfile';
const defaultState = {
    "form": {
        "email": "",
        "first_name": "",
        "middle_name": "",
        "last_name": "",
        "address_1": "",
        "address_2": "",
        "city": "",
        "zipcode": "",
        "bio": "",
        "mobile": "",
        "state": "",
        "gender": "",
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
function EditProfile(props) {
    const [state, setState] = useState(defaultState);
    useEffect(() => {
        if ((props.apiCallStatus.apiCallFor === "getUserDetail" || props.apiCallStatus.apiCallFor === "updateUserDetail") && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
            let date = moment(props.userDetail.birthdate);
            let day = date.day();
            let month = date.format('MMM');
            let year = date.format('yyyy');
            if (day <= 9) {
                day = "0" + day;
            } else {
                day = JSON.stringify(day);
            }
            setState({
                ...state,
                form: {
                    email: props.userDetail.email,
                    first_name: props.userDetail.first_name,
                    last_name: props.userDetail.last_name,
                    middle_name: props.userDetail.middle_name,
                    state: props.userDetail.state_abbr,
                    gender: props.userDetail.gender,
                    "address_1": props.userDetail.address_1,
                    "address_2": props.userDetail.address_2,
                    "city": props.userDetail.city,
                    "zipcode": props.userDetail.zipcode,
                    "bio": props.userDetail.bio,
                    "mobile": props.userDetail.mobile,
                    "day": day,
                    "month": month,
                    "year": parseInt(year),
                },
            })
            if (props.apiCallStatus.apiCallFor === "updateUserDetail") {
                Swal.fire("Success!", props.apiCallStatus.message, "success");
            }
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
        }
        if (props.apiCallStatus.apiCallFor === "updateUserDetail" && props.apiCallStatus.isCompleted && props.apiCallStatus.isFailed) {
            let msg = '';
            if (typeof props.apiCallStatus.message === 'object') {
                if (props.apiCallStatus.message[0]) {
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
    useEffect(() => {
        // props.getUserDetail()
    }, [])
    const handleStateChange = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        let cloneState = { ...state };
        if (id === "country") {
            cloneState['form']['state'] = "";
            cloneState['stateList'] = csc.getStatesOfCountry(val);
        } else if (id === "state") {
            cloneState['form']['city'] = "";
            props.getCityByState(props.userDetail.state_abbr)
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
            props.updateUserDetail({
                "email": state.form.email,
                "first_name": state.form.first_name,
                "middle_name": state.form.middle_name,
                "last_name": state.form.last_name,
                "birthdate": birthDate,
                "state": state.form.state,
                "gender": state.form.gender,
                "address_1": state.form.address_1,
                "address_2": state.form.address_2,
                "city": state.form.city,
                "zipcode": state.form.zipcode,
                "bio": state.form.bio,
                "mobile": state.form.mobile
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
                if (obj[property] === "" || obj[property] === null) {
                    let elem = document.getElementById(property);
                    if (elem) {
                        elem.focus();
                    }
                    msg = `${property.replace("_", " ")} is required`;
                    break;
                }
            }
        }
        if (!isValid) {
            setState({
                ...state,
                "message": msg,
                "messageType": "danger",
                "messageFor": "updateUserDetail"
            })
        }
        return isValid;
    }
    return <React.Fragment>
        <Style />
        <section className="profile-section">
            <div className="container">
                <div className="row mg-top-50"></div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8 center">
                        <h1 ><span className="bold blue">Edit</span> your Profile</h1>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                </div>
                <div className="row mg-top-50"></div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 profile-section-div">
                                <div className="active-profile-div">
                                    <Image name="living_with_forms.png" alt="profile-img" className="profile-section-img" />
                                    <span>Living Will Forms</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 profile-section-div">
                                <div className="not-active-profile-div">
                                    <Image name="self_proving_form.png" alt="profile-img" className="profile-section-img" />
                                    <span>Self Proving affidavit form</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 profile-section-div">
                                <div className="not-active-profile-div">
                                    <Image name="witness_form.png" alt="profile-img" className="profile-section-img" />
                                    <span>Witness form</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 profile-section-div">
                                <div className="not-active-profile-div">
                                    <Image name="download_form.png" alt="profile-img" className="profile-section-img" />
                                    <span>Download Will documents</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row">
                            <div className="register-form">
                                <form className=" needs-validation" onSubmit={(e) => handleSubmit(e)} noValidate>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 cc-input-ep col-sm-4">
                                            <Input value={state.form.first_name} type="text" className="form-control1" id="first_name" placeholder="First Name" onChange={(e) => handleStateChange(e)} />
                                        </div>

                                        <div className="col-lg-4 col-md-4 cc-input-ep cc-input-ep1 col-sm-4">
                                            <Input value={state.form.middle_name} type="text" className="form-control1" id="middle_name" placeholder="Middle Name" onChange={(e) => handleStateChange(e)} />
                                        </div>

                                        <div className="col-lg-4 col-md-4 cc-input-ep1 col-sm-4">
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
                                            <Input value={state.form.mobile} type="number" className="form-control1" id="mobile" placeholder="Mobile" onChange={(e) => handleStateChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
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
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <Input value={state.form.city} type="text" className="form-control1" id="city" placeholder="City" onChange={(e) => handleStateChange(e)} />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="input-group1">
                                                <select name="gender" id="gender" className="form-control1" onChange={(e) => handleStateChange(e)} required>
                                                    <option value="">Select gender</option>
                                                    <option value={'male'} selected={state.form.gender === 'male'}>Male</option>
                                                    <option value={'female'} selected={state.form.gender === 'female'}>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <Input value={state.form.zipcode} type="number" className="form-control1" id="zipcode" placeholder="Zipcode" onChange={(e) => handleStateChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <Input value={state.form.bio} type="text" className="form-control1" id="bio" placeholder="Bio" onChange={(e) => handleStateChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div style={{ margin: "7px 20px", display: "flex" }}> <div style={{ fontSize: "16px" }}>
                                            Date of birth <span class="badge badge-dark">?</span></div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 cc-input-ep">
                                            <div className="input-group1">
                                                <select name="month" id="month" className="form-control1" onChange={(e) => handleStateChange(e)} required>
                                                    <option value="">Month</option>
                                                    {state.monthsList.map((item, index) => {
                                                        return <option key={index} value={item} selected={state.form.month === item}>{item}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 cc-input-ep cc-input-ep1">
                                            <div className="input-group1">
                                                <select name="day" id="day" className="form-control1" onChange={(e) => handleStateChange(e)} required>
                                                    <option value="">Day</option>
                                                    {state.daysList.map((item, index) => {
                                                        return <option key={index} value={item} selected={state.form.day === item}>{item}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 cc-input-ep1">
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
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="input-group1">
                                                <textarea className="form-control1" rows="4" cols="50" id="address_1" value={state.form.address_1} placeholder="Address 1" onChange={(e) => handleStateChange(e)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="input-group1">
                                                <textarea className="form-control1" rows="4" cols="50" id="address_2" value={state.form.address_2} placeholder="Address 2" onChange={(e) => handleStateChange(e)} required />
                                            </div>
                                        </div>
                                    </div>
                                    {props.apiCallStatus.apiCallFor === "updateUserDetail" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                        <div className="loader-img text-center">
                                            <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
                                        </div>
                                        : ""}
                                    {state.messageFor === "updateUserDetail" && state.message !== "" ?
                                        <div className={`alert alert-${state.messageType}`}>
                                            {state.message}
                                        </div>
                                        : ""}
                                    <div className="submit-btn">
                                        <input id="submit" onClick={(e) => handleSubmit(e)} className="click-here-btn" type="submit" value="Submit" name="submit" />
                                    </div>
                                </form>
                                <div className="row mg-top-25"></div>
                                <div className="row mg-top-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>;
}

const Input = (props) => {
    return <div className="input-group1">
        <input {...props} required />
    </div>
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    user: {
        isLogin: state.authReducer.isLogin,
        userId: state.authReducer.userId
    },
    userDetail: state.profileReducer.userDetail,
    cityList: state.profileReducer.cityList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCityByState: (state) => dispatch(getCityByState(state)),
    updateUserDetail: (data) => dispatch(updateUserDetail(data)),
    getUserDetail: () => dispatch(getUserDetail()),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile)
