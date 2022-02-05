import React from "react";
import styled from "styled-components";

const IngredientImage = (props) => {
    return <></>;
};

export default IngredientImage;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
