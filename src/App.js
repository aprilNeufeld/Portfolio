"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var actionCreators_1 = require("./store/actionCreators");
require("./custom.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./components/Header");
var Footer_1 = require("./components/Footer");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b;
    return core_1.createStyles({
        root: {
            marginTop: -10,
            marginBottom: -10,
            flexGrow: 1,
            display: 'flex',
            zIndex: 1,
            minHeight: 500,
        },
        paper: (_a = {
                flexGrow: 1,
                flexBasis: "auto"
            },
            _a[theme.breakpoints.down('sm')] = {
                boxShadow: "none",
            },
            _a),
        content: (_b = {
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6)
            },
            _b[theme.breakpoints.up('md')] = {
                paddingRight: "48px!important",
                paddingLeft: "48px!important",
            },
            _b),
    });
});
var App = function (props) {
    var pages = props.pages;
    var userLoaded = store_1.useApplicationState(function (state) { return state.user.loaded; });
    var gistsLoaded = store_1.useApplicationState(function (state) { return state.gists.loaded; });
    var dispatch = react_redux_1.useDispatch();
    var classes = useStyles(core_1.useTheme());
    react_1.useEffect(function () {
        if (!userLoaded) {
            dispatch(actionCreators_1.actions.fetchUser());
        }
        if (!gistsLoaded) {
            dispatch(actionCreators_1.actions.fetchGists());
        }
    }, [userLoaded, gistsLoaded, dispatch]);
    return (React.createElement(React.Fragment, null, userLoaded &&
        React.createElement(React.Fragment, null,
            React.createElement(Header_1.default, { pages: pages }),
            React.createElement(core_1.Container, { maxWidth: "lg", className: classes.root },
                React.createElement(core_1.Paper, { elevation: 2, className: classes.paper },
                    React.createElement(core_1.Container, { maxWidth: "md", className: classes.content }, pages.map(function (page) {
                        return React.createElement(react_router_dom_1.Route, { exact: true, path: page.path, key: page.path, component: page.component });
                    })))),
            React.createElement(Footer_1.default, null))));
};
exports.default = App;
//# sourceMappingURL=App.js.map