import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Header from "./Views/Header/header";
import Footer from "./Views/Footer/footer";
// Auth Routes
import Login from "./Views/Auth/Components/login";
import SignUp from "./Views/Auth/Components/signup";
import ForgotPassword from "./Views/Auth/Components/forgotPassword";
import ResetPassword from "./Views/Auth/Components/resetPassword";
import VerifyAccount from "./Views/Auth/Components/verifyAccount";
// Landing Pages
import Index from "./Views/LandingPages/Components/Index";
import "./App.css";
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

export default function App() {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route exact path="/" name="Index" component={Index} />
                {/* Auth Routes */}
                <Route exact path="/login" name="Login" component={Login} />
                <Route exact path="/signup" name="SignUp" component={SignUp} />
                <Route
                    exact
                    path="/forgot-password"
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <Route
                    exact
                    path="/reset-password"
                    name="ResetPassword"
                    component={ResetPassword}
                />
                <Route
                    exact
                    path="/verify/:id"
                    name="VerifyAccount"
                    component={VerifyAccount}
                />
            </Switch>
            <Footer />
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
          </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}