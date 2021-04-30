import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import BlogPostCard from '../../components/BlogPostCard';
import sanityClient from '../../sanityClient';

interface Props {
	post: any;
}

const Post: React.FC<Props> = (props) => {

	const { post } = props;

	return (
		<React.Fragment>
			<Layout pageTitle={post.slug} contentTitle={post.title}>
				<BlogPostCard post={post} />
			</Layout>

		</React.Fragment>
	)
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
	// Call an external API endpoint to get posts
	const posts = await sanityClient.fetch(
		`*[_type == "post"]{
				title,
				slug,
				"author": author->name,
				mainImage {
						asset->{
						_id,
						url
					}
				},
				publishedAt,	
				body
				}`
	);

	// Get the paths we want to pre-render based on posts
	const paths = posts.map((post: any) => {
		return {
			params: { slug: post.slug.current },
		}
	});

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await sanityClient.fetch(
		`*[_type == "post" && slug.current == "${params!.slug}"][0]{
				title,
				"slug": slug.current,
				"author": author->name,
				mainImage {
						asset->{
						_id,
						url
					}
				},
				publishedAt,	
				body
				}`
	);
	return { props: { post } };
}

export default Post;