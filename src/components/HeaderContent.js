"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var styles_1 = require("../styles");
var Link_1 = require("@material-ui/core/Link");
var LocationOnOutlined_1 = require("@material-ui/icons/LocationOnOutlined");
var Chip_1 = require("@material-ui/core/Chip");
var HeaderContent = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    var styles = styles_1.useStyles();
    return (React.createElement(Box_1.default, { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", className: styles.headerContent },
        React.createElement(Box_1.default, { className: styles.profilePictureContainer },
            React.createElement("img", { src: user.basics.picture, className: styles.profilePicture })),
        React.createElement(Typography_1.default, { variant: "h2" }, user.basics.name),
        React.createElement(Typography_1.default, { variant: "h5", gutterBottom: true },
            React.createElement(Link_1.default, { href: "https://gitconnected.com/" + user.basics.username, color: "secondary", className: "header-link" },
                "@",
                user.basics.username),
            " | she/her"),
        React.createElement(Typography_1.default, { variant: "body1", align: "center", gutterBottom: true }, user.basics.label),
        React.createElement(Typography_1.default, { variant: "body1", gutterBottom: true },
            React.createElement(LocationOnOutlined_1.default, null),
            " ",
            user.basics.region),
        React.createElement(Box_1.default, { className: styles.chipsContainer }, user.skills.map(function (skill, index) { return (React.createElement(Chip_1.default, { key: index, label: skill.name, color: "primary" })); }))));
};
exports.default = HeaderContent;
//# sourceMappingURL=HeaderContent.js.map