"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actions = {
    requestUser: function () { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.user.loaded === false) {
            fetch('https://gitconnected.com/v1/portfolio/tricksterCodess')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_USER', user: data });
            });
        }
    }; },
};
//# sourceMappingURL=actionCreators.js.map