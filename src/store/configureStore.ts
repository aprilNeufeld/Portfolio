import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
	createRouterMiddleware,
	initialRouterState,
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
