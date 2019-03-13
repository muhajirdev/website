module.exports = {
  siteMetadata: {
    title: 'Muhammad Muhajir',
    siteUrl: 'https://muhajir.dev',
    shortTitle: '@muhajirdev',
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          'gatsby-remark-unwrap-images',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.js'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-tailwind-emotion-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-remove-serviceworker',
  ],
}
