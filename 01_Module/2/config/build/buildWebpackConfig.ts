import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";

/**
 * Здесь будет вся конфигурация webpack.config
 * Это сделано для декомпозиции, гибкости и удобства.
 */

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    /**
     * Деструктуризируем объект с опциями, чтобы использовать
     * внутри этой функции.
     * paths указаны в const paths webpack.config.ts
     * mode указан в файле типов config/build/types/config.ts -> BuildOptions
     */
    const { mode, paths } = options;

    return {
        /** Режим разработки | Режим продакшн */
        mode,
        /** Точка входа (исходный гл. файл js / ts / jsx / tsx) */
        entry: paths.entry,
        module: {
            /**
             * Правила. Здесь конфигурируем лоадеры, которые обрабатывают файлы, которые
             * выходят за рамки javascript: png, ts, css и т.д.
             */
            rules: buildLoaders(),
        },
        /** resolve - разрешения.
         * Здесь указываем расширения для тех файлов, в которых при инпутах
         * мы не будем указывать раширения:
         * import Component from './component'
         * т.е. просто ./component, а не ./component.ts
         */
        resolve: buildResolvers(),
        /**
         * Выходная точка: куда будут собираться все файлы
         * https://webpack.js.org/concepts/output/#root
         */
        output: {
            filename: "[name][contenthash:8].js",
            path: paths.build,
            /** На каждой сборке удаляет старые файлы */
            clean: true,
        },
        /**
         * Плагины
         * https://webpack.js.org/plugins/
         */

        /**
         * Передаем сюда options, а в самом файле buildPlugins
         * потом деструктуризируем и достаем только {paths},
         * чтобы можно было указать путь до, например, пути с template html
         */
        plugins: buildPlugins(options),
    };
}
