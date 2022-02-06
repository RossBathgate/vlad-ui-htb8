import React from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Nav from "./Nav/Nav";

const Header = (props) => {
  return (
    <Style.Header>
      <Nav
        onPageChange={props.onPageChange}
        currentPage={props.currentPage}
        isSecondPageDisabled={props.isSecondPageDisabled}
      />
    </Style.Header>
  );
};

export default Header;

const Style = {
  Header: styled.div`
    width: 100%;
    box-shadow: 0px 2px 10px -7px black;

    ${breakpoint("tablet")`
      border-bottom: 1px solid #ccc;
      box-shadow: none;
    `}
  `,
};
