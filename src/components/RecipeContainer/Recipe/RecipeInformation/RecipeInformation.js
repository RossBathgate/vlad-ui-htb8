import React from "react";
import styled from "styled-components";

const RecipeInformation = (props) => {
    return <div></div>;
};

export default RecipeInformation;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
