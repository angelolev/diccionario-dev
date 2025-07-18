import { useTranslation } from "react-i18next";

interface TermCardProps {
  termId: string;
  onCategoryClick?: (category: string) => void;
}

function TermCard({ termId, onCategoryClick }: TermCardProps) {
  const { t } = useTranslation();

  const term = t(`terms.${termId}.term`);
  const definition = t(`terms.${termId}.definition`);
  const category = t(`terms.${termId}.category`);

  const handleCategoryClick = () => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  return (
    <div className="flex flex-wrap items-center border border-gray-300 rounded-md p-4">
      <h3 className="text-2xl font-bold mb-2">{term}</h3>
      <p className="text-lg text-gray-500 mb-4">{definition}</p>
      <span
        className="inline-block bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-4 py-2 rounded-full mt-2 cursor-pointer hover:bg-blue-200"
        onClick={handleCategoryClick}
      >
        {category}
      </span>
    </div>
  );
}

export default TermCard;
