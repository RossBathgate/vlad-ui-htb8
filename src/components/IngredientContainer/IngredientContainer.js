import React, { useState } from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";
import Category from "./Category";
import constants from "./../../constants";

const IngredientContainer = (props) => {
  // temporary for now:
  const data = {
    CATEGORIES: [
      {
        title: "VEGETABLES",
        id: 1,
        image: "https://",
        ingredients: [
          {
            title: "onion",
            id: 100,
            image: "https://...",
            vegetarian: 1, //1 true, 0 false
            vegan: 1,
          },
          {
            title: "pepper",
            id: 101,
            image: "https://...",
            vegetarian: 1,
            vegan: 1,
          },
        ],
      },
      {
        title: "HERBS AND SPICES",
        id: 7,
        image: "https://",
        ingredients: [
          { title: "apple", id: 100, image: "https://..." },
          { title: "orange", id: 101, image: "https://..." },
        ],
      },
    ],
  };
  const [currentCategory, setCurrentCategory] = useState(null);
  const currentIngredients =
    currentCategory &&
    data.CATEGORIES.find((elem) => elem.id === currentCategory).ingredients;

  const categoryClickHandler = (id) => {
    const category = data.CATEGORIES.find((elem) => elem.id === id);
    setCurrentCategory(category.id);
  };

  const ingredientClickHandler = (title) => {
    console.log("Ingredient clicked");
  };

  return (
    <div>
      {currentCategory === null &&
        data.CATEGORIES.map((category) => (
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
