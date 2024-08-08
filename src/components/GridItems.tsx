import React from 'react';

interface GridItemsProps {
  items: any[];
  handleItemClick: (item: any) => void;
}

const GridItems: React.FC<GridItemsProps> = ({ items, handleItemClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-md shadow-md p-4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => handleItemClick(item)}
        >
          {/* Content for each grid item */}
          <p className="font-bold text-lg">{item.title}</p>
          <p className="text-gray-600">{item.description}</p>
          {/* Add more content as needed */}
        </div>
      ))}
    </div>
  );
};

export default GridItems;