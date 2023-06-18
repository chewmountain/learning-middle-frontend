import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

/**
 * Это корень нашего приложения и он должен быть максимально чистым.
 */

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            {/** Все роуты теперь в одном компоненте AppRouter, который, в свою очередь,
             * конфигурируем через /src/shared/config/routerConfig
             */}
            <AppRouter />
        </div>
    );
};

export default App;
