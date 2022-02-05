import React, { useState } from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";
import Category from "./Category";

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

  const categories = [];
  let ingredients = [];

  for (let i = 0; i < data.CATEGORIES.length; i++) {
    categories.push({
      title: data.CATEGORIES[i].title,
      img: data.CATEGORIES[i].image,
      id: data.CATEGORIES[i].id,
    });
  }

  const categoryClickHandler = (title) => {
    console.log("Item clicked");
  };

  return (
    <div>
      {ingredients.map((ingredient) => (
        <Category
          key={ingredient.id}
          title={ingredient.title}
          img={ingredient.img}
          onClick={categoryClickHandler}
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
