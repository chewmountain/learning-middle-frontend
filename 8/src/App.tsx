import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import "./styles/index.scss";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
    /**
     * Для смены темы будем использовать кнопку и хук useState,
     * но все это будем передавать через контектс theme/ThemeContext.ts + theme/ThemeProvider.tsx
     * и с помощью кастомного хука useTheme
     */
    const { theme, toggleTheme } = useTheme();

    /**
     * Делаем работу с классами более комфортной с помощью classNames
     * https://github.com/JedWatson/classnames
     * Можно установить сразу пакет, а можно сделать такую утилиту самостоятельно.
     */

    /**
     * Здесь получим такие классы:
     * app dark another-class active
     */

    return (
        <div
            className={classNames("app", { active: true, selected: false }, [
                theme,
                "another-class",
            ])}
        >
            <Link to={"/"}>Главная страница</Link>
            <br />
            <Link to={"/about"}>О нас</Link>
            <br />

            <button onClick={toggleTheme}>Swtich Theme</button>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />} />
                    <Route path="/about" element={<AboutPageLazy />} />
                </Routes>
            </Suspense>

            <Counter />
        </div>
    );
};

export default App;
