import { Action, Reducer } from 'redux';
import { KnownAction } from './actionCreators';

export interface GistsState {
	gists: any;
	loaded: boolean;
}

export const unloadedGists: GistsState = {
	gists: "",
	loaded: false
};

export const reducer: Reducer<GistsState> = (state: GistsState | undefined, incomingAction: Action): GistsState => {
	if (state === undefined) {
		return unloadedGists;
	}

	const action = incomingAction as KnownAction;

	switch (action.type) {
		case 'FETCH_GISTS':
			return {
				gists: action.gists,
				loaded: true
			};
		default:
			return state;
	}

};