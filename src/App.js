import React from "react";
import { Router, Route, Switch } from "react-router-dom";
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
    // <div>Hello WOrd</div>
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" name="Index" component={Index} />
        {/* Auth Routes */}
        <Route path="/login" name="Login" component={Login} />
        <Route path="/signup" name="SignUp" component={SignUp} />
        <Route
          path="/forgot-password"
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Route
          path="/reset-password"
          name="ResetPassword"
          component={ResetPassword}
        />
        <Route
          path="/verify-account"
          name="VerifyAccount"
          component={VerifyAccount}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
