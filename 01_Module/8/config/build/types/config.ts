/**
 * Чтобы принимать значения из вне, а не хардкодить прямо в файле
 * конфига, мы делаем декомпозицию: путей и пр.
 * Здесь создали типы для этого.
 * Далее все переносим в файл buildWebpackConfig.ts
 */

export type BuildMode = "development" | "production";

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
