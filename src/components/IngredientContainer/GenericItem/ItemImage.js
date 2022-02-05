import React from "react";
import styled from "styled-components";

const ItemImage = (props) => {
    return <></>;
};

export default ItemImage;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
