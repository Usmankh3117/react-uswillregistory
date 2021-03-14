import React, { useEffect, useState } from "react";
import { ClearApiByNameAction } from "../../ApiCallStatus/Actions/action";
import { connect } from 'react-redux';
import { Wrapper } from '../Css/question';
import { updateAnswerAction } from "../Actions/action";
import { getFormSection, getQuestionList, getStateList, getChartiyList, pageForAnswers, getAllAnswer } from "../ApiCalls/question";
import Image from '../../Common/Components/image';
import moment from 'moment';
import { getYearList } from "../../../Services/common";

function QuestionsContainer(props) {
    const [state, setState] = useState({
        activeSectionId: 1,
        activePageId: 1,
        questions: {},
        message: "",
        messageType: "",
        messageFor: "",
    })
    useEffect(() => {
        props.getFormSection();
        props.getStateList();
        props.getChartiyList();
        props.getAllAnswer();
    }, [])
    useEffect(() => {
        if ((props.apiCallStatus.apiCallFor === "getAllAnswer" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed && state.questions[state.activePageId] === undefined && props.questions[state.activePageId] !== undefined) ||
            state.questions[state.activePageId] === undefined && props.questions[state.activePageId] !== undefined) {
            let questions = { ...state.questions };
            let inputs = {};
            let quest = props.questions[state.activePageId];
            let answer = {};
            if (props.answerList.length > 0) {
                let index = props.answerList.findIndex(x => x.page_id === state.activePageId);
                if (index !== -1) {
                    answer = props.answerList[index]['answer']
                }
            }
            quest.forEach(element => {
                for (const input in element.inputs) {
                    let value = "";
                    if (input !== "alternate" && element.inputs[input].input === "array") {
                        inputs[element.question_code] = {
                            isArray: true,
                            inputs: {},
                            value: [],
                        }
                        if (element.inputs[input] && element.inputs[input].fields) {
                            for (const subInput in element.inputs[input].fields) {
                                inputs[element.question_code]["inputs"][subInput] = { ...element.inputs[input].fields[subInput], value }
                            }
                            if (answer[element.question_code] && answer[element.question_code].length > 0) {
                                let item = []
                                answer[element.question_code].forEach(ans => {
                                    let obj = {}
                                    for (const subInput in inputs[element.question_code]["inputs"]) {
                                        obj[subInput] = { ...inputs[element.question_code]["inputs"], value: ans[subInput] }
                                    }
                                    item.push(obj);
                                });
                                inputs[element.question_code]['value'] = item;
                            }
                        }
                    } else if (input === "alternate" || element.inputs[input]["primary"]) {
                        inputs[element.question_code] = {
                            "primary": inputs[element.question_code] && inputs[element.question_code]["primary"] ? inputs[element.question_code]["primary"] : {
                                isArray: true,
                                inputs: {},
                                value: [],
                            },
                            "alternate": inputs[element.question_code] && inputs[element.question_code]["alternate"] ? inputs[element.question_code]["alternate"] : {
                                isArray: true,
                                inputs: {},
                                value: [],
                            }
                        }
                        if (element.inputs[input] && element.inputs[input].fields) {
                            for (const subInput in element.inputs[input].fields) {
                                inputs[element.question_code][input]["inputs"][subInput] = { ...element.inputs[input].fields[subInput], value }
                            }
                            if (answer[element.question_code] && answer[element.question_code][input].length > 0) {
                                let item = []
                                answer[element.question_code][input].forEach(ans => {
                                    let obj = {}
                                    for (const subInput in inputs[element.question_code][input]["inputs"]) {
                                        obj[subInput] = { ...inputs[element.question_code][input]["inputs"], value: ans[subInput] }
                                    }
                                    item.push(obj);
                                });
                                inputs[element.question_code][input]['value'] = item;
                            }
                        } else if (element.inputs[input] && element.inputs[input].primary) {
                            for (const subInput in element.inputs[input]["primary"].fields) {
                                inputs[element.question_code]["primary"]["inputs"][subInput] = { ...element.inputs[input]["primary"].fields[subInput], value }
                            }
                            if (answer[element.question_code] && answer[element.question_code]["primary"].length > 0) {
                                let item = []
                                answer[element.question_code]["primary"].forEach(ans => {
                                    let obj = {}
                                    for (const subInput in inputs[element.question_code]["primary"]["inputs"]) {
                                        obj[subInput] = { ...inputs[element.question_code]["primary"]["inputs"][subInput], value: ans[subInput] }
                                    }
                                    item.push(obj);
                                });
                                inputs[element.question_code]["primary"]['value'] = item;
                            }
                        }

                    } else {
                        if (answer[element.question_code] && answer[element.question_code][input]) {
                            value = answer[element.question_code][input]
                        }
                        if (input === "birthdate") {
                            if (value === "") {
                                value = moment().format('YYYY-MM-DD');
                            } else {
                                value = moment(value).format('YYYY-MM-DD')
                            }
                        }
                        inputs[element.question_code] = {
                            ...inputs[element.question_code],
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
        if (props.apiCallStatus.apiCallFor === "pageForAnswers" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed) {
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
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor)
        }
        if ((props.apiCallStatus.apiCallFor === "getAllAnswer" || props.apiCallStatus.apiCallFor === "getFormSection") && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed && props.pageList.length > 0 && props.answerList.length > 0) {
            let activePageId = 1;
            let activeSectionId = 1;
            for (let index = 0; index < props.pageList.length; index++) {
                const pageCode = props.pageList[index].page_code;
                activePageId = props.pageList[index].id;
                activeSectionId = props.pageList[index].section_id;
                let ansIndex = props.answerList.findIndex(x => x.page_code === pageCode);
                if (ansIndex === -1) {
                    break;
                }
            }
            setState({
                ...state,
                activePageId,
                activeSectionId
            })
            props.getQuestionList(activePageId);
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
        // console.log(questions[pageId])
    }
    const nextPage = () => {
        if (validatePage(state.activePageId)) {
            let pageIndex = props.pageList.findIndex(x => x.id === state.activePageId);
            if (pageIndex !== -1) {
                let pageCode = props.pageList[pageIndex].page_code;
                let data = {}
                let answer = {}
                let arr = [];
                for (const question in state.questions[state.activePageId]) {
                    answer[question] = {}
                    arr = [];
                    if (state.questions[state.activePageId][question].isArray) {
                        state.questions[state.activePageId][question].value.forEach(element => {
                            let obj = {}
                            for (const key in element) {
                                obj[key] = element[key].value
                            }
                            arr.push(obj)
                        });
                        answer[question] = arr;
                    } else if (state.questions[state.activePageId][question].primary) {
                        let typeList = ['primary', 'alternate'];
                        let detail = {};
                        typeList.forEach(item => {
                            arr = [];
                            state.questions[state.activePageId][question][item].value.forEach(element => {
                                let obj = {}
                                for (const key in element) {
                                    obj[key] = element[key].value
                                }
                                arr.push(obj)
                            });
                            detail[item] = arr;
                        })
                        answer[question] = detail;
                    } else {
                        for (const input in state.questions[state.activePageId][question]) {
                            answer[question][input] = state.questions[state.activePageId][question][input].value
                        }
                    }
                }
                data["answer"] = answer;
                let lastPage = props.pageList.length - 1;
                data["isFinalSubmission"] = props.pageList[lastPage].id === state.activePageId ? 1 : 0;
                console.log(data)
                props.updateAnswerAction(answer, state.activePageId)
                props.pageForAnswers(data, pageCode);
            } else {
                console.log("Page code not found")
            }
        }
    }
    const previousPage = () => {
        let activePageIndex = props.pageList.findIndex(x => x.id == state.activePageId);
        if (activePageIndex !== -1) {
            let previousPage = props.pageList[activePageIndex - 1].id;
            let previousSection = props.pageList[activePageIndex - 1].section_id;
            if (state.questions[previousPage] === undefined) {
                props.getQuestionList(previousPage);
            }
            setState({
                ...state,
                activePageId: previousPage,
                activeSectionId: previousSection
            })
        }
    }
    const validatePage = (pageId) => {
        let isValid = true;
        let message = "";
        let messageType = "";
        let messageFor = "";
        let questions = state.questions[pageId];
        for (const input in questions) {
            if (questions[input].isArray) {
                questions[input].value.forEach(element => {
                    if (isValid) {
                        let obj = {}
                        for (const key in element) {
                            if (element[key].value === "") {
                                isValid = false;
                                message = `${element[key].placeholder ? element[key].placeholder : key} is required`;
                                messageType = "danger";
                                messageFor = "form";
                                break;
                            }
                        }
                    }
                });
            } else if (questions[input].primary) {
                let arr = ['primary', 'alternate'];
                arr.forEach(item => {
                    if (isValid) {
                        questions[input][item].value.forEach(element => {
                            if (isValid) {
                                let obj = {}
                                for (const key in element) {
                                    if (element[key].value === "") {
                                        isValid = false;
                                        message = `${element[key].placeholder ? element[key].placeholder : key} is required`;
                                        messageType = "danger";
                                        messageFor = "form";
                                        break;
                                    }
                                }
                            }
                        });
                    }
                });
            } else if (questions[input].value === "") {
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
    const checkQuestionDependancy = (dependency, pageId) => {
        let isAllow = false;
        // if (pageId === state.activePageId && state.questions[state.activePageId]) {
        //     for (let index = 0; index < dependency.length; index++) {
        //         const element = dependency[index];
        //         let questions = props.questions[state.activePageId];
        //         let questionIndex = questions.findIndex(x => x.id === element.parent_id)
        //         if (questionIndex !== -1) {
        //             let questionId = questions[questionIndex].question_code;
        //             let key = Object.keys(questions[questionIndex].inputs)[0];
        //             let value = state.questions[state.activePageId][questionId][key].value;
        //             if (value === element.answer) {
        //                 isAllow = true;
        //             } else {
        //                 isAllow = false;
        //             }
        //         }
        //     }
        // } else
        if (state.questions[state.activePageId]) {
            for (let index = 0; index < dependency.length; index++) {
                const element = dependency[index];
                let pageIndex = props.answerList.findIndex(x => x.page_code === element.page_id);
                let elemPageId = element.page_id.replace(/P/g, "");
                elemPageId = elemPageId.replace(/0/g, "");
                elemPageId = parseInt(elemPageId);
                if (elemPageId === state.activePageId) {
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
        } else if (state.questions[state.activePageId]) {
            for (let index = 0; index < dependency.length; index++) {
                const element = dependency[index];
                let pageIndex = props.answerList.findIndex(x => x.page_code === element.page_id);
                if (pageIndex !== -1 && props.answerList[pageIndex]) {
                    let question = props.answerList[pageIndex]["answer"][element.parent_question_code];
                    let questionKey = Object.keys(props.answerList[pageIndex]["answer"][element.parent_question_code])[0];
                    if (question[questionKey] === element.answer) {
                        isAllow = true;
                    } else {
                        isAllow = false;
                    }
                }
            }
        }
        return isAllow;
    }
    const handleChangeOfArrayItem = (pageId, questionId, type, index, e, isPrimary, isAlternate) => {
        let questions = { ...state.questions }
        if (type === "add") {
            if (isPrimary) {
                questions[pageId][questionId]["primary"]["value"].push(questions[pageId][questionId]["primary"]["inputs"])
            } else if (isAlternate) {
                questions[pageId][questionId]["alternate"]["value"].push(questions[pageId][questionId]["alternate"]["inputs"])
            } else {
                questions[pageId][questionId]["value"].push(questions[pageId][questionId]["inputs"])
            }
        } else if (type === "remove") {
            if (isPrimary) {
                questions[pageId][questionId]["primary"]["value"].splice(index, 1)
            } else if (isAlternate) {
                questions[pageId][questionId]["alternate"]["value"].splice(index, 1)
            } else {
                questions[pageId][questionId]["value"].splice(index, 1)
            }
        } else if (type === "change") {
            let id = e.target.id;
            id = id.replace("-" + index, "");
            let value = e.target.value;
            if (isPrimary) {
                questions[pageId][questionId]["primary"]["value"][index][id].value = value;
            } else if (isAlternate) {
                questions[pageId][questionId]["alternate"]["value"][index][id].value = value;
            } else {
                questions[pageId][questionId]["value"][index][id].value = value;
            }
        }
        setState({
            ...state,
            questions
        })
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
                                {(props.apiCallStatus.apiCallFor === "getQuestionList" || props.apiCallStatus.apiCallFor === "getFormSection") && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                    <div className="loader-img text-center">
                                        <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
                                    </div>
                                    : ""}
                                {props.questions[state.activePageId] ? props.questions[state.activePageId].map((item, index) => {
                                    let inputs = Object.keys(item.inputs);
                                    let colLength = inputs ? 12 / inputs.length : 12;
                                    return item.dependencies.length === 0 || (item.dependencies.length > 0 && checkQuestionDependancy(item.dependencies, item.page_id)) ? <div className="row" key={index}>
                                        <div className="col-lg-12 col-lg-12 col-sm-12">
                                            <p className="form-inner-heading">{item.question_text}</p>
                                            {inputs && inputs.map((inputKey, i) => {
                                                let input = item.inputs[inputKey];
                                                let isPrimary = false;
                                                let isAlternate = false;
                                                if (item.inputs[inputKey]["primary"]) {
                                                    input = item.inputs[inputKey]["primary"];
                                                    isPrimary = true;
                                                }
                                                let value = input.input !== "array" && state.questions[state.activePageId] && state.questions[state.activePageId][item.question_code] ? state.questions[state.activePageId][item.question_code][inputKey].value : ""
                                                let arrFields = input.input === "array" ? Object.keys(input.fields) : []
                                                colLength = input.input === "array" ? arrFields.length === 3 ? 4 : arrFields.length === 2 ? 6 : 12 : colLength;
                                                let answerList = [];
                                                if (input.input === "array" && state.questions[state.activePageId] && [item.question_code]) {
                                                    if (isPrimary) {
                                                        answerList = state.questions[state.activePageId][item.question_code]["primary"].value
                                                    } else if (inputKey === "alternate") {
                                                        isAlternate = true;
                                                        answerList = state.questions[state.activePageId][item.question_code]["alternate"].value
                                                    } else {
                                                        answerList = state.questions[state.activePageId][item.question_code].value
                                                    }
                                                }
                                                return input.input === "array" ? <React.Fragment>
                                                    <p className="form-inner-heading">{isPrimary ? "Primary" : isAlternate ? "Alternate" : ""}</p>
                                                    {answerList.map((ques, quesIndex) => {
                                                        return <div className="row" key={quesIndex}>
                                                            {arrFields.map((arrInputKey, j) => {
                                                                let arrInput = input.fields[arrInputKey];
                                                                if (state.questions[state.activePageId] && state.questions[state.activePageId][item.question_code]) {
                                                                    if (isPrimary) {
                                                                        value = state.questions[state.activePageId][item.question_code]["primary"]["value"][quesIndex][arrInputKey].value
                                                                    } else if (isAlternate) {
                                                                        value = state.questions[state.activePageId][item.question_code]["alternate"]["value"][quesIndex][arrInputKey].value
                                                                    } else {
                                                                        value = state.questions[state.activePageId][item.question_code]["value"][quesIndex][arrInputKey].value
                                                                    }
                                                                } else {
                                                                    value = "";
                                                                }
                                                                return <><div key={i} className={`col-lg-${colLength} col-lg-${colLength} col-sm-${colLength} pd-left-0`}> {arrInput.input === "text" ?
                                                                    <InputText type={arrInput.input} id={arrInputKey + "-" + quesIndex} key={j} questionId={item.question_code} pageId={state.activePageId} value={value} name={arrInputKey} placeholder={arrInput.placeholder} handleChange={(questionId, pageId, e) => handleChangeOfArrayItem(pageId, questionId, 'change', quesIndex, e, isPrimary, isAlternate)} /> :
                                                                    arrInput.input === "radio" || arrInput.input === "select" ? <DropDown key={j} options={arrInputKey === "state" ? props.stateList : arrInputKey === "charity" ? props.charityList : arrInput.options} id={arrInputKey + "-" + quesIndex} questionId={item.question_code} pageId={state.activePageId} value={value} name={inputKey} handleChange={(questionId, pageId, e, isPrimary, isAlternate) => handleChangeOfArrayItem(pageId, questionId, 'change', quesIndex, e)} placeholder={input.placeholder} /> : ""}
                                                                </div>
                                                                    {
                                                                        (arrFields.length - 1) === j ? < div className="col-lg-1 col-lg-1 col-sm-1" >
                                                                            <a onClick={() => handleChangeOfArrayItem(state.activePageId, item.question_code, 'remove', quesIndex, 'evnet', isPrimary, isAlternate)}>delete</a>
                                                                        </div> : ""
                                                                    }</>
                                                            })}
                                                        </div>
                                                    })}

                                                    <div className="col-lg-12 col-lg-12 col-sm-12 center">
                                                        <button className="add-another-one" onClick={() => handleChangeOfArrayItem(state.activePageId, item.question_code, 'add', 'index', 'evnet', isPrimary, isAlternate)} >Add</button>
                                                    </div>
                                                </React.Fragment> : inputKey === "birthdate" ? <DateInput id={inputKey} questionId={item.question_code} pageId={state.activePageId} value={value} name={inputKey} placeholder={input.placeholder} handleChange={(questionId, pageId, e) => handlePageStateChange(questionId, pageId, e)} /> : <div key={i} className={`col-lg-${colLength} col-lg-${colLength} col-sm-${colLength} pd-left-0`}>
                                                    {input.input === "text" ?
                                                        <InputText type={input.input} id={inputKey} questionId={item.question_code} pageId={state.activePageId} value={value} name={inputKey} placeholder={input.placeholder} handleChange={(questionId, pageId, e) => handlePageStateChange(questionId, pageId, e)} /> :
                                                        input.input === "radio" || input.input === "select" ? <DropDown options={inputKey === "state" ? props.stateList : inputKey === "charity" ? props.charityList : input.options} id={inputKey} questionId={item.question_code} pageId={state.activePageId} value={value} name={inputKey} handleChange={(questionId, pageId, e) => handlePageStateChange(questionId, pageId, e)} placeholder={input.placeholder} /> : ""}
                                                </div>
                                            })}
                                        </div>
                                    </div> : ""
                                }) : ""}
                                <div className="row">
                                    {props.apiCallStatus.apiCallFor === "pageForAnswers" && !props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed ?
                                        <div className="loader-img text-center">
                                            <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
                                        </div>
                                        : ""}
                                    {state.messageFor === "form" && state.message !== "" ?
                                        <div className={`alert alert-${state.messageType}`}>
                                            {state.message}
                                        </div>
                                        : ""}
                                    {props.questions[state.activePageId] ?
                                        <div className="col-lg-12 col-lg-12 col-sm-12 form-btn-div">
                                            <button className="next-btn" onClick={() => nextPage()}>
                                                NEXT
                                    <i className="fa fa-arrow-right"></i>
                                            </button>
                                            {props.pageList.length > 0 && props.pageList[0].id !== state.activePageId ?
                                                <button onClick={() => previousPage()} className="exit-btn">
                                                    <i className="fa fa-arrow-left"></i>
                                    PREVIOUS
                                </button> : ""}
                                        </div> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </Wrapper >;
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
    return <select name={props.name} id={props.id} placeholder={props.placeholder} onChange={(e) => props.handleChange(props.questionId, props.pageId, e)} className="form-input-field">
        <option value="">{props.placeholder}</option>
        {props.options.map((item, index) => {
            return <option key={index} value={item.value} selected={item.value === props.value}>{item.label}</option>
        })}
    </select>
}
function DateInput(props) {
    const [state, setState] = useState({
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
        "day": "",
        "month": "",
        "year": "",
    })
    useEffect(() => {
        if (props.value !== "" && state.day === "" && state.month === "" && state.year === "") {
            let date = props.value.split("-");
            var day = date[2];
            var month = parseInt(date[1]);
            var year = parseInt(date[0]);
            let cloneState = { ...state };
            cloneState["day"] = day;
            cloneState["month"] = state.monthsList[month - 1];
            cloneState["year"] = year;
            setState(cloneState);
        }
    }, [props.value])
    const handleStateChange = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        let cloneState = { ...state };
        cloneState[id] = val;
        setState(cloneState);
        if (cloneState.day !== "" && cloneState.month !== "" && cloneState.year !== "") {
            props.handleChange(props.questionId, props.pageId, { target: { id: props.id, value: formatedDate(cloneState.year, cloneState.month, cloneState.day) } })
        }
    }
    const formatedDate = (year, month, day) => {
        month = moment().month(month).format("M");
        if (month < 10) {
            month = "0" + month;
        }
        return `${year}-${month}-${day}`
    }
    return <React.Fragment>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
                <select name="month" id="month" className="form-input-field" onChange={(e) => handleStateChange(e)} required>
                    <option value="">Month</option>
                    {state.monthsList.map((item, index) => {
                        return <option key={index} value={item} selected={state.month === item}>{item}</option>
                    })}
                </select>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <select name="day" id="day" className="form-input-field" onChange={(e) => handleStateChange(e)} required>
                    <option value="">Day</option>
                    {state.daysList.map((item, index) => {
                        return <option key={index} value={item} selected={state.day === item}>{item}</option>
                    })}
                </select>
            </div>
            <div className="col-sm-4">
                <select name="year" id="year" className="form-input-field" onChange={(e) => handleStateChange(e)} required>
                    <option value="">Year</option>
                    {state.yearsList.map((item, index) => {
                        return <option key={index} value={item} selected={state.year === item}>{item}</option>
                    })}
                </select>
            </div>
        </div>
        {/* <div className="col-lg-12 col-lg-12 col-sm-12" style={{ paddingLeft: "0px" }}>
            <DatePicker
                name={props.name} id={props.id} onChange={(e) => props.handleChange(props.questionId, props.pageId, { target: { id: props.id, value: moment(e).format('YYYY-MM-DD') } })}
                className="form-input-field"
                // format="YYYY-MM-DD"
                format="y-MM-dd"
                maxDate={new Date()}
                value={props.value === "" ? new Date() : new Date(props.value)}
            />
        </div> */}
    </React.Fragment>
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    user: { isLogin: state.authReducer.isLogin, },
    pageList: state.questionReducer.pageList,
    sectionList: state.questionReducer.sectionList,
    questions: state.questionReducer.questions,
    stateList: state.questionReducer.stateList,
    answerList: state.questionReducer.answerList,
    charityList: state.questionReducer.charityList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getChartiyList: () => dispatch(getChartiyList()),
    getStateList: () => dispatch(getStateList()),
    getQuestionList: (pageId) => dispatch(getQuestionList(pageId)),
    getFormSection: () => dispatch(getFormSection()),
    getAllAnswer: () => dispatch(getAllAnswer()),
    updateAnswerAction: (data, pageId) => dispatch(updateAnswerAction(data, pageId)),
    pageForAnswers: (data, pageId) => dispatch(pageForAnswers(data, pageId)),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsContainer)
