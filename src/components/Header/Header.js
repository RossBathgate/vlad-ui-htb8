import React from "react";
import styled from "styled-components";
import Nav from "./Nav/Nav";

const Header = (props) => {
  return (
    <Style.Header>
      <Nav onPageChange={props.onPageChange} currentPage={props.currentPage} />
    </Style.Header>
  );
};

export default Header;

const Style = {
  Header: styled.div`
    width: 100%;
    border-bottom: 1px solid #ccc;
  `,
};
