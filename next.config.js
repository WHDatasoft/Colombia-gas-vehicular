module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['colombiagasvehicular.s3.amazonaws.com']
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/es',
                permanent: true,
            },
        ]
    },
}
