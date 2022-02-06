const constants = {
  pages: { ingredients: 0, recipies: 1 },
  backend: {
    getIngredients:
      "https://htb-vlad-backend.herokuapp.com/api/getAllIngredients",
    getRecipes:
      "http://htb-vlad-backend.herokuapp.com/api/getRecipesFromIngredients",
  },
};

export default constants;
