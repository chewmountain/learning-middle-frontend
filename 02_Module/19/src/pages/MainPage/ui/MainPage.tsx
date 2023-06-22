import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h3>{t("Главная")}</h3>
        </div>
    );
};

export default MainPage;
