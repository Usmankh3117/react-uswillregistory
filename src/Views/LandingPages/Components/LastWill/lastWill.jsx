import { Wrapper } from '../../Css/lastWill';
export default function Index(props) {
    return <Wrapper>
        <section class="tab-section">
            <div class="container">
                <div class="row">
                    <div class="form-sub-heading">
                        <span>Form</span>
                    </div>
                    <h1 class="form-heading">Last Will & Testaments</h1>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="tab" role="tabpanel">
                            <Tabs />
                            <TabContent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Wrapper>
}

function Tabs(props) {
    return <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
            <a href="#form1" aria-controls="home" role="tab" data-toggle="tab">1</a>
            <h3 class="tab-lower-heading">Basic</h3>
        </li>
        <li role="presentation">
            <a href="#form2" aria-controls="profile" role="tab" data-toggle="tab">2</a>
            <h3 class="tab-lower-heading">Nomiees</h3>
        </li>
        <li role="presentation">
            <a href="#form3" aria-controls="messages" role="tab" data-toggle="tab">3</a>
            <h3 class="tab-lower-heading">Residuary</h3>
        </li>
        <li role="presentation">
            <a href="#form4" aria-controls="messages" role="tab" data-toggle="tab">4</a>
            <h3 class="tab-lower-heading">Gifts</h3>
        </li>
        <li role="presentation">
            <a href="#form5" aria-controls="messages" role="tab" data-toggle="tab">5</a>
            <h3 class="tab-lower-heading">Funeral</h3>
        </li>
        <li role="presentation">
            <a href="#form6" aria-controls="messages" role="tab" data-toggle="tab">6</a>
            <h3 class="tab-lower-heading">Provisions</h3>
        </li>
        <li role="presentation">
            <a href="#form7" aria-controls="messages" role="tab" data-toggle="tab">7</a>
            <h3 class="tab-lower-heading">Review</h3>
        </li>
    </ul>
}
function TabContent(props) {
    return <div class="tab-content tabs">
        <div role="tabpanel" class="tab-pane fade in active" id="form1">
            <div class="tabpanel-heading">
                <span class="head">Personal information related questions</span>
                <span class="count">1 of 7</span>
            </div>
            <div class="tabpanel-form">
                <div class="row">
                    <div class="col-lg-12 col-lg-12 col-sm-12">
                        <h4 class="form-inner-heading">Full Legal Name</h4>
                        <div class="col-lg-4 col-lg-4 col-sm-4" style={{ paddingLeft: "0px" } >
                            <input type="text" name="first-name" class="input-field" placeholder="First Name" />
                        </div>
                        <div class="col-lg-4 col-lg-4 col-sm-4">
                            <input type="text" name="middle-name" class="input-field" placeholder="Middle Name" />
                        </div>
                        <div class="col-lg-4 col-lg-4 col-sm-4">
                            <input type="text" name="last-name" class="input-field" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-lg-12 col-sm-12">
                        <h4 class="form-inner-heading">Email Address</h4>
                        <div class="col-lg-12 col-lg-12 col-sm-12" style={{ paddingLeft: "0px" }}>
                            <input type="text" name="email" class="input-field" placeholder="Email Address" />
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-12 col-lg-12 col-sm-12">
                        <button class="exit-btn">EXIT</button>
                        <button class="next-btn">NEXT</button>
                    </div>
                </div>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="form2">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="form3">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="form4">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="form5">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="form6">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="form7">
            <h3 style={{ textAlign: "center" }}>Comming Soon</h3>
        </div>
    </div>
}