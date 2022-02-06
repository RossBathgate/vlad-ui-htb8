import React from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Recipe from "./Recipe/Recipe";

const RecipeContainer = (props) => {
  const recipes = props.recipes;

  return (
    <Style.RecipeContainer>
      {recipes &&
        recipes.map((recipe, index) => (
          <Recipe
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            information={recipe.information}
            ingredients={recipe.ingredients}
            method={recipe.method}
            isReflected={index % 2 === 1}
            recipeIndex={index}
          />
        ))}
    </Style.RecipeContainer>
  );
};

export default RecipeContainer;

const Style = {
  RecipeContainer: styled.div`
    padding: 1rem;

    ${breakpoint("desktop")`
      padding-top: 1.5rem;
    `}
  `,
};
