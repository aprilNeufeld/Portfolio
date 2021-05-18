import type { NextApiRequest, NextApiResponse } from 'next'
import { postQuery } from '../post/[slug]';
import { SanityClient } from '@sanity/client';
import { getClient } from '../../lib/sanity';
import { groq } from 'next-sanity';

export default async (request: NextApiRequest, response: NextApiResponse) => {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (request.query.secret !== process.env.SANITY_PREVIEW_SECRET || !request.query.slug) {
        return response.status(401).json({ message: 'Invalid token: ' + request.query.secret })
    }

    const sanityClient: SanityClient = getClient(true);
   
    // Fetch the headless CMS to check if the provided `slug` exists
    // getPostBySlug would implement the required fetching logic to the headless CMS
    const post = await sanityClient.fetch(postQuery, { slug: request.query.slug });

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!post) {
        return response.status(401).json({ message: 'No post data for this slug' })
    }

    // Enable Preview Mode by setting the cookies
    response.setPreviewData({})

    // Redirect to the path from the fetched post
    // We don't redirect to request.query.slug as that might lead to open redirect vulnerabilities
    response.redirect('/post/' + post.slug)
}