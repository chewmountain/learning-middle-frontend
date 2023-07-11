import { StoryFn } from "@storybook/react";
// Импортирую глобальные стили
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story: StoryFn) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
