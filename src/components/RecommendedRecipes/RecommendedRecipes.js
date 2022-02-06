import React, { useState } from "react";
import styled from "styled-components";
import RecommendedRecipe from "./RecommendedRecipe/RecommendedRecipe";

const RecommendedRecipes = (props) => {
  const numberOfRecipesToDisplay = 2;
  const recipes = props.recipes.slice(0, numberOfRecipesToDisplay);

  return (
    <div>
      {recipes &&
        recipes.map((recipe) => (
          <RecommendedRecipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
    </div>
  );
};

export default RecommendedRecipes;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
