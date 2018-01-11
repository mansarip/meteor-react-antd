import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from '/imports/reducers';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Main from './views/main';

import SampleModal from './modals/sample-modal';

const history = createHistory();
let store;

if (process.env.NODE_ENV === 'development') {
    store = createStore(combineReducers({
        ...reducers,
        router: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
else {
    store = createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        })
    );
}

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={Main} />
                        <SampleModal />
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}