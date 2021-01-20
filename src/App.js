import { Router, Route, Switch } from "react-router-dom";
import Header from "./Views/Header/header";
import Footer from "./Views/Footer/footer";
import Index from "./Views/LandingPages/Components/Index";
import './App.css';
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();
function App() {
  return (
    // <div>Hello WOrd</div>
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" name="Index" component={Index} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
