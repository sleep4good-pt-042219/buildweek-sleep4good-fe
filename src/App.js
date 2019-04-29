
import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// will need to import components and set up Routes

// import HotelList from './components/HotelList/HotelList';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';


class App extends React.Component() {
  render() {
    return (
     <Router> 
        <div className="App">
        {/* <Route exact path="/" component={Home}/> */}
        <Route exact path="/login" component={Login} />
        {/* <PrivateRoute exact path="/hotels" component={HotelList} /> */}
      </div>
     </Router>
    );
  }
}

export default App;