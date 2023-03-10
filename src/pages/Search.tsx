import React, { useState } from "react";
import { useCategoriesState } from "../components/states";
import CategoryCard from "../components/CategoryCard";

const Search = () => {
  const [query, setQuery] = useState("");

  const { categories } = useCategoriesState((state) => ({
    categories: state.categories,
  }));

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log("categories", categories);

  return (
    <div className="categories">
      <input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredCategories.map((category) => (
        //   <li key={category.name}>{category.name}</li>
        <CategoryCard data={category} />
      ))}
      {/* {categories.map((category) => (
        
        <CategoryCard data={category} />
      ))} */}
    </div>
  );
};

export default Search;
