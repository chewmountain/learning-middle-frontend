import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

/**
 * Можно указать тип возвращаемого значения так, а можно просто
 * импортить сразу нужные интерфейсы и типы из вебпака.
 */
// export function buildLoaders(): webpack.RuleSetRule[] {}

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    /**
     * Для добавления css файлов в js.
     * Но в таком случае css стили будут в билде записаны прямо в js файл.
     * Чтобы создавались отдельные css файлы в билде нужен лоадер:
     * https://webpack.js.org/plugins/mini-css-extract-plugin/
     */

    /**
     * Чтобы в режиме разработки не генерировать css-файлы, добавим условие.
     * Если проект в режиме разработки, то все стили будут скидываться в билд js-файла.
     * Иначе будем генерировать css-файлы.
     */

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            /**
             * Добавляем MiniCssExtractPlugin лоадер, чтобы теперь в билде создавлся
             * отдельный css файл со ситлями. Иначе все стиле будут записаны внутри js-файла.
             * Теперь вместо "style-loader" указываем MiniCssExtractPlugin.loader
             */
            // "style-loader",
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // https://webpack.js.org/loaders/css-loader/#modules
            /**
             * Чтобы использовать [name].module.s/css, нужно произвести настройку.
             * В конфиге вебпака нужно просто включить modules.
             */
            {
                loader: "css-loader",
                /**
                 * Но модульный подход нужно применять только к тем файлам,
                 * которые в названии имеют .module.
                 * В поле auto указываем на какие файлы будет распространяться модульный подход.
                 */
                options: {
                    // Если используем модульный подход везде, то просто modules: true
                    // modules: true,
                    // Если смешанный подход (и модульный и есть обычные файлы со стилями), то:
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        /**
                         * Указываем название классов css.
                         * Если в режиме разработки, то укажем полный путь до файла с таким классом.
                         * Иначе просто укажем уникальное название класса с хэшем в 8 символов
                         */
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoader];
}
