import { Action, Reducer } from 'redux';
import { KnownAction } from './actionCreators';

export interface UserState {
	user: any;
	loaded: boolean;
}

export const unloadedUser: UserState = {
	user: "",
	loaded: false
};

export const reducer: Reducer<UserState> = (state: UserState | undefined, incomingAction: Action): UserState => {
	if (state === undefined) {
		return unloadedUser;
	}

	const action = incomingAction as KnownAction;

	switch (action.type) {
		case 'RECEIVE_USER':
			return {
				user: action.user,
				loaded: true
			};
		default:
			return state;
	}

};