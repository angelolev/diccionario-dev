interface TermCardProps {
  term: string;
  definition: string;
  category: string;
  onCategoryClick?: () => void;
}

function TermCard({
  term,
  definition,
  category,
  onCategoryClick,
}: TermCardProps) {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h3 className="text-2xl font-bold mb-2">{term}</h3>
      <p className="text-lg text-gray-500 mb-4">{definition}</p>
      <span
        className="inline-block bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded-full mt-2 cursor-pointer hover:bg-blue-200"
        onClick={onCategoryClick}
      >
        {category}
      </span>
    </div>
  );
}

export default TermCard;
