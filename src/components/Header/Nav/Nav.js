import React from "react";
import styled from "styled-components";
import constants from "../../../constants";
import HeaderButton from "./HeaderButton";

const Nav = (props) => {
  const ingredientsClickHandler = () => {
    props.onPageChange(constants.pages.ingredients);
  };

  const recipesClickHandler = () => {
    props.onPageChange(constants.pages.recipies);
  };

  return (
    <Style.Nav>
      <HeaderButton
        onClick={ingredientsClickHandler}
        text={"Ingredients"}
        isActive={props.currentPage === constants.pages.ingredients}
      />
      <HeaderButton
        onClick={recipesClickHandler}
        text={"Recipes"}
        isActive={props.currentPage === constants.pages.recipies}
      />
      <Style.ActiveIndicator currentPos={props.currentPage} />
    </Style.Nav>
  );
};

export default Nav;

const Style = {
  Nav: styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    font-size: 14px;
  `,

  ActiveIndicator: styled.div`
    position: absolute;
    height: 0.2rem;
    background-color: black;
    width: 50%;
    bottom: 0;
    left: ${(props) => props.currentPos * 50}%;
    transition: left 0.2s;
  `,
};
