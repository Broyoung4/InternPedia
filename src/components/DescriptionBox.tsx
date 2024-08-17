import React from 'react';

interface DescriptionBoxProps {
  title: string;
  description: string;
}

const DescriptionBox: React.FC<DescriptionBoxProps> = ({ title, description }) => {
  return (
    <div className="description-box">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionBox;