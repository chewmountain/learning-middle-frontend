declare module "*.scss";

// С интерфейсом
// declare module "*.scss" {
//     interface IClassNames {
//         [className: string]: string;
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

/**
 * Нужно настроить такую глобальную декларацию типов,
 * чтобы ts понимал что мы хотим заимпортить из css файла в компонент.
 * import styles from "./Component.module.scss"
 * Создаем файл gloabl.d.ts
 */
