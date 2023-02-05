import { useEffect, useState } from "react";
import IngredientsData from "./IngredientsData";

function RecipesPage() {
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
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
 
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={recipe.image} alt={recipe.name}/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{recipe.name}</div>
    <p class="text-gray-700 text-base">
      text 1
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#text</span>
  </div>
</div>


  
        </div>
      ))}
    </div>
  );
}
export default RecipesPage;
