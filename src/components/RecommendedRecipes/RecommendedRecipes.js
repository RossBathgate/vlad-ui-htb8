import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import RecommendedRecipe from "./RecommendedRecipe/RecommendedRecipe";

const RecommendedRecipes = (props) => {
  const numberOfRecipesToDisplay = 2;
  const recipes = props.recipes.slice(0, numberOfRecipesToDisplay);

  return (
    <Style.RecommendedRecipes>
      {recipes &&
        recipes.map((recipe) => (
          <RecommendedRecipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
    </Style.RecommendedRecipes>
  );
};

export default RecommendedRecipes;

const Animations = {
  opacityIntro: keyframes`
    from {opacity: 0}
    to {opacity: 1}
  `,
};

const Style = {
  RecommendedRecipes: styled.div`
    opacity: 0;
    animation: ${Animations.opacityIntro} 0.4s ease-out 0.4s forwards;
  `,
};
