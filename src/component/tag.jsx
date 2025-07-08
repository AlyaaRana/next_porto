import { memo } from 'react';

const Tag = memo(({ children, type = 'default' }) => {
  const baseClasses = "px-4 py-1 rounded-full text-sm transition-colors duration-200";
  const typeClasses = {
    default: "border border-gray-400 text-gray-300 hover:bg-gray-700",
    additional: "border border-gray-400 text-gray-300 hover:bg-gray-900/30",
    skill: "border border-yellow-400 text-yellow-300 hover:bg-yellow-900/30"
  };

  return (
    <span className={`${baseClasses} ${typeClasses[type]}`}>
      {children}
    </span>
  );
});

Tag.displayName = 'Tag';
export default Tag;
