import { createSlice } from '@reduxjs/toolkit'
import { ProjectType } from '../shared/types';

// Define the user object so that we don't push any
// information we don't need to the redux store
export interface UserState {
	basics: {
		name: string;
		label: string;
		summary: string;
		username: string;
	};
	skills: {
		name: string;
	}[];
	projects: ProjectType[];
	interests: {
		name: string;
		keywords: string[];
	}[];
}

export const initialState: UserState = {
	basics: {
		label: "",
		name: "",
		summary: "",
		username: ""
	},
	interests: [],
	projects: [],
	skills: []
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export default userSlice.reducer