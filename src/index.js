import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import {logger} from './logger';
import {postsReducer, usersReducer} from './reducers'

import './index.css';
import * as serviceWorker from './serviceWorker';
import Authenticate from './components/Authenticate/Authenticate';
import App from './App';

const store = createStore(combineReducers({postsReducer, usersReducer}), applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
