import React from "react";
import styled from "styled-components";

const RecommendedRecipes = (props) => {
    return <></>;
};

export default RecommendedRecipes;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
