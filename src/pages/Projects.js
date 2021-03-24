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
var core_1 = require("@material-ui/core");
var PageTitle_1 = require("../components/PageTitle");
var DividerWithSpacing_1 = require("../components/DividerWithSpacing");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        chipsContainerLeft: {
            paddingTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
    });
});
var Projects = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    var classes = useStyles(core_1.useTheme());
    return (React.createElement(React.Fragment, null,
        React.createElement(PageTitle_1.default, { text: 'Projects' }),
        user.projects.map(function (project, index) { return (React.createElement(core_1.Box, { key: index },
            React.createElement(core_1.Typography, { variant: "h5", gutterBottom: true },
                React.createElement(core_1.Link, { href: project.githubUrl }, project.name)),
            React.createElement(core_1.Typography, { variant: "body1" }, project.summary),
            React.createElement(core_1.Box, { className: classes.chipsContainerLeft }, __spreadArrays(project.languages, project.libraries).map(function (item, index) { return (React.createElement(core_1.Chip, { key: index, color: "secondary", label: item, variant: "outlined" })); })),
            React.createElement(DividerWithSpacing_1.default, null))); })));
};
exports.default = Projects;
//# sourceMappingURL=Projects.js.map