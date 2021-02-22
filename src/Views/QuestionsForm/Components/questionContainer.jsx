import React, { useEffect, useState } from "react";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import { connect } from 'react-redux';
import { Wrapper } from '../Css/question';
import { getFormSection, getQuestionList, getStateList } from "../ApiCalls/question";
import DatePicker from 'react-date-picker';
import Image from '../../Common/Components/image';
import moment from 'moment';

function QuestionsContainer(props) {
    const [state, setState] = useState({
        activeSectionId: 2,
        activePageId: 4,
        questions: {},
        message: "",
        messageType: "",
        messageFor: "",
    })
    useEffect(() => {
        props.getFormSection();
        props.getQuestionList(state.activePageId);
        props.getStateList();
    }, [])
    useEffect(() => {
        if (state.questions[state.activePageId] === undefined && props.questions[state.activePageId] !== undefined) {
            let questions = { ...state.questions };
            let inputs = {};
            let quest = props.questions[state.activePageId];
            quest.forEach(element => {
                for (const input in element.inputs) {
                    let value = "";
                    if (element.inputs[input].input === "array") {
                        inputs[element.question_code] = {
                            isArray: true,
                            inputs: {},
                            value: []
                        }
                        if (element.inputs[input] && element.inputs[input].fields) {
                            for (const subInput in element.inputs[input].fields) {
                                inputs[element.question_code]["inputs"][subInput] = { ...element.inputs[input].fields[subInput], value }
                            }
                        }
                    } else {
                        if (input === "birthdate") {
                            value = moment().format('YYYY-MM-DD');
                        }
                        inputs[element.question_code] = {
                            [input]: { ...element.inputs[input], value }
                        }
                    }
                }
            });
            questions[state.activePageId] = inputs;
            setState({
                ...state,
                questions
            })
            console.log(questions[state.activePageId])
        }
    })
    const handlePageStateChange = (questionId, pageId, e) => {
        let id = e.target.id;
        let value = e.target.value;
        let questions = state.questions;
        questions[pageId][questionId][id].value = value;
        setState({
            ...state,
            questions,
            message: "",
            messageType: "",
            messageFor: "",
        })
        console.log(questions[pageId])
    }
    const nextPage = () => {
        if (validatePage(state.activePageId)) {
            let pageIndex = props.pageList.findIndex(x => x.id === state.activePageId);
            if (pageIndex !== -1 && props.pageList[pageIndex + 1]) {
                let nextPage = props.pageList[pageIndex + 1];
                props.getQuestionList(nextPage.id);
                setState({
                    ...state,
                    activeSectionId: nextPage.section_id,
                    activePageId: nextPage.id
                })
            }
        }
    }
    const validatePage = (pageId) => {
        let isValid = true;
        let message = "";
        let messageType = "";
        let messageFor = "";
        let questions = state.questions[pageId];
        for (const input in questions) {
            if (questions[input].value === "") {
                isValid = false;
                message = `${questions[input].placeholder ? questions[input].placeholder : input} is required`;
                messageType = "danger";
                messageFor = "form";
                break;
            }
        }
        setState({
            ...state,
            message,
            messageType,
            messageFor
        })
        return isValid;
    }
    const checkQuestionDependancy = (dependency) => {
        let isAllow = false;
        if (state.questions[state.activePageId]) {
            for (let index = 0; index < dependency.length; index++) {
                const element = dependency[index];
                let questions = props.questions[state.activePageId];
                let questionIndex = questions.findIndex(x => x.id === element.parent_id)
                if (questionIndex !== -1) {
                    let questionId = questions[questionIndex].question_code;
                    let key = Object.keys(questions[questionIndex].inputs)[0];
                    let value = state.questions[state.activePageId][questionId][key].value;
                    if (value === element.answer) {
                        isAllow = true;
                    } else {
                        isAllow = false;
                    }
                }
            }
        }
        return isAllow;
    }
    return <Wrapper>
        <GetStarted />
        <div className="form-section">
            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                        <PageDescription pageList={props.pageList} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                        <div className="right-outer-form-div">
                            <Sections sectionList={props.sectionList} activeSectionId={state.activeSectionId} />
                            <PagesListing pageList={props.pageList} activePageId={state.activePageId} />
                            <div id="Basic">
                                {props.apiCallStatus.apiCallFor === "getQuestionList" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                    <div className="loader-img text-center">
                                        <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
                                    </div>
                                    : ""}
                                {props.questions[state.activePageId] ? props.questions[state.activePageId].map((item, index) => {
                                    let inputs = Object.keys(item.inputs);
                                    let colLength = inputs ? 12 / inputs.length : 12;
                                    return item.dependencies.length === 0 || (item.dependencies.length > 0 && checkQuestionDependancy(item.dependencies)) ? <div className="row" key={index}>
                                        <div className="col-lg-12 col-lg-12 col-sm-12">
                                            <p className="form-inner-heading">{item.question_text}</p>
                                            {inputs && inputs.map((inputKey, i) => {
                                                let input = item.inputs[inputKey];
                                                let value = state.questions[state.activePageId] && state.questions[state.activePageId][item.question_code] ? state.questions[state.activePageId][item.question_code][inputKey].value : ""
                                                return inputKey === "birthdate" ? <DateInput key={i} id={inputKey} questionId={item.question_code} pageId={state.activePageId} value={value} name={inputKey} placeholder={input.placeholder} handleChange={(pageId, e) => handlePageStateChange(pageId, e)} /> : <div key={i} className={`col-lg-${colLength} col-lg-${colLength} col-sm-${colLength} pd-left-0`}>
                                                    {input.input === "text" ?
                                                        <InputText type={input.input} id={inputKey} questionId={item.question_code} pageId={state.activePageId} value={value} name={inputKey} placeholder={input.placeholder} handleChange={(pageId, e) => handlePageStateChange(pageId, e)} /> :
                                                        input.input === "radio" || input.input === "select" ? <DropDown options={inputKey === "state" ? props.stateList : input.options} id={inputKey} questionId={item.question_code} pageId={state.activePageId} value={value} name={inputKey} handleChange={(pageId, e) => handlePageStateChange(pageId, e)} /> : ""}
                                                </div>
                                            })}
                                        </div>
                                    </div> : ""
                                }) : ""}
                                <div className="row">
                                    {state.messageFor === "form" && state.message !== "" ?
                                        <div className={`alert alert-${state.messageType}`}>
                                            {state.message}
                                        </div>
                                        : ""}
                                    <div className="col-lg-12 col-lg-12 col-sm-12 form-btn-div">
                                        <button className="next-btn" onClick={() => nextPage()}>
                                            NEXT
                                    <i className="fa fa-arrow-right"></i>
                                        </button>
                                        <button className="exit-btn">
                                            <i className="fa fa-arrow-left"></i>
                                    EXIT
                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>;
}

function GetStarted() {
    return <section className="get-started">
        <div className="started-img">
            <Image name="last_will_and_testaments.png" alt="contact us img" />
        </div>
    </section>
}

function Sections(props) {
    return <div className="form_top_controls">
        <ul >
            {props.sectionList.map((item, index) => {
                return <li key={index} className={props.activeSectionId === item.id ? "active" : ""} data-filter="*">{item.section_name}</li>
            })}
        </ul>
    </div>
}

function PagesListing(props) {
    return <div className="sidebar-countdown">
        {props.pageList.map((item, index) => {
            return <p key={index} className={`form_1 ${props.activePageId === item.id ? 'active' : ''}`}>{index + 1}</p>
        })}
    </div>
}

function PageDescription(props) {
    return <div className="left-outer-form-div">
        {props.pageList.map((item, index) => {
            return <h4 key={index}><a href="#">{item.page_title}</a></h4>
        })}
    </div>
}

function InputText(props) {
    return <input  {...props} onChange={(e) => props.handleChange(props.questionId, props.pageId, e)} className="form-input-field" />
}

function DropDown(props) {
    return <select name={props.name} id={props.id} onChange={(e) => props.handleChange(props.questionId, props.pageId, e)} className="form-input-field">
        <option value=""></option>
        {props.options.map((item, index) => {
            return <option key={index} value={item.value} selected={item.value === props.value}>{item.label}</option>
        })}
    </select>
}
function DateInput(props) {
    return <React.Fragment>
        <div className="col-lg-12 col-lg-12 col-sm-12" style={{ paddingLeft: "0px" }}>
            <DatePicker
                name={props.name} id={props.id} onChange={(e) => props.handleChange(props.questionId, props.pageId, { target: { id: props.id, value: moment(e).format('YYYY-MM-DD') } })}
                className="form-input-field"
                // format="YYYY-MM-DD"
                format="y-MM-dd"
                maxDate={new Date()}
                value={props.value === "" ? new Date() : new Date(props.value)}
            />
        </div>
        {/* <div className="col-lg-4 col-lg-4 col-sm-4" style={{ paddingLeft: "0px" }}>
            <select name="days" id="days" className="form-input-field">
                <option value="0">Days</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div className="col-lg-4 col-lg-4 col-sm-4" style={{ paddingLeft: "0px" }}>
            <select name="month" id="month" className="form-input-field">
                <option value="0">Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div className="col-lg-4 col-lg-4 col-sm-4" style={{ paddingLeft: "0px" }}>
            <select name="gender" id="gender" className="form-input-field">
                <option value="0">Years</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div> */}
    </React.Fragment>
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    user: { isLogin: state.authReducer.isLogin, },
    pageList: state.questionReducer.pageList,
    sectionList: state.questionReducer.sectionList,
    questions: state.questionReducer.questions,
    stateList: state.questionReducer.stateList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getStateList: () => dispatch(getStateList()),
    getQuestionList: (pageId) => dispatch(getQuestionList(pageId)),
    getFormSection: () => dispatch(getFormSection()),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsContainer)
