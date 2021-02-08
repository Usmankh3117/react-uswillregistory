import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Views/Header/header";
import Footer from "./Views/Footer/footer";
// Landing Pages
// import Index from "./Views/LandingPages/Components/Index";
import AboutUs from "./Views/LandingPages/Components/AboutUs/aboutus";
import ContactUs from "./Views/LandingPages/Components/ContactUs/contactus";
import Faq from "./Views/LandingPages/Components/Faq/faq";
import LastWill from "./Views/LandingPages/Components/LastWill/lastWill";
import Privacy from "./Views/LandingPages/Components/Privacy/privacy";
import Search from "./Views/LandingPages/Components/Search/search";
// Auth Routes
// import Login from "./Views/Auth/Components/login";
// import SignUp from "./Views/Auth/Components/signup";
import ForgotPassword from "./Views/Auth/Components/forgotPassword";
import ResetPassword from "./Views/Auth/Components/resetPassword";
import VerifyAccount from "./Views/Auth/Components/verifyAccount";
import "./App.css";
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();
function App() {
  return (
    // <div>Hello WOrd</div>
    <Router history={history}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        {/* <Route
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
        /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

function Index() {
  return (
    <div>
      <h2>Index</h2>
    </div>
  );
}
function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
function SignUp() {
  return (
    <div>
      <h2>SignUp</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
export default App;
