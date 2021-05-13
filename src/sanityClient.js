import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "vachv01z", 
	dataset: "production", 
	apiVersion: '2021-03-31',
	token: process.env.SANITY_POST_PREVIEW_TOKEN,
	useCdn: true,
});