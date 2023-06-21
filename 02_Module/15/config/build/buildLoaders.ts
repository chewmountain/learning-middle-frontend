import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    // Для работы остальных файлов устанавливаем file-loader
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    // Для работы svg устанавливаем @svgr/webpack плагин и настраиваем его
    /**
     * Но сразу с тайпскриптом они все равно не начнут работать.
     * Необходимо объявить для тайпскрипта декларацию в app/types/global.d.ts
     */
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
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

    return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}
