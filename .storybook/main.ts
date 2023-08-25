import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    // '@storybook/addon-essentials',
    {
      name: '@storybook/addon-essentials',
      options: {
        background: false,
      },
    },
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
      config.resolve!.alias = {
        ...config.resolve?.alias,
        src: path.resolve(__dirname, '..', 'src'),
      };

      config.resolve?.extensions?.push('.ts', '.tsx');

      if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign

        config.module.rules.push({
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            // isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // MiniCssExtractPlugin.loader,
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath: string) =>
                    Boolean(resPath.includes('.module.')),
                  localIdentName: '[path][name]__[local]--[hash:base64:8]',
                },
              },
            },
            // Compiles Sass to CSS
            'sass-loader',
          ],
        });

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
