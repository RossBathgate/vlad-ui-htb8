import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

const Recipe = (props) => {
  return (
    <Style.Recipe
      bgImage={props.image}
      isReflected={props.isReflected}
      recipeIndex={props.recipeIndex}
    >
      <Style.RecipeDetails isReflected={props.isReflected}>
        <h3>{props.title}</h3>
        <p>{props.information}</p>
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <button>View more</button>
      </Style.RecipeDetails>
    </Style.Recipe>
  );
};

export default Recipe;

const Animations = {
  recipeIntro: keyframes`
    from {
      opacity: 0;
      transform: translateX(-2rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
};

const Style = {
  Recipe: styled.div`
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    min-height: fit-content;
    height: 40vh;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.isReflected && "flex-end"};
    overflow: hidden;
    box-shadow: 0.3px 0.3px 5.3px rgba(0, 0, 0, 0.028),
      1.1px 1.1px 17.9px rgba(0, 0, 0, 0.042), 5px 5px 80px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    opacity: 0;
    animation: ${Animations.recipeIntro} 0.3s ease-out
      ${(props) => props.recipeIndex * 0.1}s forwards;

    ${breakpoint("desktop")`
      margin-left: 2rem;
      margin-right: 2rem;
      margin-bottom: 1.5rem;
    `}
  `,

  RecipeDetails: styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isReflected ? "flex-end" : "flex-start")};
    position: relative;
    width: 35%;
    height: 100%;
    font-family: ${(props) => props.theme.fonts.default};
    padding: 0.5rem;

    ${breakpoint("desktop")`
      padding: 1rem;
    `}

    &::before {
      content: "";
      z-index: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 1);
      transform: rotateZ(${(props) => (props.isReflected ? "5deg" : "-5deg")})
        scale(1.2, 1.2);
    }

    & h3 {
      font-size: 16px;
      margin-bottom: 0.5rem;
      margin-top: 0.2rem;
      position: relative;
      z-index: 1;
      text-align: ${(props) => (props.isReflected ? "right" : "left")};
    }

    & p {
      font-size: 12px;
      position: relative;
      z-index: 1;
    }

    & ul {
      font-size: 12px;
      position: relative;
      z-index: 1;

      & li {
        color: gray;
        list-style-type: none;
        text-align: ${(props) => (props.isReflected ? "right" : "left")};
      }
    }

    & button {
      background-color: white;
      border: none;
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding: 0.5rem;
      color: gray;
      border-top: 1px solid rgba(0, 0, 0, 0.15);

      &:hover {
        cursor: pointer;
        color: black;
      }

      &:focus {
        outline: none;
      }
    }
  `,
};
