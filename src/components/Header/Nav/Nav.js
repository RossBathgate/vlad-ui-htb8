import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Nav = (props) => {
    const ingredientsClickHandler = () => {
        alert("Ingredients Clicked");
    };

    const recipesClickHandler = () => {
        alert("Recipies Clicked");
    };

    return (
        <div>
            <Button onClick={ingredientsClickHandler} text={"Ingredients"} />
            <Button onClick={recipesClickHandler} text={"Recipes"} />
        </div>
    );
};

export default Nav;

const Style = {
    TestDiv: styled.div`
        & p {
            color: ${(props) => props.theme.colors.primary};
        }
    `,
};
