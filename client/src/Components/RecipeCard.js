export default function RecipeCard({ recipe }) {
const ingredients = recipe.ingredients.split(',')

  return (
    <div key={recipe.id}>
      <div className="container max-w-sm rounded overflow-hidden shadow-lg  ">
        <img className="w-full aspect-[5/4] hue-rotate-15" src={recipe.image} alt={recipe.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-5">{recipe.name}</div>
          <p className="text-gray-700 text-base">{ingredients.map((ingredient) =>
          <div key ={ingredient}> {ingredient}</div>)}</p>

        </div>
        <div class="px-6 pt-4 pb-2">
       
        </div>
        </div>
      </div>
  
    
  );
}



