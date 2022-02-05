import React from "react";
import styled from "styled-components";

function TestComponent() {
  return <Style.TestDiv>Hello</Style.TestDiv>
}

export default TestComponent;

const Style = {
  TestDiv: styled.div`
    color: red;
  `
}
