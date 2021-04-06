import { configureStore, combineReducers, Reducer, AnyAction, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	createRouterMiddleware,
	initialRouterState,
	routerReducer,
} from 'connected-next-router';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { AppContext } from 'next/app';
import Router from 'next/router';
import { reducers } from './';

const combinedReducer = combineReducers({
	...reducers,
	router: routerReducer
});

export type RootState = ReturnType<typeof combinedReducer>

const routerMiddleware = createRouterMiddleware();

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		}
		if (typeof window !== 'undefined' && state?.router) {
			// preserve router value on client side navigation
			nextState.router = state.router
		}
		return nextState
	} else {
		return combinedReducer(state, action)
	}
}

const store = (initialState?: Partial<RootState>) => configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().prepend(routerMiddleware),
	preloadedState: initialState,
	devTools: true,
});

export const initStore: MakeStore<RootState> = (context) => {
	const { asPath } = (context as AppContext).ctx || Router.router || {}

	let initialState

	if (asPath) {
		initialState = {
			router: initialRouterState(asPath)
		}
	}

	return store(initialState);
}

export const wrapper = createWrapper(initStore, { debug: true })


type configureStoreType = ReturnType<typeof store>;

export type AppDispatch = configureStoreType["dispatch"];
