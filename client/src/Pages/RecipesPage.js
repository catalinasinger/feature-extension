import { useEffect, useState } from "react";
import RecipesDisplay from "../Components/RecipesDisplay";
import RecipesFiltered from "../Components/RecipesFiltered";

export default function RecipesPage({ query }) {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    return fetch("http://localhost:5050/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  return (
    <>
    {filteredRecipes ? 
    <RecipesFiltered filteredRecipes={filteredRecipes} />
    :
    <RecipesDisplay recipes={recipes} />
    }
   </>
  )
}



