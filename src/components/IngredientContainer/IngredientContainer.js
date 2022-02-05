import React, { useState } from "react";
import styled from "styled-components";

const IngredientContainer = (props) => {
  const data = {};
  const categories = [];
  let ingredients = [];

  return <div>Ingredients</div>;
};

export default IngredientContainer;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
