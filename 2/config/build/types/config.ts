/**
 * Чтобы принимать значения из вне, а не хардкодить прямо в файле
 * конфига, мы делаем декомпозицию: путей и пр.
 * Здесь создали типы для этого.
 * Далее все переносим в файл buildWebpackConfig.ts
 */

// Режим разработки
export type BuildMode = "development" | "production";

// Интерфейс для путей
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

// Общий интерфейс для опций
export interface BuildOptions {
    // Режим разработки
    mode: BuildMode;
    // Интерфейс для путей
    paths: BuildPaths;
    // Для удобства: isDev === true, если mode === 'development'
    isDev: boolean;
}
