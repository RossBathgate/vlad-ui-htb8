import React from "react";
import styled from "styled-components";

const RecipeContainer = (props) => {
  return <div>Recipes</div>;
};

export default RecipeContainer;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
