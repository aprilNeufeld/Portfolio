"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var styles_1 = require("../styles");
var Divider_1 = require("@material-ui/core/Divider");
var Chip_1 = require("@material-ui/core/Chip");
var Projects = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    var styles = styles_1.useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography_1.default, { variant: "h2", gutterBottom: true, className: styles.pageTitles }, "Projects"),
        user.projects.map(function (project, index) { return (React.createElement(Box_1.default, { key: index },
            React.createElement(Typography_1.default, { variant: "h5", gutterBottom: true }, project.name),
            React.createElement(Typography_1.default, { variant: "h6" }, project.summary),
            React.createElement(Box_1.default, { className: styles.chipsContainerLeft }, __spreadArrays(project.languages, project.libraries).map(function (item, index) { return (React.createElement(Chip_1.default, { key: index, color: "secondary", label: item, variant: "outlined" })); })),
            React.createElement(Box_1.default, { className: styles.dividerSpacingBox },
                React.createElement(Divider_1.default, null)))); })));
};
exports.default = Projects;
//# sourceMappingURL=Projects.js.map