import React from "react";
import styled from "styled-components";

const Button = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
};

export default Button;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
