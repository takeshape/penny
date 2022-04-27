module.exports = {
  stories: [
    '../src/**/__stories__/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    'builder': '@storybook/builder-webpack5'
  },
  staticDirs: ['../public']
}
