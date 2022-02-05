import React, { useState } from "react";
import constants from "./constants";
import Header from "./components/Header/Header";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import RecommendedRecipes from "./components/RecommendedRecipes/RecommendedRecipes";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";

function App() {
  const [currentPage, setCurrentPage] = useState(constants.pages.ingredients);

  return (
    <div>
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />

      {currentPage === constants.pages.ingredients && (
        <div>
          <IngredientContainer />
          <RecommendedRecipes />
        </div>
      )}

      {currentPage === constants.pages.recipies && <RecipeContainer />}
    </div>
  );
}

export default App;
