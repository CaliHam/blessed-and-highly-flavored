import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink: React.FC<{ label: string; imageSrc: string }> = ({ label, imageSrc }) => (
  <Link
    to={`/cakes/${encodeURIComponent(label)}`} // Pass category as part of the URL
    className="flex flex-col items-center space-y-4 text-primary hover:text-hoverPrimary transition-colors"
  >
    <div className="w-24 h-24 rounded-full bg-secondary p-4 flex items-center justify-center shadow-lg">
      <img src={imageSrc} alt={`${label} cake`} className="rounded-full" />
    </div>
    <span className="text-lg font-semibold">{label}</span>
  </Link>
);

export default CategoryLink;