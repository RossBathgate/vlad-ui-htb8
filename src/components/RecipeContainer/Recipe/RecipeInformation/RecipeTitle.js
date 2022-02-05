import React from "react";
import styled from "styled-components";

const RecipeTitle = (props) => {
    return <div></div>;
};

export default RecipeTitle;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
