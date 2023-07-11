import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
  args: {
    children: "Press me",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {},
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};

export const OutlineLight: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  // Не задаю здесь этот декоратор, т.к. глобально установил этот декоратор в DARK
  // decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundThemeInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Square: Story = {
  args: {
    children: "<",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeM: Story = {
  args: {
    children: "<",
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: "<",
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: "<",
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SizeS: Story = {
  args: {
    size: ButtonSize.S,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SizeM: Story = {
  args: {
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SizeL: Story = {
  args: {
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SizeXL: Story = {
  args: {
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};
