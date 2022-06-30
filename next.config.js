
const STUDIO_REWRITE = {
	source: '/studio/:path*',
	destination:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3333/:path*'
			: 'https://studio-beryl.vercel.app/index.html',
	basePath: 'false',
}

module.exports = {
	rewrites: () => [STUDIO_REWRITE],
}
