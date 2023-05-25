import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

/**
 * Вся конфигурация в файле config/build/buildWebpackConfig
 * Сделано это для гибкости и удобства. Декомпозируем webpack.config.ts
 * При вызове этой функции мы передаем соответствующие options: mode и paths
 *
 */

// Здесь указываем пути
const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
};

// Здесь указываем режим разработки: development или production
// Если mode === 'development', то будет true, значит режим бандла development
// Далее будем получать эти данные из переменных окружения .env
// Это только для удобства
const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
});

export default config;
