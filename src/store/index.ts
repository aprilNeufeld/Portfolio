import * as UserStore from './UserStore';
import * as GistsStore from './GistsStore';
import * as BlogStore from './BlogStore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RouterState } from 'connected-next-router/types';
import { ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { KnownAction } from './actionCreators';

// The top-level state object
export interface ApplicationState {
    router: RouterState;
    user: UserStore.UserState;
    gists: GistsStore.GistsState;
    blog: BlogStore.BlogState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    user: UserStore.reducer,
    gists: GistsStore.reducer,
    blog: BlogStore.reducer,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export type AppThunkAction<TAction> = {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}

export type ThunkCreator<R = Promise<any>> =
    ActionCreator<ThunkAction<R, ApplicationState, KnownAction, AnyAction>>;

export const useApplicationState: TypedUseSelectorHook<ApplicationState> = useSelector;