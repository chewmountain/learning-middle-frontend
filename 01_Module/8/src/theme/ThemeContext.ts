/**
 * Чтобы можно было использовать свитчер темы в любой части приложения,
 * создаем глобальный контекст.
 *
 * Для передачи контекста необходим провайдер ThemeProvider.ts
 */

import { createContext } from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

/**
 * Т.к. важно сохранять выбранную тему даже после закрытия браузера,
 * создаем переменную для localStorage
 */

export const LOCAL_STORAGE_THEME_KEY = "theme";
