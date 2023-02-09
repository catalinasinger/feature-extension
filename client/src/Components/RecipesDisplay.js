import { useEffect, useState } from "react";
import IngredientsData from "./IngredientsData";
import RecipeCard from "./RecipeCard";

function RecipesDisplay() {
  const [recipes, setRecipes] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5050/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
<RecipeCard key={recipe.id} recipe={recipe} />  
      ))}
    </div>
  );
}
export default RecipesDisplay;
