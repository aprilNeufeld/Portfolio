import { Action, Reducer } from 'redux';
import { KnownAction } from './actionCreators';

export interface ValuesState {
	tabValue: number
}

export const unloadedState: ValuesState = {
	tabValue: 0
};

export const reducer: Reducer<ValuesState> = (state: ValuesState | undefined, incomingAction: Action): ValuesState => {
	if (state === undefined) {
		return unloadedState;
	}

	const action = incomingAction as KnownAction;

	switch (action.type) {
		case 'SET_TAB_VALUE':
			return {
				tabValue: action.value
			};
		default:
			return state;
	}

};