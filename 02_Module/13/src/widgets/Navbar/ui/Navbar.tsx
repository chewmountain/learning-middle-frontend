import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            {/**
             * Отдельно сделали компонент для кнопки со сменой темы
             */}
            <ThemeSwitcher />
            <div className={styles.links}>
                {/**
                 * Отдельно вынесли ссылки с роутами
                 */}
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                    className={styles.mainLink}
                >
                    Главная страница
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    О нас
                </AppLink>
            </div>
        </div>
    );
};
