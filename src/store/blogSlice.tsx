import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity';

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
		const sanityClient = getClient(false);
		const response = await sanityClient.fetch(
			groq`*[_type == "post"]{
				title,
				slug,
				"author": author->name,
				mainImage,
				publishedAt,	
				body[0]
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
	reducers: {},
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