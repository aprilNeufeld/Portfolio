import {
	createImageUrlBuilder,
	createPreviewSubscriptionHook,
} from 'next-sanity';
import { createClient } from 'next-sanity';


const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2021-05-12',
}

if (!config.projectId) {
	throw Error("The Project ID is not set. Check your environment variables.");
}
if (!config.dataset) {
	throw Error("The dataset name is not set. Check your environment variables.");
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Sanity production client
export const sanityClient = createClient(config);

// Sanity preview client
export const previewClient = createClient({
	...config,
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_API_KEY,
	withCredentials: true
})

// Helper function for easily switching between normal and preview clients
export const getClient = (usePreview) => {
	return usePreview ? previewClient : sanityClient;
};