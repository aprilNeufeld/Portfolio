import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit';
import {
	createRouterMiddleware,
	initialRouterState,
    LOCATION_CHANGE,
	routerReducer,
} from 'connected-next-router';
import Router from 'next/router';
import React from 'react';
import { reducers } from './';


const rootReducer = combineReducers({
	...reducers,
	router: routerReducer
});

export type RootState = ReturnType<typeof rootReducer>

// Using next-redux-wrapper's initStore
const reducer: Reducer<RootState> = (state, action) => {
	if (action.type === LOCATION_CHANGE) {
		console.log("change location");
		const nextState = {
			...state, // use previous state
		}
		if (typeof window !== 'undefined' && state?.router) {
			// preserve router value on client side navigation
			nextState.router = state.router
		}
		return nextState
	} else {
		return rootReducer(state, action)
	}
}

const routerMiddleware = createRouterMiddleware();

export const createStore = (initialState?: Partial<RootState>) =>
	configureStore({
		reducer: reducer,
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
	const store = React.useMemo(() => initializeStore(initialState), [initialState])
	return store
}
