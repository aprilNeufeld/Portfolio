"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplicationState = exports.reducers = void 0;
var UserStore = require("./UserStore");
var react_redux_1 = require("react-redux");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    user: UserStore.reducer,
};
exports.useApplicationState = react_redux_1.useSelector;
//# sourceMappingURL=index.js.map