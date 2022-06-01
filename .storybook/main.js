const cwd = process.cwd();

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1
        },
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    'storybook-addon-apollo-client',
    'storybook-addon-jotai',
    'storybook-addon-next-router'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    // Because `tsconfig.baseUrl`
    config.resolve.modules.push(`${cwd}/src`);
    return config;
  }
};
