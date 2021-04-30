import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '@octokit/request';

interface GistsState {
	gists: any;
	pending: boolean;
	loaded: boolean;
}

const initialState: GistsState = {
	gists: "",
	pending: false,
	loaded: false
};

export const fetchGists = createAsyncThunk(
	'gists/fetch', async (arg, thunkApi) => {
		const response = await request({
			method: "GET",
			url: "/users/tricksterCodess/gists",
			username: "tricksterCodess"
		});
		return {
			gists: response.data
		} as GistsState
	}
)

const gistsSlice = createSlice({
	name: 'gists',
	initialState,
	reducers: {	},
	extraReducers: (builder) => {
		builder.addCase(fetchGists.pending, (state, action) => {
			state.pending = true;
			state.loaded = false;
		});
		builder.addCase(fetchGists.fulfilled, (state, action) => {
			state.gists = action.payload.gists;
			state.pending = false;
			state.loaded = true;
		})
	}
})

export default gistsSlice.reducer