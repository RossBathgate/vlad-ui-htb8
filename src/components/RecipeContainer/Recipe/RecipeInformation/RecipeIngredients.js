import React from "react";
import styled from "styled-components";

const RecipeIngredients = (props) => {
    return <div></div>;
};

export default RecipeIngredients;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
