import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
    categoryData.CATEGORIES.find((elem) => elem.id === currentCategory)
      .ingredients;

  const categoryClickHandler = (id) => {
    const category = categoryData.CATEGORIES.find((elem) => elem.id === id);
    setCurrentCategory(category.id);
  };

  const ingredientClickHandler = (title) => {
    console.log("Ingredient clicked");
  };

  return (
    <div>
      {currentCategory === null &&
        categoryData &&
        categoryData.CATEGORIES.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            title={category.title}
            img={category.image}
            onClick={categoryClickHandler}
          />
        ))}

      {currentCategory !== null &&
        currentIngredients.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            id={ingredient.id}
            title={ingredient.title}
            img={ingredient.img}
            onClick={ingredientClickHandler}
          />
        ))}
    </div>
  );
};

export default IngredientContainer;

const Style = {
  TestDiv: styled.div`
    & p {
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};
