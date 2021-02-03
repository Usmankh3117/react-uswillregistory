import { Router, Route, Switch } from "react-router-dom";
import Header from "./Views/Header/header";
import Footer from "./Views/Footer/footer";
import Index from "./Views/LandingPages/Components/Index";
import Login from "./Views/Auth/Components/login";
import SignUp from "./Views/Auth/Components/signup";
import './App.css';
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();
function App() {
  return (
    // <div>Hello WOrd</div>
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" name="Index" component={Index} />
        <Route path="/login" name="Login" component={Login} />
        <Route path="/signup" name="SignUp" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
