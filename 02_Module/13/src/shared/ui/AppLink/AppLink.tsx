import styles from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

// Расширили интерфейс с помощью LinkProps (встроен в react router dom)
// Получим тут все пропсы для ссылок Link
interface AppLinkProps extends LinkProps {
    className?: string;
    // Для возможности использовать темы на ссылках
    theme?: AppLinkTheme;
}

/**
 * Указываем типизацию нашего компонента с помощью FC (встроен в реакт - Functional Component)
 * В generic передаем наш интерфейс, чтобы расширить принимаемые пропсы
 */
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.SECONDARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
