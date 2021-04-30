import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import sanityClient from '../sanityClient';

interface BlogState {
	posts: any;
	pending: boolean;
	loaded: boolean;
}

const initialState: BlogState = {
	posts: "",
	pending: false,
	loaded: false
};

export const fetchBlogPosts = createAsyncThunk(
	'blog/fetch', async (arg, thunkApi) => {
		const response = await sanityClient.fetch(
			`*[_type == "post"]{
				title,
				slug,
				"author": author->name,
				mainImage {
						asset->{
						_id,
						url
					}
				},
				publishedAt,	
				body
				}`
		);
		return {
			posts: response
		} as BlogState
	}
)

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {	},
	extraReducers: (builder) => {
		builder.addCase(fetchBlogPosts.pending, (state, action) => {
			state.pending = true;
			state.loaded = false;
		});
		builder.addCase(fetchBlogPosts.fulfilled, (state, action) => {
			state.posts = action.payload.posts;
			state.pending = false;
			state.loaded = true;
		})
	}
})

export default blogSlice.reducer