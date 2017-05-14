import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddBook from './containers/AddBook'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import './index.css';
import './sakura.css'
import Bookshelf from './reducers'
import initalState from './store/initialState'


//const initialState = window.__INITIAL_STATE__
const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
      Bookshelf,
      router: routerReducer
    }),
    initalState,
    composeEnhancers(applyMiddleware(...middleware))
    )

const MOUNT_NODE = document.getElementById('root')
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add' component={AddBook} />
      </div>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);

export { history }
