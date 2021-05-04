import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducers } from './';
import { useMemo } from 'react';

const rootReducer = combineReducers({
	...reducers
});

export type RootState = ReturnType<typeof rootReducer>

export const createStore = (initialState?: Partial<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		devTools: true,
	});

type StoreType = ReturnType<typeof createStore>;

export type AppDispatch = StoreType["dispatch"];

let store: StoreType | undefined;

export const initializeStore = (initialState?: Partial<RootState>) => {

	let _store = store ?? createStore(initialState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (initialState && store) {
		_store = createStore({
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
	return store;
}
