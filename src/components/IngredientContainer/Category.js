import React from "react";
import styled from "styled-components";

const Category = (props) => {
  return (
    <GenericItem onClick={props.onClick} title={props.title} img={props.img} />
  );
};

export default Category;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
