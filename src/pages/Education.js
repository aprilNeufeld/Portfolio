"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var core_1 = require("@material-ui/core");
var PageTitle_1 = require("../components/PageTitle");
var DividerWithSpacing_1 = require("../components/DividerWithSpacing");
var Education = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    return (React.createElement(React.Fragment, null,
        React.createElement(PageTitle_1.default, { text: "Education" }),
        user.education.map(function (education, index) { return (React.createElement(core_1.Box, { key: index },
            React.createElement(core_1.Typography, { variant: "h5" }, education.institution),
            React.createElement(core_1.Typography, { variant: "h6" },
                education.studyType,
                "  |  ",
                education.area),
            React.createElement(DividerWithSpacing_1.default, null))); })));
};
exports.default = Education;
//# sourceMappingURL=Education.js.map