declare module "*.scss";

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

/**
 * TS ничего не знает про глобальную переменную, которую мы объявили в buildPlugins.ts
 * Объявляем ее здесь и можем использовать теперь во всем приложении.
 */
declare const __IS_DEV__: boolean;
