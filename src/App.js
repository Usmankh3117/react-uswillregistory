import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Views/Header/header";
import Footer from "./Views/Footer/footer";
// Landing Pages
import Index from "./Views/LandingPages/Components/Index";
import AboutUs from "./Views/LandingPages/Components/AboutUs/aboutus";
import ContactUs from "./Views/LandingPages/Components/ContactUs/contactus";
import Faq from "./Views/LandingPages/Components/Faq/faq";
import LastWill from "./Views/LandingPages/Components/LastWill/lastWill";
import Privacy from "./Views/LandingPages/Components/Privacy/privacy";
import Search from "./Views/LandingPages/Components/Search/search";
// Private Routes
import Profile from "./Views/Profile/Components/profileContainer";
import EditProfile from "./Views/Profile/Components/editProfile";
import QuestionsForm from "./Views/QuestionsForm/Components/questionContainer";
// Auth Routes
import Login from "./Views/Auth/Components/login";
import SignUp from "./Views/Auth/Components/signup";
import ForgotPassword from "./Views/Auth/Components/forgotPassword";
import ResetPassword from "./Views/Auth/Components/resetPassword";
import VerifyAccount from "./Views/Auth/Components/verifyAccount";
import "./App.css";
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Header history={history}/>
      <Switch>
        <Route exact path="/" name="Index" component={Index} />
        <Route exact path="/contact-us" name="ContactUs" component={ContactUs} />
        <Route exact path="/about-us" name="AboutUs" component={AboutUs} />
        <Route exact path="/faq" name="Faq" component={Faq} />
        <Route exact path="/last-will" name="LastWill" component={LastWill} />
        <Route exact path="/privacy" name="Privacy" component={Privacy} />
        <Route exact path="/search" name="Search" component={Search} />
        <Route exact path="/login" name="Login" component={Login} />
        <Route exact path="/signup" name="SignUp" component={SignUp} />
        <Route path="/forgot-password"name="ForgotPassword" component={ForgotPassword}/>
        <Route path="/reset-password"name="ResetPassword" component={ResetPassword}/>
        <Route path="/verify/:id" name="VerifyAccount" component={VerifyAccount}/>
        <Route exact path="/profile" name="Profile" component={Profile} />
        <Route exact path="/edit-profile" name="EditProfile" component={EditProfile} />
        <Route exact path="/form" name="QuestionsForm" component={QuestionsForm}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
