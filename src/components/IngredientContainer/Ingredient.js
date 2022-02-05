import React from "react";
import styled from "styled-components";
import GenericItem from "./GenericItem/GenericItem";

const Ingredient = (props) => {
  return (
    <GenericItem onClick={props.onClick} title={props.title} img={props.img} />
  );
};

export default Ingredient;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
