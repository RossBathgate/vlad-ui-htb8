import React from "react";
import styled from "styled-components";

const GenericItem = (props) => {
  return (
    <Style.GenericItem onClick={props.onClick}>
      <img src={props.img} />
      <p>{props.title}</p>
    </Style.GenericItem>
  );
};

export default GenericItem;

const Style = {
  GenericItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;

    & img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }
  `,
};
