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
      <h3 className="text-lg font-bold">{term}</h3>
      <p className="text-sm text-gray-500">{definition}</p>
      <span
        className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mt-2 cursor-pointer hover:bg-blue-200"
        onClick={onCategoryClick}
      >
        {category}
      </span>
    </div>
  );
}

export default TermCard;
