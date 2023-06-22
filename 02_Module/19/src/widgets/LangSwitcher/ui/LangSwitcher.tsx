import { useTranslation } from "react-i18next";
import styles from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "widgets/Navbar/ui/button";
import { ThemeButton } from "widgets/Navbar/ui/button/ui/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames(styles.LangSwitcher, {}, [className])}
        >
            {t("Язык")}
        </Button>
    );
};
