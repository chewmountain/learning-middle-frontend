import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h3>{t("Главная")}</h3>
            <BugButton />
        </div>
    );
};

export default MainPage;
