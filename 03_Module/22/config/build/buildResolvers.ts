import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        // Указываем, что абсолютные пути в приоритете
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        // Оставляем элиасы пустыми, preferAbsolute в true и ставим modules, т.к.
        // хотим пути по примеру: shared/classNames.
        // В элиасах можно указать "@" и пути будут @/shared/classNames
        alias: {},
        // Явно указываем, что файлы index будут главными
        mainFiles: ["index"],
    };
}

/**
 * Для настройки абсолютных путей (красивых):
 * https://webpack.js.org/configuration/resolve/#resolvemodules
 */
