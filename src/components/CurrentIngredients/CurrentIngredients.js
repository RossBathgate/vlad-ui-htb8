import React from "react";
import styled, { keyframes } from "styled-components";

function CurrentIngredients(props) {
  let splitIngredients = [];
  let currentPos = 0;
  if (props.chosenIngredients) {
    for (let i = 0; i < props.chosenIngredients.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        currentPos++;
      }

      if (currentPos < splitIngredients.length) {
        splitIngredients[currentPos] = [
          ...splitIngredients[currentPos],
          props.chosenIngredients[i],
        ];
      } else {
        splitIngredients.push([props.chosenIngredients[i]]);
      }
    }
  }

  return (
    <Style.CurrentIngredients>
      <Style.ZigZag opposite />
      <Style.Row>
        {props.chosenIngredients &&
          splitIngredients.map((ingredientArr) => {
            return (
              <Style.Column>
                {ingredientArr.map((ingredient) => {
                  const clickHandler = () => {
                    props.onRemoveIngredient(ingredient.id);
                  };

                  return (
                    <Style.CurrentIngredient
                      key={ingredient.id}
                      onClick={clickHandler}
                    >
                      {ingredient.title} (x)
                    </Style.CurrentIngredient>
                  );
                })}
              </Style.Column>
            );
          })}
      </Style.Row>
      <Style.ZigZag />
    </Style.CurrentIngredients>
  );
}

export default CurrentIngredients;

const Animations = {
  intro: keyframes`
    from {opacity: 0}
    to {opacity: 1}
  `,
};

const Style = {
  CurrentIngredients: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: ${Animations.intro} 0.4s ease-out 0.4s forwards;
  `,

  CurrentIngredient: styled.div`
    font-family: ${(props) => props.theme.fonts.default};
    font-size: 14px;
    color: gray;
    transition: color 0.1s;
    padding: 0.3rem;

    &:hover {
      cursor: pointer;
      color: black;
    }
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Row: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,

  ZigZag: styled.div`
    position: relative;
    padding: 8px 8px 6px 8px;
    background: #ddd;
    color: white;
    width: 100%;
    transform: ${(props) => props.opposite && "scale(1, -1)"};

    &::after {
      background: linear-gradient(-45deg, #ffffff 8px, transparent 0),
        linear-gradient(45deg, #ffffff 8px, transparent 0);
      background-position: left-bottom;
      background-repeat: repeat-x;
      background-size: 16px 16px;
      content: " ";
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 16px;
    }
  `,
};
