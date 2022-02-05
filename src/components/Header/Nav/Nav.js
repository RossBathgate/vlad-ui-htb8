import React from "react";
import styled from "styled-components";
import constants from "../../../constants";
import Button from "./Button";

const Nav = (props) => {
  const ingredientsClickHandler = () => {
    props.onPageChange(constants.pages.ingredients);
  };

  const recipesClickHandler = () => {
    props.onPageChange(constants.pages.recipies);
  };

  return (
    <div>
      <Button onClick={ingredientsClickHandler} text={"Ingredients"} />
      <Button onClick={recipesClickHandler} text={"Recipes"} />
    </div>
  );
};

export default Nav;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
