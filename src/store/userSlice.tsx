import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface UserState {
	user: any;
	loaded: boolean;
}

const initialState: UserState = {
	user: "",
	loaded: false
};

export const fetchUserData = createAsyncThunk(
	'user/fetch', async (arg, thunkApi) => {
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
			state.loaded = false;
		});
		builder.addCase(fetchUserData.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.loaded = true;
		})
	}
})

export default userSlice.reducer