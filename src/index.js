"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNames = exports.paths = exports.pageComponents = void 0;
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
// Create browser history to use in the Redux store
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var history = history_1.createBrowserHistory({ basename: baseUrl });
// Get the application-wide store instance, prepopulating with state from the server where available.
var store = configureStore_1.default(history);
exports.pageComponents = [Home_1.default, Education_1.default, Experience_1.default, Projects_1.default];
exports.paths = ["/", "/education", "/experience", "/projects"];
exports.pageNames = ["Home", "Education", "Experience", "Projects"];
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(connected_react_router_1.ConnectedRouter, { history: history },
        React.createElement(App_1.default, null))), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map