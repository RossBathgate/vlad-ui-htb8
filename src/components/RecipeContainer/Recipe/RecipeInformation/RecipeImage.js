import React from "react";
import styled from "styled-components";

const RecipeImage = (props) => {
    return <div></div>;
};

export default RecipeImage;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
