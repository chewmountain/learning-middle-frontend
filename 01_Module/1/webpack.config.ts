import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

/**
 * Основные концепции
 * https://webpack.js.org/concepts/
 */

/**
 * Для использования TypeScript в webpack
 * https://webpack.js.org/guides/typescript/#root
 */

/**
 * Написать webpack.config на ts
 * и здесь же как сделать es импорты вместо require
 * https://webpack.js.org/configuration/configuration-languages/
 */

/**
 * Для конфига указываем тип, чтобы работал автокомплит
 */
const config: webpack.Configuration = {
    /** Режим разработки */
    mode: "development",
    /** Точка входа (исходный гл. файл js / ts / jsx / tsx) */
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
        /**
         * Правила. Здесь конфигурируем лоадеры, которые обрабатывают файлы, которые
         * выходят за рамки javascript: png, ts, css и т.д.
         */
        rules: [
            {
                /**
                 * В поле test указываем регулярку, которая будет искать файлы с таким расширением: ts/tsx
                 */
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    /** resolve - разрешения.
     * Здесь указываем расширения для тех файлов, в которых при инпутах
     * мы не будем указывать раширения:
     * import Component from './component'
     * т.е. просто ./component, а не ./component.ts
     */
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    /**
     * Выходная точка: куда будут собираться все файлы
     * https://webpack.js.org/concepts/output/#root
     */
    output: {
        filename: "[name][contenthash:8].js",
        path: path.resolve(__dirname, "build"),
        /** На каждой сборке удаляет старые файлы */
        clean: true,
    },
    /**
     * Плагины
     * https://webpack.js.org/plugins/
     */
    plugins: [
        /**
         * Для генерации index.html. В качестве шаблона указываем наш html файл
         * https://github.com/jantimon/html-webpack-plugin#options
         */
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        /** Прогресс бар при сборке проекта */
        new webpack.ProgressPlugin(),
    ],
};

export default config;
