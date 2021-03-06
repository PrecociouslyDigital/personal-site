import path from 'path'
export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    return [];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-mdx'),
      {
        includePaths: [], // Additional include paths on top of the default jsLoader paths
        extensions: ['.md', '.mdx'], // NOTE: these are the default extensions
        mdxOptions: {
          remarkPlugins: [require('remark-toc'), require('remark-math')],
          rehypePlugins: [require('rehype-slug'), require('rehype-prism'), require('rehype-katex')],
        },
      },
    ],
    require.resolve('react-static-plugin-typescript'),
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('src','pages'),
        extensions: ["tsx", "mdx"],
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-less'),
  ],
  devServer: {
    port: 8080,
    host: '100.115.92.203',
  },
  maxThreads: 16,
  devBasePath: 'http://100.115.92.203:8080'
}
