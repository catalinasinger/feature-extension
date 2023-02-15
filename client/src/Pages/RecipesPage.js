import { useEffect, useState } from "react";
import RecipesDisplay from "../Components/RecipesDisplay";

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
    <RecipesDisplay recipes={filteredRecipes} />
   </>
  )
}



