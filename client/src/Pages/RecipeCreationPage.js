import { useState, useEffect } from "react";
import RecipeCreationForm from "../Components/RecipeCreationForm";
import RecipesDisplay from "../Components/RecipesDisplay";

export default function RecipeCreationPage({ query }) {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    return fetch("http://localhost:5050/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  const handleRecipeAdd = recipe => {
    fetch("http://localhost:5050/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    })
    .then(() => {
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <>
    {query ? 
    <RecipesDisplay recipes={filteredRecipes} />
    :
    <RecipeCreationForm onAdd={handleRecipeAdd}/>
    }
   </>
  );
  }
  



