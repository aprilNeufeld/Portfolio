﻿import {
	createImageUrlBuilder,
	createPreviewSubscriptionHook,
} from 'next-sanity';
import { sanityConfig } from './sanityConfig';

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(sanityConfig).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig)

export const SANITY_PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET;