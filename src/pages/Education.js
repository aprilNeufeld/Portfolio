"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var styles_1 = require("../styles");
var Divider_1 = require("@material-ui/core/Divider");
var Education = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    var styles = styles_1.useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography_1.default, { variant: "h2", gutterBottom: true, className: styles.pageTitles }, "Education"),
        user.education.map(function (education, index) { return (React.createElement(Box_1.default, { key: index },
            React.createElement(Typography_1.default, { variant: "h5" }, education.institution),
            React.createElement(Typography_1.default, { variant: "h6" },
                education.studyType,
                "  |  ",
                education.area),
            React.createElement(Box_1.default, { className: styles.dividerSpacingBox },
                React.createElement(Divider_1.default, null)))); })));
};
exports.default = Education;
//# sourceMappingURL=Education.js.map