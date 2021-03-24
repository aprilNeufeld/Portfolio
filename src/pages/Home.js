"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var core_1 = require("@material-ui/core");
var PageTitle_1 = require("../components/PageTitle");
var Home = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    return (React.createElement(React.Fragment, null,
        React.createElement(core_1.Box, null,
            React.createElement(PageTitle_1.default, { text: "Hi, I'm April." }),
            React.createElement(core_1.Typography, { variant: "h6" }, user.basics.summary))));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map