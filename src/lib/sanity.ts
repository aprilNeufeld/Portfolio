import { SanityClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createClient, createImageUrlBuilder, createPreviewSubscriptionHook, ProjectConfig } from 'next-sanity';

const API_VERSION = '2021-03-25';

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw Error('The Project ID is not set. Check your environment variables.');
}
if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw Error('The Dataset name is not set. Check your environment variables.');
}

const config: ProjectConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
};

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Create the normal client
export const sanityClient: SanityClient = createClient({
  ...config,
  apiVersion: API_VERSION,
  useCdn: true,
});

// Create the preview client
export const previewClient: SanityClient = createClient({
  ...config,
  apiVersion: API_VERSION,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  //withCredentials: true,
});

export const getClient = (usePreview: boolean) => (usePreview ? previewClient : sanityClient);
