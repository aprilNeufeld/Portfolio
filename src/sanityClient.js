import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "vachv01z", 
	dataset: "production", 
	apiVersion: '2021-03-31',
	useCdn: true,
});