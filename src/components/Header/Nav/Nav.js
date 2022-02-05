import React from "react";
import styled from "styled-components";

const Nav = (props) => {
    return <></>;
};

export default Nav;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
