import { Action, Reducer } from 'redux';
import { KnownAction } from './actionCreators';

export interface UserState {
	user: any;
	isLoading: boolean;
}

export const unloadedUser: UserState = {
	user: "",
	isLoading: true
};

export const reducer: Reducer<UserState> = (state: UserState | undefined, incomingAction: Action): UserState => {
	if (state === undefined) {
		return unloadedUser;
	}

	const action = incomingAction as KnownAction;

	switch (action.type) {
		case 'REQUEST_USER':
			return {
				user: state.user,
				isLoading: true
			};
		case 'RECEIVE_USER':
			return {
				user: action.user,
				isLoading: false
			};
		default:
			return state;
	}

};