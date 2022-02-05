import React from "react";
import styled from "styled-components";

function TestComponent() {
  return (
    <Style.TestDiv>
      <p>Hello</p>
    </Style.TestDiv>
  );
}

export default TestComponent;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${props => props.theme.colors.primary};
    }
  `,
};
