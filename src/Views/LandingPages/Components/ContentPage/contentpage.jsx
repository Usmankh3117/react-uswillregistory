import React, { useEffect, useState } from 'react';
import { Wrapper } from "../../Css/privacy";
import { connect } from 'react-redux';
import { ClearApiByNameAction } from "../../../ApiCallStatus/Actions/action";
import { getSlugDetail, getSlugPages } from "../../Apicalls/landing";
import Image from '../../../Common/Components/image';

function ContentPage(props) {
    const [slugDetail, setSlugDetail] = useState({});
    useEffect(() => {
        if (props.apiCallStatus.apiCallFor === "getSlugPages" && props.apiCallStatus.isCompleted && !props.apiCallStatus.isFailed && props.slugList.length > 0) {
            let index = props.slugList.findIndex(x => x.slug === props.match.params.id);
            if (index !== -1) {
                let detail = props.slugList[index];
                setSlugDetail(detail);
                props.getSlugDetail(detail.code);
            }
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
        }

    }, [props])
    useEffect(() => {
        if (props.slugList.length > 0) {
            let index = props.slugList.findIndex(x => x.slug === props.match.params.id);
            if (index !== -1) {
                let detail = props.slugList[index];
                props.getSlugDetail(detail.code);
            }
            props.ClearApiByNameAction(props.apiCallStatus.apiCallFor);
        }
    }, [])
    return <Wrapper className="pp-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-6">
                        {props.apiCallStatus.isStarted.indexOf("getSlugDetail") !== -1 || props.apiCallStatus.isStarted.indexOf("getSlugPages") !== -1 ?
                            <div className="loader-img text-center">
                                <Image style={{ width: "46px" }} name="Spinner-1s-200px.gif" alt='Loader' />
                            </div>
                            : slugDetail && slugDetail.title ? <React.Fragment>
                                <h1 className="top-heading"><span className="bold">{slugDetail && slugDetail.title ? slugDetail.title : ""}</span> </h1>
                                <div dangerouslySetInnerHTML={{ __html: slugDetail && slugDetail.content ? slugDetail.content : "" }} />
                            </React.Fragment> : <div className="error-template right-div">
                                    <h1>
                                        Oops!</h1>
                                    <h2>
                                        404 Not Found</h2>
                                    <div className="error-details">
                                        Sorry, an error has occured, Requested page not found!
                </div>
                                </div>}
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
}

const mapStateToProps = (state, ownProps) => ({
    apiCallStatus: state.apicallStatusReducer,
    slugDetail: state.landingReducer.slugDetail,
    slugList: state.landingReducer.slugList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getSlugPages: () => dispatch(getSlugPages()),
    getSlugDetail: (slugCode) => dispatch(getSlugDetail(slugCode)),
    ClearApiByNameAction: (apiName) => dispatch(ClearApiByNameAction(apiName)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentPage)