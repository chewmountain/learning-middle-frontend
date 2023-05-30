import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

/**
 * В эту функцию передаем аргументом функции пути {paths}, который вытаскиваем
 * из файла buildWebpackConfig.ts аргумента options.
 * Таким образом пути в самой конфигурации мы явно нигде не указываем, а
 * только на верхнем уровне в webpack.config
 */

export function buildPlugins({
    paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        /**
         * Для генерации index.html. В качестве шаблона указываем наш html файл
         * https://github.com/jantimon/html-webpack-plugin#options
         */
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        /** Прогресс бар при сборке проекта */
        new webpack.ProgressPlugin(),
    ];
}
