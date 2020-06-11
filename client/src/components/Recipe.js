import React from "react";
import "../App.css";
import "./Recipe.css";
import style from "./recipe.module.css";

const Recipe = ({ title, ingredients, image, calories, source, url }) => {
  return (
    <div className={style.recipe}>
      <h1 className="title my-3">{title}</h1>
      <img className={style.image} src={image} alt="" />
      <p>
        {source} ·{url}
      </p>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>
            <p className="text">{ingredient.text}</p>
          </li>
        ))}
      </ul>
      <p>
        <strong>Calories: </strong>
        {Math.round(calories)}
      </p>
      <p>
        {source} ·{url}
      </p>
    </div>
  );
};

export default Recipe;
