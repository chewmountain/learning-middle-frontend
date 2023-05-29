import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

/**
 * Чтобы не хардкодить порт, мод и т.д. используем переменные окружения (env).
 * https://webpack.js.org/guides/environment-variables/
 * Теперь весь конфиг мы возвращаем в стрелочной функции (см. ниже).
 * А переменные окружения (env) принимаем аргументом.
 * Теперь сначала пытаемся получить переменные окружения, а затем, если их нет,
 * используем данные по умолчанию, которые написаны ниже.
 * Для аргумента env создали интерфейс BuildEnv.
 * env получаем из скриптов, по флагу --env (см. package.json)
 */
export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.ts"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
    };

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
