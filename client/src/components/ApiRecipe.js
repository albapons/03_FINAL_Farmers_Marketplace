import React, { useEffect, useState } from "react";
import "../App.css";
import Recipe from "./Recipe";

const ApiRecipe = () => {
  const APP_ID = "09ac2f76";
  const APP_KEY = "206a822647a60fed31f93c1d856aa4b9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="bg-light">
        <div className="container">
          <h5>Get your recipe</h5>
          <form onSubmit={getSearch}>
            <textarea
              className="mt-4 form-control"
              type="text"
              rows="4"
              cols="50"
              placeholder="Ingredients list"
              value={search}
              onChange={updateSearch}
            />
            <button className="mt-4 btn btn-info form-control" type="submit">
              Search
            </button>
          </form>

          <div className="recipes">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.label}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                calories={recipe.recipe.calories}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiRecipe;
