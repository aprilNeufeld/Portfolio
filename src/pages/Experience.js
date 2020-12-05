"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var Divider_1 = require("@material-ui/core/Divider");
var styles_1 = require("../styles");
var Experience = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    var months = ["", "January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"];
    var styles = styles_1.useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography_1.default, { variant: "h2", gutterBottom: true, className: styles.pageTitles }, "Experience"),
        user.work.map(function (work, index) { return (React.createElement(Box_1.default, { key: index },
            React.createElement(Typography_1.default, { variant: "h5" }, work.position),
            React.createElement(Typography_1.default, { variant: "h6" },
                work.company,
                "  |  ",
                months[work.start.month],
                " ",
                work.start.year,
                " - ",
                months[work.end.month],
                " ",
                work.end.year || "Present"),
            React.createElement(Box_1.default, { className: styles.dividerSpacingBox },
                React.createElement(Divider_1.default, null)))); })));
};
exports.default = Experience;
//# sourceMappingURL=Experience.js.map