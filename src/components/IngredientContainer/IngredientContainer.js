import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Ingredient from "./Ingredient";
import Category from "./Category";
import constants from "./../../constants";
import axios from "axios";

const IngredientContainer = (props) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
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

  const ingredientClickHandler = (title) => {
    console.log("Ingredient clicked");
  };

  return (
    <div>
      {currentCategory === null && categoryData && (
        <Style.GridContainer>
          {categoryData.Categories.map((category) => (
            <Category
              key={category.id}
              id={category.id}
              title={category.title}
              img={category.image}
              onClick={categoryClickHandler}
            />
          ))}
        </Style.GridContainer>
      )}

      {currentCategory !== null && (
        <Style.GridContainer>
          {currentIngredients.map((ingredient) => (
            <Ingredient
              key={ingredient.id}
              id={ingredient.id}
              title={ingredient.title}
              img={ingredient.image}
              onClick={ingredientClickHandler}
            />
          ))}
        </Style.GridContainer>
      )}
    </div>
  );
};

export default IngredientContainer;

const Style = {
  GridContainer: styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 1rem;
    column-gap: 1rem;
    align-items: center;
    justify-items: center;

    ${breakpoint("tablet")`
      grid-template-columns: auto auto auto auto;
    `}
  `,
};
