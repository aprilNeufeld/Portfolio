const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
          : 'https://studio-beryl.vercel.app/index.html',
}

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
}