import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

/**
 * Navbar. Шаблоны для разработки. Первый UI Kit
 */

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
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
