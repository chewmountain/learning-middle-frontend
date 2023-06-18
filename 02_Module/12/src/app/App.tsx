import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

/**
 * Это корень нашего приложения и он должен быть максимально чистым.
 */

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Swtich Theme</button>
            {/**
             * Все роуты перенесли в отдельный компонент AppRouter
             */}
            <AppRouter />
        </div>
    );
};

export default App;
