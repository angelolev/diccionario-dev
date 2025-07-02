import TermCard from "../TermCard";
import { programmingTerms } from "../../data/fakeData";
import { useState } from "react";

const TermsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTerms = selectedCategory
    ? programmingTerms.filter((term) => term.category === selectedCategory)
    : programmingTerms;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Términos de Programación</h1>
      {selectedCategory && (
        <button
          className="mb-4 px-4 py-2 bg-blue-500 cursor-pointer rounded-full"
          onClick={() => setSelectedCategory(null)}
        >
          Mostrar Todos
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((term) => (
          <TermCard
            key={term.id}
            {...term}
            onCategoryClick={() => setSelectedCategory(term.category)}
          />
        ))}
      </div>
    </div>
  );
};

export default TermsPage;
