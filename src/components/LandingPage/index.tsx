import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LandingPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="min-h-screen bg-pastel-blue flex flex-col items-center justify-center text-center p-4 max-w-7xl mx-auto">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => changeLanguage("es")}
          className={`px-3 py-1 rounded cursor-pointer ${
            i18n.language === "es"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded cursor-pointer ${
            i18n.language === "en"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          EN
        </button>
      </div>

      <h1 className="text-7xl font-bold text-pastel-dark-blue mb-8">
        {t("landingPage.title")}
      </h1>
      <p className="text-3xl text-pastel-dark-blue mb-8 leading-relaxed">
        {t("landingPage.description")}
      </p>
      <Link
        to="/terms"
        className="mb-4 px-6 py-4 bg-blue-500 rounded-full cursor-pointer text-4xl"
      >
        {t("landingPage.start")}
      </Link>
    </div>
  );
};

export default LandingPage;
