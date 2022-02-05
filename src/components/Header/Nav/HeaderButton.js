import React from "react";
import styled from "styled-components";

const HeaderButton = (props) => {
  return (
    <Style.HeaderButton onClick={props.onClick} isActive={props.isActive}>
      {props.text}
    </Style.HeaderButton>
  );
};

export default HeaderButton;

const Style = {
  HeaderButton: styled.button`
    background-color: white;
    border: none;
    padding: 1rem;
    flex: 1;
    font-family: ${(props) => props.theme.fonts.default};
    color: ${props => props.isActive ? "black": "darkgray"};
    transition: border-color 0.1s, color 0.1s;

    &:focus {
      outline: none;
    }
  `,
};
