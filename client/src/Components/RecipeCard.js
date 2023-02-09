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
      <div className="container mx-auto bg-blue rounded-xl shadow-md border p-2 m-1  ">
        <img className="w-full aspect-[5/4] hue-rotate-15" src={recipe.image} alt={recipe.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-5">{recipe.name}</div>
          <p className="text-gray-700 text-base">{ingredients.map((ingredient) =>
          <div key ={ingredient.id}> {ingredient.text}</div>)}</p>

        </div>
        <div class="px-6 pt-4 pb-2">
       
        </div>
        </div>
      </div>
  
    
  );
}


export default RecipeCard;
