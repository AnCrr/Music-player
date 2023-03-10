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

  return (
    <div className="categories">
      <input
        placeholder="Search . . ."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Search;
