import RecipeCard from "./RecipeCard";

function RecipesDisplay ({ recipes }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
<RecipeCard key={recipe.id} recipe={recipe} />  
      ))}
    </div>
  );
}
export default RecipesDisplay;
