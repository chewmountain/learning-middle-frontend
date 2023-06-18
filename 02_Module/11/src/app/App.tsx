import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

/**
 * Это корень нашего приложения и он должен быть максимально чистым.
 */

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
            {/**
             * Все роуты перенесли в отдельный компонент AppRouter
             */}
            <AppRouter />
        </div>
    );
};

export default App;
