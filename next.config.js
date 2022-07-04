module.exports = {
	async redirects() {
		return process.env.NODE_ENV === 'development'
			? [
					{
						source: '/studio',
						destination: 'http://localhost:3333',
						permanent: true,
					},
			  ]
			: [];
	},
	async rewrites() {
		return process.env.NODE_ENV === 'development'
			? []
			: [
					{
						source: '/studio',
						destination: '/desk',
					},
					{
						source: '/desk',
						destination: 'https://studio-beryl.vercel.app/desk',
					},
			  ];
	},
};
