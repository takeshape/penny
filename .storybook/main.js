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
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public', '../mocks'],
  webpackFinal: (config) => {
    // Because `tsconfig.baseUrl`
    config.resolve.modules.push(`${cwd}/src`);
    return config;
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  }
};
