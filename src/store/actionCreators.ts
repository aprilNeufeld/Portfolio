import { request } from '@octokit/request';
import { AppThunkAction } from './';

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface FetchUserAction {
	type: 'FETCH_USER';
	user: any;
}

interface FetchGistsAction {
	type: 'FETCH_GISTS';
	gists: any;
}

interface ResetStoreAction {
	type: 'RESET_STORE';
}


// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = FetchUserAction | ResetStoreAction | FetchGistsAction;


// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actions = {
	fetchUser: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
		// Only load data if it's something we don't already have (and are not already loading)
		const appState = getState();

		if (appState && appState.user.loaded === false) {
			fetch('https://gitconnected.com/v1/portfolio/tricksterCodess')
				.then(response => response.json() as Promise<any>)
				.then(data => {
					dispatch({ type: 'FETCH_USER', user: data });
				});
		}
	},
	fetchGists: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
		// Only load data if it's something we don't already have (and are not already loading)
		const appState = getState();
		if (appState && appState.gists.loaded === false) {
			request({
				method: "GET",
				url: "/users/tricksterCodess/gists",
				username: "tricksterCodess"
			}).then(response => {
					dispatch({ type: 'FETCH_GISTS', gists: response.data });
				});
		}
	},
};
