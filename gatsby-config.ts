import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new-react-challenge`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@styles": "src/styles",
          "@hooks": "src/hooks",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
  ],
};

export default config;
