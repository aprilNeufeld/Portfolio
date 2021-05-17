import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
	createClient,
	createImageUrlBuilder,
	createPreviewSubscriptionHook,
    ProjectConfig
} from 'next-sanity';

export const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const SANITY_API_KEY = process.env.SANITY_API_KEY;

if (!SANITY_PROJECT_ID) {
	throw Error("The Project ID is not set. Check your environment variables.");
}
if (!SANITY_DATASET) {
	throw Error("The dataset name is not set. Check your environment variables.");
}

const config: ProjectConfig = {
	dataset: SANITY_DATASET,
	projectId: SANITY_PROJECT_ID,
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Create the normal client
export const sanityClient = createClient({
	...config,
	apiVersion: '2021-03-31',
	useCdn: true,
});

// Create the preview client
export const previewClient = createClient({
	...config,
	apiVersion: '2021-03-31',
	useCdn: false,
	token: process.env.SANITY_API_KEY,
})

export const getClient = (usePreview: boolean | undefined) => (usePreview ? previewClient : sanityClient);