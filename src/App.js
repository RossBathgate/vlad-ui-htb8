import React, { useRef, useState } from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import constants from "./constants";
import Header from "./components/Header/Header";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import RecommendedRecipes from "./components/RecommendedRecipes/RecommendedRecipes";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";
import { Fragment } from "react/cjs/react.production.min";
import CurrentIngredients from "./components/CurrentIngredients/CurrentIngredients";

function App() {
  const [currentPage, setCurrentPage] = useState(constants.pages.ingredients);
  const [recommendedRecipies, setRecommendedRecipies] = useState(null);
  // const [chosenIngredients, setChosenIngredients] = useState([
  //   { id: 2, title: "hey" },
  //   { id: 3, title: "parsley" },
  //   { id: 4, title: "red turnip" },
  // ]);
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
      image:
        "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
      information: "Some info here...",
      ingredients: "ingredients here",
      method: "method",
    },
    {
      id: 1,
      title: "My Recipe 1",
      image:
        "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      information: "Some info here...",
      ingredients: "ingredients here",
      method: "method",
    },
    {
      id: 2,
      title: "My Recipe 1",
      image:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80",
      information: "Some info here...",
      ingredients: "ingredients here",
      method: "method",
    },
  ];

  // api/getRepices
  // call this api and use the chosenIngredients to form the request string.

  const ingredientSelectedHandler = (ingredient) => {
    setChosenIngredients((prev) => [
      ...prev,
      { id: ingredient.id, title: ingredient.title },
    ]);

    // need to update the recommended recipies here
  };

  const removeIngredientHandler = (ingredientID) => {
    setChosenIngredients((prev) =>
      prev.filter((elem) => elem.id !== ingredientID)
    );
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
            <CurrentIngredients
              chosenIngredients={chosenIngredients}
              onRemoveIngredient={removeIngredientHandler}
            />
            <RecommendedRecipes
              recipes={temporaryRecommendedRecipies}
              onPageChange={setCurrentPage}
            />
            {/* (ABOVE) REPLACE tempR..R.. with the state variable*/}
          </Fragment>
        )}

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
