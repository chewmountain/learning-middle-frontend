import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";

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
    theme: ThemeButton.CLEAR,
  },
};

export const OutlineLight: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
  // Не задаю здесь этот декоратор, т.к. глобально установил этот декоратор в DARK
  // decorators: [ThemeDecorator(Theme.DARK)],
};
