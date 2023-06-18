declare module "*.scss";

// С интерфейсом
// declare module "*.scss" {
//     interface IClassNames {
//         [className: string]: string;
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

// Для того, чтобы ts понимал что это за файлы: svg, png и пр.
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
