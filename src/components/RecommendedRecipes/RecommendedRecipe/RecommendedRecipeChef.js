import React from "react";
import styled from "styled-components";

const RecommendedRecipeChef = (props) => {
    return <></>;
};

export default RecommendedRecipeChef;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
