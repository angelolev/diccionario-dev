import TermCard from "../TermCard";
import { termIds } from "../../data/fakeData";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TermsPage = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Get all terms with their translated data for filtering
  const allTerms = termIds.map((id) => ({
    id,
    category: t(`terms.${id}.category`),
  }));

  const filteredTermIds = selectedCategory
    ? allTerms
        .filter((term) => term.category === selectedCategory)
        .map((term) => term.id)
    : termIds;

  return (
    <div className="p-4 max-w-7xl mx-auto pb-16">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => changeLanguage("es")}
          className={`px-3 py-1 rounded ${
            i18n.language === "es"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded ${
            i18n.language === "en"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          EN
        </button>
      </div>

      <h1 className="text-3xl font-bold my-12 text-center">
        {t("termsPage.title")}
      </h1>
      {selectedCategory && (
        <button
          className="mb-4 px-4 py-2 bg-blue-500 cursor-pointer rounded-full"
          onClick={() => setSelectedCategory(null)}
        >
          {t("termsPage.showAll")}
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTermIds.map((termId) => (
          <TermCard
            key={termId}
            termId={termId}
            onCategoryClick={setSelectedCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default TermsPage;
