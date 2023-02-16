import { useState, useEffect } from "react";
import RecipesForm from "../Components/RecipesForm";
import RecipesDisplay from "../Components/RecipesDisplay";
import IngredientsCheckBox from "../Components/IngredientsCheckBox";

export default function HomePage({ query }) {
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
    {query ? 
    <RecipesDisplay recipes={filteredRecipes} />
    :
    <RecipesForm />
    }
   </>
  );
  }
  

  