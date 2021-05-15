import { createClient } from 'next-sanity';
import { sanityConfig } from './lib/sanityConfig';

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
	...sanityConfig,
	useCdn: false,
	token: process.env.SANITY_POST_PREVIEW_TOKEN,
})

export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient);