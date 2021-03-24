"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var store_1 = require("../store");
var LocationOnOutlined_1 = require("@material-ui/icons/LocationOnOutlined");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b, _c;
    return core_1.createStyles({
        root: (_a = {
                paddingBottom: theme.spacing(4)
            },
            _a[theme.breakpoints.down('sm')] = {
                paddingTop: theme.spacing(1)
            },
            _a[theme.breakpoints.up('md')] = {
                paddingTop: theme.spacing(6)
            },
            _a),
        profilePictureContainer: (_b = {},
            _b[theme.breakpoints.down('sm')] = {
                width: "200px",
                height: "200px",
                borderRadius: "100px"
            },
            _b[theme.breakpoints.up('md')] = {
                width: "300px",
                height: "300px",
                borderRadius: "150px"
            },
            _b.backgroundColor = "#ffffff4D",
            _b.marginBottom = theme.spacing(2),
            _b),
        profilePicture: (_c = {},
            _c[theme.breakpoints.down('sm')] = {
                width: "200px",
                height: "200px",
                borderRadius: "100px"
            },
            _c[theme.breakpoints.up('md')] = {
                width: "300px",
                height: "300px",
                borderRadius: "150px"
            },
            _c.border = 5,
            _c.borderColor = core_1.colors.common.white,
            _c.borderStyle = "solid",
            _c),
        chipsContainer: {
            paddingTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
    });
});
var HeaderContent = function () {
    var user = store_1.useApplicationState(function (state) { return state.user.user; });
    var classes = useStyles(core_1.useTheme());
    return (React.createElement(core_1.Box, { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", className: classes.root },
        React.createElement(core_1.Box, { className: classes.profilePictureContainer },
            React.createElement("img", { src: user.basics.picture, className: classes.profilePicture })),
        React.createElement(core_1.Typography, { variant: "h2" }, user.basics.name),
        React.createElement(core_1.Typography, { variant: "h5", gutterBottom: true },
            React.createElement(core_1.Link, { href: "https://gitconnected.com/" + user.basics.username, color: "secondary", className: "header-link" },
                "@",
                user.basics.username),
            " | she/her"),
        React.createElement(core_1.Typography, { variant: "body1", align: "center", gutterBottom: true }, user.basics.label),
        React.createElement(core_1.Typography, { variant: "body1", gutterBottom: true },
            React.createElement(LocationOnOutlined_1.default, null),
            " ",
            user.basics.region),
        React.createElement(core_1.Box, { className: classes.chipsContainer }, user.skills.map(function (skill, index) { return (React.createElement(core_1.Chip, { key: index, label: skill.name, color: "primary" })); }))));
};
exports.default = HeaderContent;
//# sourceMappingURL=HeaderContent.js.map