import React from 'react';
import { connect } from 'react-redux';
import { Route ,withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { loginStatus } from '../../actions/index';
import Login from './Login';
import SignUp from '../SignUp/SignUp';
// import Header from './../parts/Header';
import App from '../../App';

class Authenticate extends React.Component {

componentDidMount() {
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token');
    this.props.loginStatus(username, token, this.props.history)
  }
  

  render() {
      return(
          <div>
              {/* <Header {...this.props} {...this.state} /> */}

              <Container>
                  {this.props.isLoggedIn === true ?
                      <div>
                          <Route exact path="/" render={props =>
                              <App {...props} 
                              // isLoggedIn={this.state.isLoggedIn}
                              
                              />
                          }/>
                      </div>
                      :
                      <div>
                        <Route exact path="/login" render={props => 
                            <Login {...this.state} {...props} />
                        }/>
                        <Route exact path='/signup' render={props => <SignUp {...this.state} {...props}/>}/>
                      </div>
                  }
              </Container>
          </div>
      )
  }
}


const MapStateToProps = ({ usersReducer: state }) => {
console.log(state)
  return {
      user: {
        username: state.username,
        token: state.token
      },
      isLoggedIn: state.isLoggedIn,
      loggingIn: state.loggingIn,
      error: state.error,
  }
}
export default withRouter(connect(MapStateToProps, { loginStatus })(Authenticate));