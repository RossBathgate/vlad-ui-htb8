import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Ingredient from "./Ingredient";
import Category from "./Category";
import constants from "./../../constants";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const IngredientContainer = (props) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const categoriesContainerRef = useRef();
  const ingredientsContainerRef = useRef();

  useEffect(() => {
    const getIngredients = async () => {
      const result = await axios.get(constants.backend.getIngredients);
      setCategoryData(result.data);
    };
    getIngredients();
  }, []);

  const currentIngredients =
    currentCategory &&
    categoryData.Categories.find((elem) => elem.id === currentCategory)
      .ingredients;

  const categoryClickHandler = (id) => {
    const category = categoryData.Categories.find((elem) => elem.id === id);
    setCurrentCategory(category.id);
  };

  const ingredientClickHandler = (id) => {
    setCurrentCategory(null);
    const selectedIngredient = currentIngredients.find(
      (elem) => elem.id === id
    );
    props.onIngredientSelected(selectedIngredient);
  };

  return (
    <Style.MainSection>
      <CSSTransition
        in={currentCategory === null && !!categoryData}
        timeout={600}
        classNames="categories-container"
        nodeRef={categoriesContainerRef}
        mountOnEnter
        unmountOnExit
        appear={true}
      >
        <Style.GridContainer ref={categoriesContainerRef}>
          {categoryData &&
            categoryData.Categories.map((category) => (
              <Category
                key={category.id}
                id={category.id}
                title={category.title}
                img={category.image}
                onClick={categoryClickHandler}
              />
            ))}
        </Style.GridContainer>
      </CSSTransition>

      <CSSTransition
        in={currentCategory !== null}
        timeout={600}
        classNames="ingredients-container"
        nodeRef={ingredientsContainerRef}
        mountOnEnter
        unmountOnExit
      >
        <Style.GridContainer ref={ingredientsContainerRef}>
          {currentIngredients &&
            currentIngredients.map((ingredient) => (
              <Ingredient
                key={ingredient.id}
                id={ingredient.id}
                title={ingredient.title}
                img={ingredient.image}
                onClick={ingredientClickHandler}
              />
            ))}
        </Style.GridContainer>
      </CSSTransition>
    </Style.MainSection>
  );
};

export default IngredientContainer;

const Style = {
  MainSection: styled.div`
    position: relative;
  `,

  GridContainer: styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 1rem;
    column-gap: 1rem;
    align-items: center;
    justify-items: center;
    position: absolute;
    width: 100%;
    height: 100%;

    &.categories-container-appear {
      opacity: 0;
    }

    &.categories-container-appear-active {
      opacity: 1;
    }

    &.categories-container-enter {
      transform: scale(2, 2);
      opacity: 0;
    }
    &.categories-container-enter-active {
      transform: scale(1, 1);
      opacity: 1;
      transition: all 0.4s;
    }
    &.categories-container-enter-done {
      opacity: 1;
    }
    &.categories-container-exit {
      transform: scale(1, 1);
      opacity: 1;
    }
    &.categories-container-exit-active {
      transform: scale(2, 2);
      opacity: 0;
      transition: all 0.4s;
    }

    &.ingredients-container-enter {
      transform: scale(0.2, 0.2);
      opacity: 0;
    }
    &.ingredients-container-enter-active {
      transform: scale(1, 1);
      opacity: 1;
      transition: all 0.4s;
    }
    &.ingredients-container-exit {
      transform: scale(1, 1);
      opacity: 1;
    }
    &.ingredients-container-exit-active {
      transform: scale(0.2, 0.2);
      opacity: 0;
      transition: all 0.4s;
    }

    ${breakpoint("tablet")`
      grid-template-columns: auto auto auto auto;
    `}
  `,
};
