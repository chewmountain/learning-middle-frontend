import { StoryFn } from "@storybook/react";
// Импортирую глобальные стили
import "app/styles/index.scss";

export const StyleDecorator = (Story: StoryFn) => <Story />;
