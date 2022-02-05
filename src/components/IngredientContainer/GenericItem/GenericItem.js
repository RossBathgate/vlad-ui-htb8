import React from "react";
import styled from "styled-components";

const GenericItem = (props) => {
  return (
    <div onClick={props.onClick}>
      <p>{props.title}</p>
      <img src={props.img} />
    </div>
  );
};

export default GenericItem;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
