import React from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

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
    transition: transform 0.2s;

    & p {
      font-family: ${(props) => props.theme.fonts.default};
      color: gray;
      font-weight: bold;
      transition: color 0.2s;
    }

    & img {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      transition: filter 0.2s, transform 0.2s;
      margin-bottom: 0.5rem;

      ${breakpoint("desktop")`
        filter: grayscale(1);
      `}
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.05, 1.05);

      & img {
        filter: grayscale(0);
      }

      & p {
        color: black;
        font-weight: bold;
      }
    }
  `,
};
