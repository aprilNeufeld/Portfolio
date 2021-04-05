webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ANeufeld_source_repos_Portfolio_ClientApp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-next-router */ "./node_modules/connected-next-router/es/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\ANeufeld\\source\\repos\\Portfolio\\ClientApp\\src\\components\\Header.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["createStyles"])({
    root: {
      zIndex: 2
    },
    tabsLayout: {
      [theme.breakpoints.down('sm')]: {
        visibility: "hidden"
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: "none"
      }
    },

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
        duration: theme.transitions.duration.leavingScreen
      })
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
        duration: theme.transitions.duration.enteringScreen
      })
    }
  });
});
/**
 * Holds information about a particular
 * page to be rendered, including the component,
 * its name, and its path.
 */

/**
 * The collection of pages that we 
 * want to render.
 */
var pages = [{
  path: '/',
  title: 'Home'
}, {
  path: '/education',
  title: 'Education'
}, {
  path: '/experience',
  title: 'Experience'
}, {
  path: '/projects',
  title: 'My Work'
}, {
  path: '/blog',
  title: 'Blog'
}];

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
var Header = function Header(props) {
  _s();

  var children = props.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(C_Users_ANeufeld_source_repos_Portfolio_ClientApp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      drawerOpen = _React$useState2[0],
      setDrawerOpen = _React$useState2[1];

  var tabValue = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](pages.findIndex(function (page) {
    return router.asPath === page.path;
  }));
  var classes = useStyles(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["useTheme"])());
  /**
   * Handles a selection of a menu item by
   * pushing the new path to browser history.
   * 
   * @param newValue the tab index of the selected item.
   */

  var handleMenuSelection = function handleMenuSelection(event, newValue) {
    tabValue.current = newValue;
    dispatch(Object(connected_next_router__WEBPACK_IMPORTED_MODULE_5__["push"])({
      pathname: pages[newValue].path
    }));
  };
  /**
   * Handles selection of the hamburger menu
   * icon in mobile.
   */


  var handleDrawerToggle = function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  };
  /**
   * Handles a scroll event.
   */


  var scrolled = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_8__["default"])({
    disableHysteresis: true,
    threshold: 0
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Paper"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 3
    }
  }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_7__["Parallax"], {
    bgImage: '/images/background.png',
    blur: 1,
    strength: -200,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["AppBar"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.appBar, {
      [classes.appBarElevated]: scrolled
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
    value: tabValue.current,
    onChange: handleMenuSelection,
    className: classes.tabsLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, pages.map(function (page) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      key: page.title,
      label: page.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }
    });
  }), ";"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    edge: "end",
    className: classes.menuButton,
    color: "default",
    onClick: handleDrawerToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 8
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Drawer"], {
    anchor: "top",
    open: drawerOpen,
    onClose: handleDrawerToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
    value: tabValue.current,
    onChange: handleMenuSelection,
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 8
    }
  }, pages.map(function (page) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
      key: page.title,
      label: page.title,
      onClick: handleDrawerToggle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 10
      }
    });
  }), ";")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }), children));
};

_s(Header, "mRxNjBciNSHiKHNqcS4OIF4V1vs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_9__["useTheme"], _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiekluZGV4IiwidGFic0xheW91dCIsImJyZWFrcG9pbnRzIiwiZG93biIsInZpc2liaWxpdHkiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidXAiLCJkaXNwbGF5IiwiYXBwQmFyIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiY29sb3IiLCJwYWxldHRlIiwiZ3JleSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwiYXBwQmFyRWxldmF0ZWQiLCJzaGFkb3dzIiwidGV4dCIsInByaW1hcnkiLCJlYXNlT3V0IiwiZW50ZXJpbmdTY3JlZW4iLCJwYWdlcyIsInBhdGgiLCJ0aXRsZSIsIkhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiUmVhY3QiLCJkcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsInRhYlZhbHVlIiwiZmluZEluZGV4IiwicGFnZSIsImFzUGF0aCIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImhhbmRsZU1lbnVTZWxlY3Rpb24iLCJldmVudCIsIm5ld1ZhbHVlIiwiY3VycmVudCIsInB1c2giLCJwYXRobmFtZSIsImhhbmRsZURyYXdlclRvZ2dsZSIsInNjcm9sbGVkIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiY2xzeCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBR0MsV0FBTyxFQUFFYyxrQkFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQyxzREFBRDtBQUNDLFNBQUssRUFBRVosUUFBUSxDQUFDUyxPQURqQjtBQUVDLFlBQVEsRUFBRUgsbUJBRlg7QUFHQyxlQUFXLEVBQUMsVUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0VuQixLQUFLLENBQUMrQixHQUFOLENBQVUsVUFBQ2hCLElBQUQ7QUFBQSxXQUNWLE1BQUMscURBQUQ7QUFDQyxTQUFHLEVBQUVBLElBQUksQ0FBQ2IsS0FEWDtBQUVDLFdBQUssRUFBRWEsSUFBSSxDQUFDYixLQUZiO0FBR0MsYUFBTyxFQUFFdUIsa0JBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBVixDQUxGLE1BTEQsQ0FyQkQsQ0FMRCxDQUxELEVBb0RDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBERCxFQXFERXBCLFFBckRGLENBREQsQ0FERDtBQTREQSxDQW5HRDs7R0FBTUYsTTtVQUdVSSxxRCxFQUNFRSx1RCxFQUtEM0MsUyxFQUFVb0QsMEQsRUF5QlRTLDBFOzs7S0FsQ1p4QixNO0FBcUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmYwODEyNTk3N2Y4YzMxM2U1ZjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHB1c2ggfSBmcm9tICdjb25uZWN0ZWQtbmV4dC1yb3V0ZXInXHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyJztcclxuaW1wb3J0IHtcclxuXHRUYWJzLFxyXG5cdFRhYixcclxuXHRBcHBCYXIsXHJcblx0VG9vbGJhcixcclxuXHRJY29uQnV0dG9uLFxyXG5cdERyYXdlcixcclxuXHRQYXBlcixcclxuXHRtYWtlU3R5bGVzLFxyXG5cdFRoZW1lLFxyXG5cdGNyZWF0ZVN0eWxlcyxcclxuXHR1c2VUaGVtZVxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4ge1xyXG5cdHJldHVybiBjcmVhdGVTdHlsZXMoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHR6SW5kZXg6IDIsXHJcblx0XHR9LFxyXG5cdFx0dGFic0xheW91dDoge1xyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdG1lbnVCdXR0b246IHtcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHQvKlxyXG5cdFx0ICogV2hlbiB3ZSBhcmUgYXQgdGhlIHRvcCBvZiB0aGUgc2NyZWVuLlxyXG5cdFx0ICovXHJcblx0XHRhcHBCYXI6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG5cdFx0XHR6SW5kZXg6IDEwLFxyXG5cdFx0XHRib3hTaGFkb3c6ICdub25lJyxcclxuXHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdLFxyXG5cdFx0XHR0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXHJcblx0XHRcdFx0WydiYWNrZ3JvdW5kLWNvbG9yJywgJ3otaW5kZXgnLCAnYm94LXNoYWRvdycsICdjb2xvciddLCB7XHJcblx0XHRcdFx0ZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcblx0XHRcdFx0ZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcblx0XHRcdH0pLFxyXG5cdFx0fSxcclxuXHRcdC8qXHJcblx0XHQgKiBXaGVuIHdlIGhhdmUgc2Nyb2xsZWQgZG93bi5cclxuXHRcdCAqL1xyXG5cdFx0YXBwQmFyRWxldmF0ZWQ6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG5cdFx0XHR6SW5kZXg6IDQwLFxyXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNF0sXHJcblx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuXHRcdFx0dHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFxyXG5cdFx0XHRcdFsnYmFja2dyb3VuZC1jb2xvcicsICd6LWluZGV4JywgJ2JveC1zaGFkb3cnLCAnY29sb3InXSwge1xyXG5cdFx0XHRcdGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcblx0XHRcdFx0ZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG5cdFx0XHR9KSxcclxuXHRcdH0sXHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGFydGljdWxhclxyXG4gKiBwYWdlIHRvIGJlIHJlbmRlcmVkLCBpbmNsdWRpbmcgdGhlIGNvbXBvbmVudCxcclxuICogaXRzIG5hbWUsIGFuZCBpdHMgcGF0aC5cclxuICovXHJcbnR5cGUgUGFnZSA9IHtcclxuXHR0aXRsZTogc3RyaW5nLFxyXG5cdHBhdGg6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGNvbGxlY3Rpb24gb2YgcGFnZXMgdGhhdCB3ZSBcclxuICogd2FudCB0byByZW5kZXIuXHJcbiAqL1xyXG5jb25zdCBwYWdlczogUGFnZVtdID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6ICcvJyxcclxuXHRcdHRpdGxlOiAnSG9tZSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZWR1Y2F0aW9uJyxcclxuXHRcdHRpdGxlOiAnRWR1Y2F0aW9uJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9leHBlcmllbmNlJyxcclxuXHRcdHRpdGxlOiAnRXhwZXJpZW5jZSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvcHJvamVjdHMnLFxyXG5cdFx0dGl0bGU6ICdNeSBXb3JrJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9ibG9nJyxcclxuXHRcdHRpdGxlOiAnQmxvZydcclxuXHR9LFxyXG5dXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG4vKipcclxuICogQSBoZWFkZXIgY29tcG9uZW50IHRoYXQgaG9sZHMgYSBuYXZpZ2F0aW9uIG1lbnUgYWJvdmUgYXJiaXRyYXJ5XHJcbiAqIGhlYWRlciBjb250ZW50LiBUaGUgbmF2IG1lbnUgY29uc2lzdHMgb2YgbWF0ZXJpYWwtdWkgVGFicy4gV2hlbiBhIFRhYlxyXG4gKiBpcyBzZWxlY3RlZCwgdGhlIG5ldyBwYXRoIGlzIHB1c2hlZCB0byBicm93c2VyIGhpc3RvcnkuXHJcbiAqIFxyXG4gKiBXaGlsZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCB0aGUgbmF2IG1lbnUgaGFzIGEgdHJhbnNwYXJlbnQgYmFja2dyb3VuZFxyXG4gKiBhbmQgaXMgb3ZlcmxhaWQgYXRvcCB0aGUgY29udGVudC5cclxuICogXHJcbiAqIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyBkb3duLCB0aGUgbmF2IG1lbnUgZWxldmF0ZXMgYWJvdmUgdGhlIHJlc3Qgb2YgdGhlIFxyXG4gKiBoZWFkZXIgYW5kIHRoZSBwYWdlIGNvbnRlbnQsIGFuZCBpdCB0cmFuc2l0aW9ucyB0byBhbiBvcGFxdWUgYmFja2dyb3VuZFxyXG4gKiBhbmQgY29udHJhc3RpbmcgZm9yZWdyb3VuZC5cclxuICovXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG5cdGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHRjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdGFiVmFsdWUgPSBSZWFjdC51c2VSZWYoXHJcblx0XHRwYWdlcy5maW5kSW5kZXgocGFnZSA9PiByb3V0ZXIuYXNQYXRoID09PSBwYWdlLnBhdGgpXHJcblx0KTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHVzZVRoZW1lKCkpO1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIGEgc2VsZWN0aW9uIG9mIGEgbWVudSBpdGVtIGJ5XHJcblx0ICogcHVzaGluZyB0aGUgbmV3IHBhdGggdG8gYnJvd3NlciBoaXN0b3J5LlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBuZXdWYWx1ZSB0aGUgdGFiIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBpdGVtLlxyXG5cdCAqL1xyXG5cdGNvbnN0IGhhbmRsZU1lbnVTZWxlY3Rpb24gPVxyXG5cdFx0KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuXHRcdFx0dGFiVmFsdWUuY3VycmVudCA9IG5ld1ZhbHVlO1xyXG5cdFx0XHRkaXNwYXRjaChwdXNoKHsgcGF0aG5hbWU6IHBhZ2VzW25ld1ZhbHVlXS5wYXRoIH0pKTtcclxuXHRcdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgc2VsZWN0aW9uIG9mIHRoZSBoYW1idXJnZXIgbWVudVxyXG5cdCAqIGljb24gaW4gbW9iaWxlLlxyXG5cdCAqL1xyXG5cdGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcclxuXHRcdHNldERyYXdlck9wZW4oIWRyYXdlck9wZW4pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgYSBzY3JvbGwgZXZlbnQuXHJcblx0ICovXHJcblx0Y29uc3Qgc2Nyb2xsZWQgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuXHRcdGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG5cdFx0dGhyZXNob2xkOiAwLFxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0PFBhcmFsbGF4XHJcblx0XHRcdFx0YmdJbWFnZT17Jy9pbWFnZXMvYmFja2dyb3VuZC5wbmcnfVxyXG5cdFx0XHRcdGJsdXI9ezF9XHJcblx0XHRcdFx0c3RyZW5ndGg9ey0yMDB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8QXBwQmFyXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5hcHBCYXIsIHtcclxuXHRcdFx0XHRcdFx0W2NsYXNzZXMuYXBwQmFyRWxldmF0ZWRdOiBzY3JvbGxlZFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRvb2xiYXI+XHJcblx0XHRcdFx0XHRcdDxUYWJzXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RhYlZhbHVlLmN1cnJlbnR9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZU1lbnVTZWxlY3Rpb259XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRhYnNMYXlvdXR9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7cGFnZXMubWFwKChwYWdlOiBQYWdlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3BhZ2UudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtwYWdlLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQpfTtcclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHRcdFx0XHRcdFx0PEljb25CdXR0b25cclxuXHRcdFx0XHRcdFx0XHRlZGdlPVwiZW5kXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cImRlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxNZW51SWNvbiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRcdFx0XHRhbmNob3I9XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHRcdG9wZW49e2RyYXdlck9wZW59XHJcblx0XHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRhYnNcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0YWJWYWx1ZS5jdXJyZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZU1lbnVTZWxlY3Rpb259XHJcblx0XHRcdFx0XHRcdFx0XHRvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFnZXMubWFwKChwYWdlOiBQYWdlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwYWdlLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtwYWdlLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdCl9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYnM+XHJcblx0XHRcdFx0XHRcdDwvRHJhd2VyPlxyXG5cdFx0XHRcdFx0PC9Ub29sYmFyPlxyXG5cdFx0XHRcdDwvQXBwQmFyPlxyXG5cdFx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L1BhcmFsbGF4PlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9