import React, { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

/**
 * Чтобы не хардкодить значение по умолчанию, будем пытаться получить его из
 * localStorage
 */
const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

/**
 * Чтобы получить children (компонент), который будем оборачивать,
 * используем пропсы и типизацию FC (functional component)
 */

/**
 * Делаем типизацию пропсов в React 18.
 * Добавляем Props дженериком к FC
 */
type Props = {
    children?: React.ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Чтобы каждый раз не перерисовывался компонент, используем мемоизацию
    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
