import { Configuration, RuleSetRule } from 'webpack';

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config: Configuration) => {
    if (config) {
      if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map(
          (rule: RuleSetRule | '...') => {
            if (rule !== '...') {
              if (
                rule.test instanceof RegExp &&
                rule.test.toString().includes('svg')
              ) {
                return {
                  ...rule,
                  exclude: /\.svg$/i,
                };
              }
            }
            return rule;
          }
        );

        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: 'convertColors',
                      params: { currentColor: true },
                    },
                  ],
                },
              },
            },
          ],
        });
      }

      return config;
    }
  },
};

// export default config;
