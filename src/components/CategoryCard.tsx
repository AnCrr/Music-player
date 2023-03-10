import React from "react";
import { ICategory } from "./states";
interface IProps {
  key: string;
  category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
  const { name, icons } = category;

  const cover = icons[0].url;
  return (
    <div className="category-card">
      <div className="category-card__cover">
        <img src={cover} />
      </div>

      <span>{name}</span>
    </div>
  );
};

export default CategoryCard;
