module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return {
			fallback: [
				{
					source: '/studio',
					destination: '/desk',
				},
				{
					source: '/desk',
					destination:
						process.env.NODE_ENV === 'development'
							? 'http://localhost:3333/desk'
							: 'https://studio-beryl.vercel.app/desk',
				},
			],
		};
	},
};
