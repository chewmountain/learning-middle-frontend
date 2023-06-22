import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

/**
 * Объявляем список роутов и названия для них.
 * Это нужно, если мы захотим хранить информацию о роутах в редакс, стейте.
 */

/**
 * Создание несуществующих маршрутов (404 page). Лоадер для загрузки страниц
 */
export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    // Добавили 404 страницу
    NOT_FOUND = "not_found",
}

/**
 * Описываем пути для наших роутов.
 * С помощью типа Record в качестве ключей у нас будет enum AppRoutes,
 * а значением строка (путь до роута)
 */
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    // Указываем * чтобы по любому другому, отличному от представленных выше путей, была страница 404
    [AppRoutes.NOT_FOUND]: "*",
};

/**
 * Теперь сделаем routeConfig в котором к каждому конкретному роуту (путь)
 * будем указывать компонент, который надо будет отрисовывать
 */

/**
 * В качестве ключа будет enum AppRoutes, а в качестве значения объект RouteProps
 * RouteProps - встроеный тип, в котором передаются пропсы роута:
 * путь и сам компонент
 */
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
