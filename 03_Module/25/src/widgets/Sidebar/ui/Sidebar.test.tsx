import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import renderWithTranslation from "shared/lib/renderWithTranslation/renderWithTranslation";

/**
 * Чтобы jest понимал файлы svg, нужно в конфиге указать маппер для них.
 * В свойстве moduleNameMapper создаем путь до мока.
 *
 * Для компонентов с переводами создан специальный тестовый конфиг i18n
 * и компонент для рендера таких компонентов в тестах
 */

describe("Sidebar", () => {
  test("Sidebar render", () => {
    /**
     * render(<Sidebar />);
     * Так бы мы писали рендер компонента в тесте, если бы
     * он был без i18n
     */
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Sidebar toggle", () => {
    renderWithTranslation(<Sidebar />);
    /**
     * Получаем кнопку из компонента по тестовому id.
     * Для этого в самом компоненте указываем атрибут data-testid элементу
     */
    const toggleBtn = screen.getByTestId("sidebar-toggle-btn");
    /**
     * Проверяем, что такой элемент есть в верстке (хотя не обязательно)
     */
    expect(screen.getByTestId("sidebar-toggle-btn")).toBeInTheDocument();
    /**
     * С помощью события fireEvent эмулируем нажатие на кнопке
     */
    fireEvent.click(toggleBtn);
    /**
     * Ожидаем, что теперь на обертке Sidebar'а появяился ожидаемый нами класс
     */
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    screen.debug();
  });
});
