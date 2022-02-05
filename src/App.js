import React, { useState } from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import constants from "./constants";
import Header from "./components/Header/Header";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import RecommendedRecipes from "./components/RecommendedRecipes/RecommendedRecipes";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";

function App() {
  const [currentPage, setCurrentPage] = useState(constants.pages.ingredients);

  return (
    <Style.MainContainer>
      <Style.MainContent>
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />

        {currentPage === constants.pages.ingredients && (
          <div>
            <IngredientContainer />
            <RecommendedRecipes />
          </div>
        )}

        {currentPage === constants.pages.recipies && <RecipeContainer />}
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
