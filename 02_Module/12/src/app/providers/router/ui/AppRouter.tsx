import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

/**
 * Так хардкодить роуты не очеьн хорошая практика.
 * Поэтому создадим конфиг, в котором будем определеять эти роуты.
 * Создаем в shared/config/routeConfig. Из него получаем все наши роуты.
 * Далее с помощью Object.values получаем все значения массива, проходимся по нему через map
 */

const AppRouter = () => {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
