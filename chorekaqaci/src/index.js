import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import BreadStoreService from "./services/bread-service";
import {BreadstoreServiceProvider} from "./components/breadstore-service-context";

import store from "./store";

const breadstoreService = new BreadStoreService()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BreadstoreServiceProvider value={breadstoreService}>
                <Router>
                    <App/>
                </Router>
            </BreadstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
);
