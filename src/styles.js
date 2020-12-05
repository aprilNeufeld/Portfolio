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
    var _a, _b, _c, _d, _e, _f, _g;
    return styles_1.createStyles({
        bodyContainer: {
            marginTop: -10,
            marginBottom: -10,
            flexGrow: 1,
            display: "flex!important",
            zIndex: 1,
            minHeight: 500,
        },
        bodyPaper: (_a = {
                flexGrow: 1,
                flexBasis: "auto"
            },
            _a[theme.breakpoints.down('sm')] = {
                boxShadow: "none",
            },
            _a),
        secondBodyContainer: (_b = {
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6)
            },
            _b[theme.breakpoints.up('md')] = {
                paddingRight: "48px!important",
                paddingLeft: "48px!important",
            },
            _b),
        headerPaper: {
            zIndex: 2,
        },
        footerPaper: {
            zIndex: 2,
        },
        menuButton: (_c = {
                marginRight: theme.spacing(2)
            },
            _c[theme.breakpoints.up('md')] = {
                display: "none",
            },
            _c),
        title: {
            flexGrow: 1,
        },
        horizontalTabsLayout: (_d = {},
            _d[theme.breakpoints.down('sm')] = {
                visibility: "hidden",
            },
            _d),
        backgroundBox: {
            backgroundImage: "url('./images/background.png')",
        },
        profilePicture: (_e = {},
            _e[theme.breakpoints.down('sm')] = {
                width: "200px",
                height: "200px",
                borderRadius: "100px"
            },
            _e[theme.breakpoints.up('md')] = {
                width: "300px",
                height: "300px",
                borderRadius: "150px"
            },
            _e.border = 5,
            _e.borderColor = Colors.common.white,
            _e.borderStyle = "solid",
            _e),
        profilePictureContainer: (_f = {},
            _f[theme.breakpoints.down('sm')] = {
                width: "200px",
                height: "200px",
                borderRadius: "100px"
            },
            _f[theme.breakpoints.up('md')] = {
                width: "300px",
                height: "300px",
                borderRadius: "150px"
            },
            _f.backgroundColor = "#ffffff4D",
            _f.marginBottom = theme.spacing(2),
            _f),
        headerContent: (_g = {
                paddingBottom: theme.spacing(4)
            },
            _g[theme.breakpoints.down('sm')] = {
                paddingTop: theme.spacing(1)
            },
            _g[theme.breakpoints.up('md')] = {
                paddingTop: theme.spacing(6)
            },
            _g),
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