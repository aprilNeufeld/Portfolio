"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        title: {
            marginBottom: theme.spacing(6)
        },
    });
});
var PageTitle = function (props) {
    var text = props.text;
    var classes = useStyles(core_1.useTheme());
    return (React.createElement(React.Fragment, null,
        React.createElement(core_1.Typography, { variant: "h3", gutterBottom: true, className: classes.title }, text)));
};
exports.default = PageTitle;
//# sourceMappingURL=PageTitle.js.map