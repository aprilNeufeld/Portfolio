"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.unloadedUser = void 0;
exports.unloadedUser = {
    user: "",
    loaded: false
};
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return exports.unloadedUser;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'FETCH_USER':
            return {
                user: action.user,
                loaded: true
            };
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=UserStore.js.map