import React from "react";
import styled from "styled-components";

const Search = (props) => {
    return <></>;
};

export default Search;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
