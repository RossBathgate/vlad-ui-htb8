import React from "react";
import styled from "styled-components";

const RecommendedRecipe = (props) => {
  return (
    <div>
      {/* align image to left, title to right */}
      <img src={props.image} />
      <p>{props.title}</p>
    </div>
  );
};

export default RecommendedRecipe;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
