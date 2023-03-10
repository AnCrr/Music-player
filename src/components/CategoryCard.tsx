import React from "react";

const CategoryCard = ({ data }) => {
  return (
    <div className="category-card">
      <div className="category-card__cover">
        <img src={data.icons[0].url} />
      </div>

      <span>{data.name}</span>
    </div>
  );
};

export default CategoryCard;
