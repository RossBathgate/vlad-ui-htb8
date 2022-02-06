import React, { useRef, useState } from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import constants from "./constants";
import Header from "./components/Header/Header";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import RecommendedRecipes from "./components/RecommendedRecipes/RecommendedRecipes";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";
import { Fragment } from "react/cjs/react.production.min";

function App() {
  const [currentPage, setCurrentPage] = useState(constants.pages.ingredients);
  const [recommendedRecipies, setRecommendedRecipies] = useState(null);
  const [chosenIngredients, setChosenIngredients] = useState([]);

  //TEMP
  const temporaryRecommendedRecipies = [
    {
      id: 0,
      title: "My Recipe 1",
      image:
        "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
    },
    {
      id: 1,
      title: "My Recipe 2",
      image:
        "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
    },
    {
      id: 2,
      title: "My Recipe 3",
      image:
        "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
    },
  ];

  const temporaryRecipies = [
    {
      id: 0,
      title: "My Recipe 1",
      image: "../placeholder.jpg",
      information: "Some info here...",
      ingredients: "ingredients here",
      method: "method",
    },
    {
      id: 1,
      title: "My Recipe 1",
      image: "../placeholder.jpg",
      information: "Some info here...",
      ingredients: "ingredients here",
      method: "method",
    },
    {
      id: 2,
      title: "My Recipe 1",
      image: "../placeholder.jpg",
      information: "Some info here...",
      ingredients: "ingredients here",
      method: "method",
    },
  ];

  // api/getRepices
  // call this api and use the chosenIngredients to form the request string.

  const ingredientSelectedHandler = (ingredient) => {
    console.log("Adding ingredient to state...");
    setChosenIngredients((prev) => [
      ...prev,
      { id: ingredient.id, title: ingredient.title },
    ]);

    // need to update the recommended recipies here
  };

  return (
    <Style.MainContainer>
      <Style.MainContent>
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />

        {currentPage === constants.pages.ingredients && (
          <Fragment>
            <IngredientContainer
              onIngredientSelected={ingredientSelectedHandler}
            />
            <RecommendedRecipes recipes={temporaryRecommendedRecipies} />
            {/* (ABOVE) REPLACE tempR..R.. with the state variable*/}
          </Fragment>
        )}

        {chosenIngredients.map((ingredient) => (
          <p key={ingredient.id}>{ingredient.title}</p> //error with the state probably
        ))}

        {currentPage === constants.pages.recipies && (
          <RecipeContainer recipes={temporaryRecipies} /> //DO NOT USE THE TEMP..  need to do some processing here from api call...
        )}
      </Style.MainContent>
    </Style.MainContainer>
  );
}

export default App;

const Style = {
  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  MainContent: styled.div`
    width: 100%;

    ${breakpoint("tablet")`
      width: 70%;
    `}

    ${breakpoint("desktop")`
      width: 50%;
    `}
  `,
};
