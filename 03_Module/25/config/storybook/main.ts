import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  /**
   * Конфиг можно вынести в отдельный файл в этой же папке webpack.config.ts
   * А можно переопределять стандартные настройки прямо в конфиге сторибука,
   * как я сделал это здесь.
   *
   * Т.к. в этом проекте установлены абсолютные пути, необходимо
   * переобределить стандартные настройки вебпака сторибука и
   * явно указать путь до папки src.
   * Так же необходимо указать расширения, с которыми сторибук будет работать в
   * этих папках.
   */
  async webpackFinal(config) {
    // Переопределение путей на абсолютные
    const paths: BuildPaths = {
      build: "",
      html: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.modules?.push(paths.src);
    // Указание расширений, с которыми работать
    config.resolve?.extensions?.push(".ts", ".tsx");
    // Указание css лоадера (вынесли в отдельный файл)
    config.module?.rules?.push(buildCssLoader(true));
    // Переопределение svg лоадера
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map(
        (rule: RuleSetRule | "...") => {
          if (rule !== "..." && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }
          return rule;
        }
      );
    }
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
export default config;
