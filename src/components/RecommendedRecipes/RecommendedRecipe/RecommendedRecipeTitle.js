import React from "react";
import styled from "styled-components";

const RecommendedRecipeTitle = (props) => {
    return <></>;
};

export default RecommendedRecipeTitle;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
