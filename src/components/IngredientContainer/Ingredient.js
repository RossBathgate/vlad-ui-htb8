import React from "react";
import styled from "styled-components";

const Ingredient = (props) => {
    return <></>;
};

export default Ingredient;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
