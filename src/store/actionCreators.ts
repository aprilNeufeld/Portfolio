import { AppThunkAction } from './';

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestUserAction {
	type: 'REQUEST_USER';
}

interface ReceiveUserAction {
	type: 'RECEIVE_USER';
	user: any;
}

interface ResetStoreAction {
	type: 'RESET_STORE';
}

interface SetTabValueAction {
	type: 'SET_TAB_VALUE';
	value: number;
}


// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = ResetStoreAction | RequestUserAction | ReceiveUserAction | SetTabValueAction;


// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actions = {
	requestUser: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
		// Only load data if it's something we don't already have (and are not already loading)
		const appState = getState();

		if (appState && appState.user.isLoading === true) {
			fetch('https://gitconnected.com/v1/portfolio/tricksterCodess')
				.then(response => response.json() as Promise<any>)
				.then(data => {
					dispatch({ type: 'RECEIVE_USER', user: data });
				});

			dispatch({ type: 'REQUEST_USER' });
		}
	},
	setTabValue: (value: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
		const appState = getState();
		if (appState.values.tabValue !== value) {
			dispatch({ type: 'SET_TAB_VALUE', value: value });
		}
	},
};
