import React, { useState } from "react";
import styled from "styled-components";

function SettingsModal(props) {
  const containerClickHandler = () => {
    props.onClose();
  };

  const contentClickHandler = (event) => {
    event.stopPropagation();
  };

  const radioChangeHandler = (event) => {
    props.onSetDiet(event.target.value);
  };

  return (
    <Style.ModalContainer onClick={containerClickHandler}>
      <Style.ModalContent onClick={contentClickHandler}>
        <h3>Dietary Requirements</h3>
        <Style.Checkboxes>
          <p>Vegetarian</p>
          <input
            type="radio"
            name="checkbox"
            value="vegetarian"
            onChange={radioChangeHandler}
            checked={props.diet === "vegetarian"}
          />
          <p>Vegan</p>
          <input
            type="radio"
            name="checkbox"
            value="vegan"
            onChange={radioChangeHandler}
            checked={props.diet === "vegan"}
          />
          <p>Pescetarian</p>
          <input
            type="radio"
            name="checkbox"
            value="pescetarian"
            onChange={radioChangeHandler}
            checked={props.diet === "pescetarian"}
          />
        </Style.Checkboxes>
        <Style.CloseButton onClick={containerClickHandler}>
          Close (x)
        </Style.CloseButton>
      </Style.ModalContent>
    </Style.ModalContainer>
  );
}

export default SettingsModal;

const Style = {
  ModalContainer: styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ModalContent: styled.div`
    border-radius: 4px;
    height: fit-content;
    width: fit-content;
    background-color: white;
    position: relative;
    padding: 2rem;
    font-family: ${(props) => props.theme.fonts.default};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    & h3 {
      font-size: 22px;
      margin-bottom: 0.5rem;
    }

    & p {
      font-size: 16px;
    }
  `,

  CloseButton: styled.button`
    background-color: white;
    border: none;
    position: absolute;
    right: 1rem;
    top: 0;
    transform: translateY(-100%);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s;

    &:hover {
      cursor: pointer;
      background-color: darkgray;
    }
  `,

  Checkboxes: styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 1rem;
  `,
};
