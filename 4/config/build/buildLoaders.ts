import { RuleSetRule } from "webpack";

/**
 * Можно указать тип возвращаемого значения так, а можно просто
 * импортить сразу нужные интерфейсы и типы из вебпака.
 */
// export function buildLoaders(): webpack.RuleSetRule[] {}

export function buildLoaders(): RuleSetRule[] {
    /**
     * Для добавления css файлов в js.
     * Но в таком случае css стили будут в билде записаны прямо в js файл.
     * Чтобы создавались отдельные css файлы в билде нужен лоадер:
     * https://webpack.js.org/plugins/mini-css-extract-plugin/
     */
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // Если не используем ts - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    /**
     * Последовательность лоадеров имеет значение, поэтому
     * лучше выносить их в отдельные переменные и далее возвращать
     * в нужном порядке.
     */

    return [typescriptLoader, cssLoader];
}
