import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

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
        /**
         * Для генерации css файлов в билде. Без него стили будут записываться прямо
         * внутри js.
         * https://webpack.js.org/plugins/mini-css-extract-plugin/
         */
        new MiniCssExtractPlugin({
            // Название файла
            filename: "css/[name].[contenthash:8].css",
            // Для разбивки файлов на ассинхронные
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
    ];
}
