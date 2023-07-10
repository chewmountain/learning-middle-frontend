import { Loader } from "shared/ui/Loader/Loader";
import styles from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface PageLoaderProps {
    className?: string;
}

/**
 * Создание несуществующих маршрутов (404 page). Лоадер для загрузки страниц
 * Page loader
 * Анимация загрузки страницы при переходе
 */

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
