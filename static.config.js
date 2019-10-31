import path from 'path'
const find = require('find');
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
          remarkPlugins: [require('@tufte-markdown/remark-figure-parser'),
                          require('@tufte-markdown/remark-figure-transformer'),
                          require('@tufte-markdown/remark-sidenotes'),
                          require('@tufte-markdown/remark-wrap-in-section'),
          ],
          rehypePlugins: [/* ... */],
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
  ],
  devServer: {
    port: 8080,
    host: '127.0.0.1',
  },
  devBasePath: 'http://127.0.0.1'
}
