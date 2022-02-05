import React from "react";
import styled from "styled-components";

const RecipeMethod = (props) => {
    return <div></div>;
};

export default RecipeMethod;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
