import { lazy } from "react";

export const MainPageLazy = lazy(() => import("./MainPage"));

/**
 * Code Splitting
 * Есть 5 страниц, каждая по 200 кб = 1 Мб. Если пользователю нужна только
 * страница "Контакты", то ему все равно будет отдаваться весь 1 Мб. Это долго и неэффективно.
 * Для этого необходим Code Splitting. Благодаря ему для каждой страницы будет создаваться отедльный
 * js-файл.
 */

// https://react.dev/reference/react/lazy
