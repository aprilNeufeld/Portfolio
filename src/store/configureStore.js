"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.initializeStore = exports.createStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var connected_next_router_1 = require("connected-next-router");
var router_1 = require("next/router");
var _1 = require("./");
var react_1 = require("react");
var rootReducer = toolkit_1.combineReducers(__assign(__assign({}, _1.reducers), { router: connected_next_router_1.routerReducer }));
var routerMiddleware = connected_next_router_1.createRouterMiddleware();
exports.createStore = function (initialState) {
    return toolkit_1.configureStore({
        reducer: rootReducer,
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware().prepend(routerMiddleware);
        },
        preloadedState: initialState,
        devTools: true,
    });
};
var store;
exports.initializeStore = function (initialState) {
    var _store = store !== null && store !== void 0 ? store : exports.createStore(initialState);
    var asPath = (router_1.default.router || {}).asPath;
    if (asPath) {
        initialState = __assign(__assign({}, initialState), { router: connected_next_router_1.initialRouterState(asPath) });
    }
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (initialState && store) {
        _store = exports.initializeStore(__assign(__assign({}, store.getState()), initialState));
        // Reset the current store
        store = undefined;
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined')
        return _store;
    // Create the store once in the client
    if (!store) {
        store = _store;
    }
    return _store;
};
function useStore(initialState) {
    var store = react_1.useMemo(function () { return exports.initializeStore(initialState); }, [initialState]);
    return store;
}
exports.useStore = useStore;
//# sourceMappingURL=configureStore.js.map