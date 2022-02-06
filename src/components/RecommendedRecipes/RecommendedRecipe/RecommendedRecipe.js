import React from "react";
import styled from "styled-components";

const RecommendedRecipe = (props) => {
  return (
    <Style.Recipe>
      <Style.RecipeImage bgImage={props.image} />
      <p>{props.title}</p>
    </Style.Recipe>
  );
};

export default RecommendedRecipe;

const Style = {
  Recipe: styled.div`
    width: 20vh;

    & img {
    }
  `,

  RecipeImage: styled.div`
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    width: 20vh;
    height: 20vh;
  `,
};
