import RecipeCard from "./RecipeCard";

export default function RecipesFiltered({ filteredRecipes }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {filteredRecipes.map((recipe) => (
<RecipeCard key={recipe.id} recipe={recipe} />  
      ))}
    </div>
  )
}

