import { RuleSetRule } from "webpack";

/**
 * Можно указать тип возвращаемого значения так, а можно просто
 * импортить сразу нужные интерфейсы и типы из вебпака.
 */
// export function buildLoaders(): webpack.RuleSetRule[] {}

export function buildLoaders(): RuleSetRule[] {
    const typescriptLoader = {
        /**
         * В поле test указываем регулярку,
         * которая будет искать файлы с таким расширением: ts/tsx
         */
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    /**
     * Последовательность лоадеров имеет значение, поэтому
     * лучше выносить их в отдельные переменные и далее возвращать
     * в нужном порядке.
     */

    return [typescriptLoader];
}
