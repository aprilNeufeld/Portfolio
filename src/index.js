"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.css");
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var history_1 = require("history");
var configureStore_1 = require("./store/configureStore");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
var Home_1 = require("./pages/Home");
var Education_1 = require("./pages/Education");
var Experience_1 = require("./pages/Experience");
var Projects_1 = require("./pages/Projects");
var styles_1 = require("./styles");
var core_1 = require("@material-ui/core");
// Create browser history to use in the Redux store
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var history = history_1.createBrowserHistory({ basename: baseUrl });
// Get the application-wide store instance, prepopulating with state from the server where available.
var store = configureStore_1.default(history);
var pages = [
    {
        component: Home_1.default,
        path: '/',
        title: 'Home'
    },
    {
        component: Education_1.default,
        path: '/education',
        title: 'Education'
    },
    {
        component: Experience_1.default,
        path: '/experience',
        title: 'Experience'
    },
    {
        component: Projects_1.default,
        path: '/projects',
        title: 'Projects'
    },
];
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(connected_react_router_1.ConnectedRouter, { history: history },
        React.createElement(core_1.ThemeProvider, { theme: styles_1.theme },
            React.createElement(App_1.default, { pages: pages })))), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map