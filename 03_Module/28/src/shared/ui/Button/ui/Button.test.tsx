import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

/**
 * Настроили абсолютные импорты для jest.
 *
 * Для тестирования реакт компонетов используем react testing library
 * и jest-dom.
 * Не забываем настраивать babel для тестирования реакт приложений.
 * Нужно установить и добавить в конфиг babel:
 * ["@babel/preset-react", { runtime: "automatic" }],
 * https://jestjs.io/docs/getting-started#using-babel
 * https://jestjs.io/docs/tutorial-react
 * Для обработки css модулей:
 * https://jestjs.io/docs/webpack#mocking-css-modules
 *
 */

describe("Button", () => {
  test("Button render", async () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(await screen.findByText("TEST")).toBeInTheDocument();
  });

  test("Button with class 'clear'", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    /**
     * screen.debug();
     * В консоль выведет верстку (дебажнет)
     */
  });
});
