import type { GatsbyConfig } from "gatsby";
const path = require("path");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `JK's blog`,
    siteUrl: `https://www.jankasper.space`,
    favicon: "/src/assets/images/wolf.png",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-TBXQTG4S4T",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, "src/locales"),
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/wolf.png",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        assets: path.join(__dirname, "src/assets"),
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-netlify",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Jan-Kasper`,
        short_name: `JKJ`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/assets/images/wolf.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
