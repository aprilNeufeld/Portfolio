import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'connected-next-router';
import { reducers } from './';

const rootReducer = combineReducers({
	...reducers,
	router: routerReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
})

export type AppDispatch = typeof store.dispatch