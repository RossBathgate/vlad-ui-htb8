import React from "react";
import styled from "styled-components";
import Nav from "./Nav/Nav";

const Header = (props) => {
  return (
    <div>
      <Nav onPageChange={props.onPageChange} />
    </div>
  );
};

export default Header;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
