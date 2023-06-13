const cwd = process.cwd();

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true
      }
    },
    'storybook-addon-jotai',
    'storybook-addon-next-router'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  staticDirs: ['../public', '../mocks'],
  webpackFinal: (config) => {
    // Because `tsconfig.baseUrl`
    config.resolve.modules.push(`${cwd}/src`);
    return config;
  }
};
