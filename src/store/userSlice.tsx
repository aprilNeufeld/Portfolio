import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface UserState {
	user: any;
	pending: boolean;
	loaded: boolean;
}

const initialState: UserState = {
	user: "",
	pending: false,
	loaded: false
};

export const fetchUserData = createAsyncThunk(
	'user/fetch', async (arg, thunkApi) => {
		console.log("Fetching user data from async thunk");
		const response = await fetch(
			'https://gitconnected.com/v1/portfolio/tricksterCodess'
		);
		const data = await response.json();
		return {
			user: data
		} as UserState
	}
)

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserData.pending, (state, action) => {
			state.pending = true;
			state.loaded = false;
		});
		builder.addCase(fetchUserData.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.pending = false;
			state.loaded = true;
		})
	}
})

export default userSlice.reducer