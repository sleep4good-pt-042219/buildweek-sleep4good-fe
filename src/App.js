import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

// will need to import components and set up Routes

// import HotelList from './components/HotelList/HotelList';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Home />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
