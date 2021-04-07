"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var clsx_1 = require("clsx");
var router_1 = require("next/router");
var connected_next_router_1 = require("connected-next-router");
var Menu_1 = require("@material-ui/icons/Menu");
var useScrollTrigger_1 = require("@material-ui/core/useScrollTrigger");
var core_1 = require("@material-ui/core");
var store_1 = require("../store");
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b;
    return core_1.createStyles({
        root: {
            zIndex: 2,
            backgroundImage: "url('/images/background.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white',
            '& a': {
                color: 'white',
            },
        },
        tabsLayout: (_a = {},
            _a[theme.breakpoints.down('sm')] = {
                visibility: "hidden",
            },
            _a),
        menuButton: (_b = {
                marginRight: theme.spacing(2)
            },
            _b[theme.breakpoints.up('md')] = {
                display: "none",
            },
            _b),
        /*
         * When we are at the top of the screen.
         */
        appBar: {
            backgroundColor: 'transparent',
            zIndex: 10,
            boxShadow: 'none',
            color: theme.palette.grey[100],
            transition: theme.transitions.create(['background-color', 'z-index', 'box-shadow', 'color'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        /*
         * When we have scrolled down.
         */
        appBarElevated: {
            backgroundColor: 'white',
            zIndex: 40,
            boxShadow: theme.shadows[4],
            color: theme.palette.text.primary,
            transition: theme.transitions.create(['background-color', 'z-index', 'box-shadow', 'color'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    });
});
/**
 * The collection of pages that we
 * want to render.
 */
var pages = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/education',
        title: 'Education'
    },
    {
        path: '/experience',
        title: 'Experience'
    },
    {
        path: '/projects',
        title: 'My Work'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
];
/**
 * A header component that holds a navigation menu above arbitrary
 * header content. The nav menu consists of material-ui Tabs. When a Tab
 * is selected, the new path is pushed to browser history.
 *
 * While at the top of the page, the nav menu has a transparent background
 * and is overlaid atop the content.
 *
 * When the user scrolls down, the nav menu elevates above the rest of the
 * header and the page content, and it transitions to an opaque background
 * and contrasting foreground.
 */
var Header = function (props) {
    var _a;
    var children = props.children;
    var dispatch = store_1.useAppDispatch();
    var router = router_1.useRouter();
    var _b = React.useState(false), drawerOpen = _b[0], setDrawerOpen = _b[1];
    var tabValue = React.useRef(pages.findIndex(function (page) { return router.pathname === page.path; }));
    var classes = useStyles(core_1.useTheme());
    /**
     * Handles a selection of a menu item by
     * pushing the new path to browser history.
     *
     * @param newValue the tab index of the selected item.
     */
    var handleMenuSelection = function (event, newValue) {
        tabValue.current = newValue;
        dispatch(connected_next_router_1.push(pages[newValue].path));
    };
    /**
     * Handles selection of the hamburger menu
     * icon in mobile.
     */
    var handleDrawerToggle = function () {
        setDrawerOpen(!drawerOpen);
    };
    /**
     * Handles a scroll event.
     */
    var scrolled = useScrollTrigger_1.default({
        disableHysteresis: true,
        threshold: 0,
    });
    return (React.createElement(core_1.Paper, { className: classes.root },
        React.createElement(core_1.AppBar, { className: clsx_1.default(classes.appBar, (_a = {},
                _a[classes.appBarElevated] = scrolled,
                _a)) },
            React.createElement(core_1.Toolbar, null,
                React.createElement(core_1.Tabs, { value: tabValue.current, onChange: handleMenuSelection, className: classes.tabsLayout },
                    pages.map(function (page) {
                        return React.createElement(core_1.Tab, { key: page.title, label: page.title });
                    }),
                    ";"),
                React.createElement(core_1.IconButton, { edge: "end", className: classes.menuButton, color: "default", onClick: handleDrawerToggle },
                    React.createElement(Menu_1.default, null)),
                React.createElement(core_1.Drawer, { anchor: "top", open: drawerOpen, onClose: handleDrawerToggle },
                    React.createElement(core_1.Tabs, { value: tabValue.current, onChange: handleMenuSelection, orientation: "vertical" },
                        pages.map(function (page) {
                            return React.createElement(core_1.Tab, { key: page.title, label: page.title, onClick: handleDrawerToggle });
                        }),
                        ";")))),
        React.createElement(core_1.Toolbar, null),
        children));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map