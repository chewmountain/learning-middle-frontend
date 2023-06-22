import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            <h3>{t("Страница не существует")}</h3>
        </div>
    );
};
