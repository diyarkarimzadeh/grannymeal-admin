module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/waiting',
          permanent: true,
        },
      ]
    },
  }