module.exports = {
	async redirects() {
		return [
			{
				source: '/studio',
				destination:
					process.env.NODE_ENV === 'development'
						? 'http://localhost:3333'
						: 'https://studio-beryl.vercel.app',
				permanent: true,
			},
		];
	},
};
