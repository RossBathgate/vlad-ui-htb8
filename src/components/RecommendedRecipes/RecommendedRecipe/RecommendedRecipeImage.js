import React from "react";
import styled from "styled-components";

const RecommendedRecipeImage = (props) => {
    return <></>;
};

export default RecommendedRecipeImage;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
