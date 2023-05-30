import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import "./styles/index.scss";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { useTheme } from "./theme/useTheme";

const App = () => {
    /**
     * Для смены темы будем использовать кнопку и хук useState,
     * но все это будем передавать через контектс theme/ThemeContext.ts + theme/ThemeProvider.tsx
     * и с помощью кастомного хука useTheme
     */
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={"/"}>Главная страница</Link>
            <br />
            <Link to={"/about"}>О нас</Link>
            <br />

            <button onClick={toggleTheme}>Swtich Theme</button>

            {/* Компонент Suspence должен обязательно 
            использоваться вместе с React.lazy()
            Он оборачивает компонент и будет отображать, напр., информацию о загрузке. */}
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
