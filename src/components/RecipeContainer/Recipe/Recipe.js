import React from "react";
import styled from "styled-components";

const Recipe = (props) => {
  return (
    <div>
      <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.information}</p>
      <p>{props.ingredients}</p>
      <p>{props.method}</p>
    </div>
  );
};

export default Recipe;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
