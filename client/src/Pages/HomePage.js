import { useState } from "react";
import RecipesForm from "../Components/RecipesForm";
import IngredientsCheckBox from "../Components/IngredientsCheckBox";

export default function HomePage({ query }) {
  /*const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((recipes) => [...recipes, newRecipe]);
  };
*/
  return (
   <div>
    <RecipesForm />
   </div>
  );
  }
  

  