import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation("about");
    return (
        <div>
            <h3>{t("О нас")}</h3>
        </div>
    );
};

export default AboutPage;
