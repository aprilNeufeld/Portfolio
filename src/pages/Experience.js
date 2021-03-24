"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var core_1 = require("@material-ui/core");
var PageTitle_1 = require("../components/PageTitle");
var DividerWithSpacing_1 = require("../components/DividerWithSpacing");
var months = ["", "January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October", "November", "December"];
var Experience = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    return (React.createElement(React.Fragment, null,
        React.createElement(PageTitle_1.default, { text: "Experience" }),
        user.work.map(function (work, index) { return (React.createElement(core_1.Box, { key: index },
            React.createElement(core_1.Typography, { variant: "h5" }, work.position),
            React.createElement(core_1.Typography, { variant: "h6" },
                work.company,
                "  |  ",
                months[work.start.month],
                " ",
                work.start.year,
                " - ",
                months[work.end.month],
                " ",
                work.end.year || "Present"),
            React.createElement(DividerWithSpacing_1.default, null))); })));
};
exports.default = Experience;
//# sourceMappingURL=Experience.js.map