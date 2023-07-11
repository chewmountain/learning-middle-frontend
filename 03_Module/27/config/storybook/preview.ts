import type { Preview } from "@storybook/react";

import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  /**
   * Здесь указываем все декораторы, которые будем использовать
   * в сторибуке: глобальные стили, темы, роутеры и пр.
   * https://storybook.js.org/docs/react/writing-stories/decorators
   */
  decorators: [
    // Декоратор с глобальными стилями
    StyleDecorator,
    /**
     * Декоратор с темами.
     * Установил глобально в DARK, т.к. DARK здесь приоритетная тема.
     * Декораторы можно передавать глобально,
     * а можно передавать в каждый сторис в массив декораторов.
     * См. прим. Button.stories.tsx
     */
    ThemeDecorator(Theme.DARK),
    // Декоратор роутов (чтобы сторибук мог обрабатывать роуты)
    RouterDecorator,
  ],
};

export default preview;
