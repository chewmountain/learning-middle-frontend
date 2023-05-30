import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

// https://github.com/webpack/webpack-dev-server

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        // --history-api-fallback - Allows to proxy requests through a specified index page (by default 'index.html'), useful for Single Page Applications that utilise the HTML5 History API.
        // Чтобы сохранялась история страниц и не было ошибок при переходе НЕ в корневую страницу и последующем обновлении страницы.
        historyApiFallback: true,
    };
}
