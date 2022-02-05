import React from "react";
import styled from "styled-components";

const Recipe = (props) => {
    return <div></div>;
};

export default Recipe;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
