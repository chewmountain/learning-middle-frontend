import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

/**
 * Здесь будет вся конфигурация webpack.config
 * Это сделано для декомпозиции, гибкости и удобства.
 */

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        /**
         * devtool inline-source-map
         * https://webpack.js.org/guides/development/
         * отслеживаем изменения в файлах, а так же указывает
         * на ошибки в файлах/коде (отслеживает ошибки)
         * Кроме этого, нужно выбрать режим разработки
         * https://webpack.js.org/guides/development/#using-watch-mode
         * 1. webpack's Watch Mode - самый простой способ отслеживать файлы
         * 2. webpack-dev-server - самый распространенный и универсальный способ (рек.)
         * 3. webpack-dev-middleware - посложнее (для более продвинутого отслеживания и отлаживания)
         * После установки dev server'а нужно его настроить в конфиге.
         * Для этого будет создан отдельный файл buildDevServer.ts
         * И с помощью скрипта npx webpack serve --open запускаем вебпак дев сервер
         * В мое случае флаг --open необязательно передавать, т.к. в самом конфиге buildDevServer указан флаг open: true
         */

        // Если в режиме разработке, то добавляем sourc map'ы и запускаем дев сервер
        // Иначе все это отключаем.
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name][contenthash:8].js",
            path: paths.build,
            clean: true,
        },
    };
}
