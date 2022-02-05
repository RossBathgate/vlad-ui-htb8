import React from "react";
import styled from "styled-components";

const ItemTitle = (props) => {
    return <></>;
};

export default ItemTitle;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
