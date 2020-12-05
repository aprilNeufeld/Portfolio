"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var styles_1 = require("../styles");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var Home = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    var styles = styles_1.useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement(Box_1.default, null,
            React.createElement(Typography_1.default, { variant: "h2", gutterBottom: true, className: styles.pageTitles },
                "Hi, I'm ",
                user.basics.name,
                "."),
            React.createElement(Typography_1.default, { variant: "h6" }, user.basics.summary))));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map