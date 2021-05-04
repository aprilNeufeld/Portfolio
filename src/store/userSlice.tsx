import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
	user: any;
}

const initialState: UserState = {
	user: "",
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {	},
})

export default userSlice.reducer