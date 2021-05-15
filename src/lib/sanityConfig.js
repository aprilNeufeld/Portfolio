﻿
export const sanityConfig = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.SANITY_PROJECT_ID,
	apiVersion: '2021-03-31',
	useCdn: process.env.NODE_ENV === 'production',
}