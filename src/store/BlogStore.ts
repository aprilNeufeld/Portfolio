import { Action, Reducer } from 'redux';
import { KnownAction } from './actionCreators';

export interface BlogState {
	posts: any;
	loaded: boolean;
}

export const unloadedBlog: BlogState = {
	posts: "",
	loaded: false
};

export const reducer: Reducer<BlogState> = (state: BlogState | undefined, incomingAction: Action): BlogState => {
	if (state === undefined) {
		return unloadedBlog;
	}

	const action = incomingAction as KnownAction;

	switch (action.type) {
		case 'FETCH_BLOG_POSTS':
			return {
				posts: action.posts,
				loaded: true
			};
		default:
			return state;
	}

};