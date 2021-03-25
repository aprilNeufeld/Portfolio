"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
var request_1 = require("@octokit/request");
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actions = {
    fetchUser: function () { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.user.loaded === false) {
            fetch('https://gitconnected.com/v1/portfolio/tricksterCodess')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'FETCH_USER', user: data });
            });
        }
    }; },
    fetchGists: function () { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        console.log("in fetchGists()");
        if (appState && appState.gists.loaded === false) {
            request_1.request({
                method: "GET",
                url: "/users/tricksterCodess/gists",
                username: "tricksterCodess"
            }).then(function (response) {
                dispatch({ type: 'FETCH_GISTS', gists: response.data });
            });
        }
    }; },
};
//# sourceMappingURL=actionCreators.js.map