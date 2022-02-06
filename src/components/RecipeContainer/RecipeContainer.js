import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe/Recipe";

const RecipeContainer = (props) => {
  const recipes = props.recipes;

  return (
    <div>
      {recipes &&
        recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            information={recipe.information}
            ingredients={recipe.ingredients}
            method={recipe.method}
          />
        ))}
    </div>
  );
};

export default RecipeContainer;
