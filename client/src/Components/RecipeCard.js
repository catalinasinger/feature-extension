import { useEffect, useState } from "react";

function RecipeCard({recipe}) {
const [ingredients,setIngredients] = useState([]);

    const fetchData = () => {
        return fetch(`http://localhost:5050/ingredients/${recipe.id}`)
          .then((response) => response.json())
          .then((data) => setIngredients(data));
          console.log(ingredients)
      };
    
      useEffect(() => {
        fetchData();
      }, []);


  return (
    <div key={recipe.id}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={recipe.image} alt={recipe.name} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{recipe.name}</div>
          <p class="text-gray-700 text-base">{ingredients.map((ingredient) =>
          <div key ={ingredient.id}> {ingredient.text}</div>)}</p>


        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #text
          </span>
        </div>
      </div>
    </div>
  );
}


export default RecipeCard;
