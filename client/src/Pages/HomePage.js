import { useState } from "react";
import RecipesForm from "../Components/RecipesForm";

export default function HomePage({ query }) {
  /*const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((recipes) => [...recipes, newRecipe]);
  };
*/
  return (
    <div>
      <RecipesForm /*onSubmit={addRecipe=(newRecipe) => handleAddRecipe(newRecipe)}*//>
    </div>
  );
  }
  

  