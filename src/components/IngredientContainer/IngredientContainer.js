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
        image:
          "https://thumbs.dreamstime.com/z/rainbow-love-heart-background-red-wood-60045149.jpg",
        ingredients: [
          {
            title: "onion",
            id: 100,
            image:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            vegetarian: 1, //1 true, 0 false
            vegan: 1,
          },
          {
            title: "pepper",
            id: 101,
            image:
              "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
            vegetarian: 1,
            vegan: 1,
          },
        ],
      },
      {
        title: "HERBS AND SPICES",
        id: 7,
        image:
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
