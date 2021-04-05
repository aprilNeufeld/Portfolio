import { applyMiddleware, combineReducers, compose, createStore, Reducer, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { createRouterMiddleware, routerReducer, initialRouterState } from 'connected-next-router';
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper';
import { ApplicationState, reducers } from './';
import Router from 'next/router';
import { AppContext } from 'next/app'
import { KnownAction } from './actionCreators';

const appReducer = combineReducers({
	...reducers,
	router: routerReducer
});

const rootReducer: Reducer<ApplicationState> = (
	state: any,
	action: AnyAction | KnownAction
): ReturnType<typeof appReducer> => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...(action as AnyAction).payload, // apply delta from hydration
		}
		if (typeof window !== 'undefined' && state?.router) {
			// preserve router value on client side navigation
			nextState.router = state.router
		}
		return nextState
	}
	else {
		return appReducer(state, action)
	}
}

const middleware = [
	thunk,
	createRouterMiddleware()
];

export const initStore: MakeStore<ApplicationState, AnyAction | KnownAction> = (context) => {
	const enhancers = [];
	const windowIfDefined = typeof window === 'undefined' ? null : window as any;
	if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
		enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
	}
	const { asPath } = (context as AppContext).ctx || Router.router || {}
	let initialState

	if (asPath) {
		initialState = {
			router: initialRouterState(asPath)
		}
	}

	return createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware), ...enhancers)
	);
}

export const wrapper = createWrapper(initStore, { debug: true })
