import React from "react";
import styled from "styled-components";

const IngredientTitle = (props) => {
    return <></>;
};

export default IngredientTitle;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
