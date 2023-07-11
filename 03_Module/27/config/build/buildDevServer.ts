import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        // По умолчанию с v4.0.0 HMR уже включен и нет необходимости его вот так включать и настраивать
        // hot: true
    };
}
