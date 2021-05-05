import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducers } from './';
import { useMemo } from 'react';

/*
 * Configure our redux store using redux toolkit and connected-next-router. 
 * Code patterns used from
 * https://github.com/vercel/next.js/blob/canary/examples/with-redux/store.js
 */
const rootReducer = combineReducers({
	...reducers
});

export type RootState = ReturnType<typeof rootReducer>

// Create the actual store using redux toolkit
export const createStore = (initialState?: Partial<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		devTools: true,
	});

// Get the type of our store
type StoreType = ReturnType<typeof createStore>;

// Get the type of our store's dispatch property
export type AppDispatch = StoreType["dispatch"];

let store: StoreType | undefined;

export const initializeStore = (initialState?: Partial<RootState>) => {

	let _store = store ?? createStore(initialState);

	/*
	 * This is recommended by: https://github.com/vercel/next.js/blob/canary/examples/with-redux/store.js.
	 * However, in my case, I don't want to create a new Redux store every time I go to
	 * a page that has initial data because I'm using getStaticProps to initialize data
	 * that won't change once we're on the client side.
	 * 
	 * It seems silly to me to create a whole new store when given an initial redux state, 
	 * rather than just merging them, but I don't need to do that anyway.
	 * 
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
	*/

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
