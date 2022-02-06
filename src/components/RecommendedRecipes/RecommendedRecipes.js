import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import constants from "../../constants";
import RecommendedRecipe from "./RecommendedRecipe/RecommendedRecipe";

const RecommendedRecipes = (props) => {
  const numberOfRecipesToDisplay = 2;
  const recipes =
    props.recipes && props.recipes.slice(0, numberOfRecipesToDisplay);

  const showRecipesHandler = () => {
    props.onPageChange(constants.pages.recipies);
  };

  return (
    <Style.RecommendedRecipes>
      <Style.Title>
        <span>Recommended Recipes</span>
      </Style.Title>
      {recipes &&
        recipes.map((recipe) => (
          <RecommendedRecipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            ingredients={recipe.ingredients}
          />
        ))}
      <Style.ShowMoreButton onClick={showRecipesHandler}>
        Show all recipes
      </Style.ShowMoreButton>
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
    margin-top: 2rem;
    opacity: 0;
    animation: ${Animations.opacityIntro} 0.4s ease-out 0.6s forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  `,

  Title: styled.h3`
    font-family: ${(props) => props.theme.fonts.default};
    width: 100%;
    font-size: 20px;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  ShowMoreButton: styled.button`
    background-color: transparent;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-family: ${(props) => props.theme.fonts.default};
    font-size: 18px;
    color: gray;
    border: none;
    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: black;
    }

    &:focus {
      outline: none;
    }
  `,
};
