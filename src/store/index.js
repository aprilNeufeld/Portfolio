"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPayloadType = exports.useApplicationState = exports.useAppDispatch = exports.reducers = void 0;
var react_redux_1 = require("react-redux");
var User = require("./userSlice");
var Gists = require("./gistsSlice");
var Blog = require("./blogSlice");
exports.reducers = {
    user: User.default,
    gists: Gists.default,
    blog: Blog.default,
};
// Use throughout your app instead of plain `useDispatch` and `useSelector`
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
exports.useApplicationState = react_redux_1.useSelector;
function withPayloadType() {
    return function (t) { return ({ payload: t }); };
}
exports.withPayloadType = withPayloadType;
//# sourceMappingURL=index.js.map