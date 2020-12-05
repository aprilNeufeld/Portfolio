"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var actionCreators_1 = require("./store/actionCreators");
var react_router_dom_1 = require("react-router-dom");
require("./custom.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var react_router_dom_2 = require("react-router-dom");
var Header_1 = require("./components/Header");
var Footer_1 = require("./components/Footer");
var _1 = require(".");
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("./styles");
var Container_1 = require("@material-ui/core/Container");
var Paper_1 = require("@material-ui/core/Paper");
var App = function () {
    var isLoading = store_1.useApplicationState(function (state) { return state.user.isLoading; });
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    var styles = styles_2.useStyles();
    react_1.useEffect(function () {
        dispatch(actionCreators_1.actions.requestUser());
        dispatch(actionCreators_1.actions.setTabValue(_1.paths.indexOf(history.location.pathname)));
    }, 
    // eslint-disable-next-line
    []);
    if (isLoading) {
        return React.createElement("div", null);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(styles_1.ThemeProvider, { theme: styles_2.theme },
            React.createElement(Header_1.default, null),
            React.createElement(Container_1.default, { maxWidth: "md", className: styles.bodyContainer },
                React.createElement(Paper_1.default, { elevation: 2, className: styles.bodyPaper }, _1.paths.map(function (path, index) {
                    return React.createElement(react_router_dom_2.Route, { exact: true, path: path, key: path, component: _1.pageComponents[index] });
                }))),
            React.createElement(Footer_1.default, null))));
};
exports.default = App;
//# sourceMappingURL=App.js.map