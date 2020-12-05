"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.theme = void 0;
var styles_1 = require("@material-ui/core/styles");
var Colors = require("@material-ui/core/colors");
exports.theme = styles_1.responsiveFontSizes(styles_1.createMuiTheme({
    palette: {
        primary: {
            main: "#755b96"
        },
        secondary: {
            main: "#6bd6dd"
        }
    },
    typography: {}
}));
exports.useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return styles_1.createStyles({
        bodyContainer: {
            marginTop: -10,
            marginBottom: -10,
            flexGrow: 1,
            display: "flex!important",
            zIndex: 1,
            minHeight: 500,
        },
        bodyPaper: {
            padding: theme.spacing(6),
            flexGrow: 1,
            flexBasis: "auto",
        },
        headerPaper: {
            zIndex: 2,
        },
        footerPaper: {
            zIndex: 2,
        },
        menuButton: (_a = {
                marginRight: theme.spacing(2)
            },
            _a[theme.breakpoints.up('md')] = {
                display: "none",
            },
            _a),
        title: {
            flexGrow: 1,
        },
        horizontalTabsLayout: (_b = {},
            _b[theme.breakpoints.down('sm')] = {
                visibility: "hidden",
            },
            _b),
        backgroundBox: {
            backgroundImage: "url('./images/background.png')",
        },
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
            _c.borderColor = Colors.common.white,
            _c.borderStyle = "solid",
            _c),
        profilePictureContainer: (_d = {},
            _d[theme.breakpoints.down('sm')] = {
                width: "200px",
                height: "200px",
                borderRadius: "100px"
            },
            _d[theme.breakpoints.up('md')] = {
                width: "300px",
                height: "300px",
                borderRadius: "150px"
            },
            _d.backgroundColor = "#ffffff4D",
            _d.marginBottom = theme.spacing(2),
            _d),
        headerContent: (_e = {
                paddingBottom: theme.spacing(4)
            },
            _e[theme.breakpoints.down('sm')] = {
                paddingTop: theme.spacing(1)
            },
            _e[theme.breakpoints.up('md')] = {
                paddingTop: theme.spacing(6)
            },
            _e),
        chipsContainer: {
            paddingTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        chipsContainerLeft: {
            paddingTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        pageTitles: {
            marginBottom: theme.spacing(6)
        },
        dividerSpacingBox: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        footerParallax: {
            flexGrow: 0,
            flexShrink: 1,
        },
        footer: {
            padding: theme.spacing(3, 2),
        },
    });
});
//# sourceMappingURL=styles.js.map