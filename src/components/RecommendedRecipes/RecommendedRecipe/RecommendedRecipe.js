import React from "react";
import styled from "styled-components";

const RecommendedRecipe = (props) => {
  return (
    <Style.Recipe>
      <Style.RecipeImage bgImage={props.image} />
      <Style.RecipeDetails>
        <h3>{props.title}</h3>
        <ul>
          {props.ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
        </ul>
      </Style.RecipeDetails>
    </Style.Recipe>
  );
};

export default RecommendedRecipe;

const Style = {
  Recipe: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0.3px 0.3px 5.3px rgba(0, 0, 0, 0.028),
      1.1px 1.1px 17.9px rgba(0, 0, 0, 0.042), 5px 5px 80px rgba(0, 0, 0, 0.07);
  `,

  RecipeImage: styled.div`
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    width: 20vh;
    height: 20vh;
  `,

  RecipeDetails: styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.fonts.default};
    padding-left: 0.5rem;
    padding-top: 0.5rem;

    & h3 {
      font-size: 16px;
    }

    & ul {
      font-size: 12px;

      & li {
        color: gray;
        list-style-type: none;
      }
    }
  `,
};
