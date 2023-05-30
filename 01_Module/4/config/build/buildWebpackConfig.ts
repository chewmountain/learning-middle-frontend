import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,

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