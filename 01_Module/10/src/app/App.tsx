import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

const App = () => {
    const { theme, toggleTheme } = useTheme();
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
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
