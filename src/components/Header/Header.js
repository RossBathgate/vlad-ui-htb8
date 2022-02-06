import React from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Head from "./Head/Head";
import Nav from "./Nav/Nav";

const Header = (props) => {
  return (
    <Style.Header>
      <Head onSearch={props.onSearch} searchVal={props.searchVal} />
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
