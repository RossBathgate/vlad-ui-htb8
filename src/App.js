import React from "react";
// import TestComponent from "./components/TestComponent";
import Header from "./components/Header/Header";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import RecommendedRecipes from "./components/RecommendedRecipes/RecommendedRecipes";

function App() {
    return (
        <div>
            <Header />
            <IngredientContainer />
            <RecommendedRecipes />
        </div>
    );
}

export default App;
