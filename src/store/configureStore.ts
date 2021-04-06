import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit';
import {
	createRouterMiddleware,
	initialRouterState,
    LOCATION_CHANGE,
	routerReducer,
} from 'connected-next-router';
import Router from 'next/router';
import { reducers } from './';
import { useMemo } from 'react';


const rootReducer = combineReducers({
	...reducers,
	router: routerReducer
});

export type RootState = ReturnType<typeof rootReducer>

/*
const reducer: Reducer<RootState> = (state, action) => {
	if (action.type === LOCATION_CHANGE && state) {
		console.log("change location");
		console.log("state.router: " + JSON.stringify(state.router, null, 1));
		console.log("action.payload: " + JSON.stringify(action.payload, null, 1));

		const nextState = {
			...state, // use previous state
		}
		if (typeof window !== 'undefined' && state?.router) {
			console.log("client side nav");
			// preserve router value on client side navigation
			console.log("nextState.router: " + JSON.stringify(nextState.router, null, 1));
			nextState.router = state.router
		}
		return nextState
	} else {
		return rootReducer(state, action)
	}
}
*/

const routerMiddleware = createRouterMiddleware();

export const createStore = (initialState?: Partial<RootState>) =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().prepend(routerMiddleware),
		preloadedState: initialState,
		devTools: true,
	});

type StoreType = ReturnType<typeof createStore>;

export type AppDispatch = StoreType["dispatch"];

let store: StoreType | undefined;

export const initializeStore = (initialState?: Partial<RootState>) => {

	let _store = store ?? createStore(initialState)
	const { asPath } = Router.router || {}

	if (asPath) {
		initialState = {
			...initialState,
			router: initialRouterState(asPath)
		}
	}

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (initialState && store) {
		_store = initializeStore({
			...store.getState(),
			...initialState,
		})
		// Reset the current store
		store = undefined
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store

	// Create the store once in the client
	if (!store) {
		store = _store
	}

	return _store;
}

export function useStore(initialState?: RootState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}
