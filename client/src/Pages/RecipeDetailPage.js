import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../Components/RecipeCard";

export default function RecipeDetailPage() {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(null)
    const {id} = useParams()

  useEffect(() => {
    const fetchRecipes = async () => {
    const url = 'http://localhost:5050/recipes'
    const response = await fetch(url, {
        method: 'GET'
      })
      console.log(response)
      const recipes = await response.json()
      const recipe = recipes.find(recipe => recipe.id === parseInt(id))
      setRecipe(recipe)
      setRecipes(recipes)
    }

    fetchRecipes()
  }, [])

  return (
    <>
    {recipe ?
    <RecipeCard key={recipe.id} recipe={recipe} />  
    : null}
    </>
  )
}
