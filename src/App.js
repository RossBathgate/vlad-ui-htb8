import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import constants from "./constants";
import axios from "axios";
import Header from "./components/Header/Header";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import RecommendedRecipes from "./components/RecommendedRecipes/RecommendedRecipes";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";
import { Fragment } from "react/cjs/react.production.min";
import CurrentIngredients from "./components/CurrentIngredients/CurrentIngredients";

function App() {
  const [currentPage, setCurrentPage] = useState(constants.pages.ingredients);
  const [recipes, setRecipes] = useState(null);
  const [chosenIngredients, setChosenIngredients] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const getAPIRecipes = async () => {
      let urlParams = new URLSearchParams();
      chosenIngredients.forEach((ingredient) => {
        urlParams.append("ingredients", ingredient.title);
      });
      const res = await axios.get(constants.backend.getRecipes, {
        params: urlParams,
      });
      if (res) {
        setRecipes(res.data);
      }
    };
    getAPIRecipes();
  }, [chosenIngredients]);

  // api/getRepices
  // call this api and use the chosenIngredients to form the request string.

  const ingredientSelectedHandler = (ingredient) => {
    setChosenIngredients((prev) => {
      if (prev.some((elem) => elem.id === ingredient.id)) {
        return prev;
      } else {
        return [...prev, { id: ingredient.id, title: ingredient.title }];
      }
    });

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
        <Header
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          isSecondPageDisabled={recipes === null || recipes.length === 0}
          onSearch={setSearchKeyword}
          searchVal={searchKeyword}
        />

        {currentPage === constants.pages.ingredients && (
          <Fragment>
            <IngredientContainer
              onIngredientSelected={ingredientSelectedHandler}
              searchKeyword={searchKeyword}
              onClearSearch={() => setSearchKeyword("")}
            />
            {chosenIngredients.length > 0 && (
              <CurrentIngredients
                chosenIngredients={chosenIngredients}
                onRemoveIngredient={removeIngredientHandler}
              />
            )}
            {recipes !== null && recipes.length > 0 && (
              <RecommendedRecipes
                recipes={recipes}
                onPageChange={setCurrentPage}
              />
            )}
          </Fragment>
        )}

        {currentPage === constants.pages.recipies && (
          <RecipeContainer recipes={recipes} /> //DO NOT USE THE TEMP..  need to do some processing here from api call...
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
