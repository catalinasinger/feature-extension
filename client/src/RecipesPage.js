import {useEffect, useState} from 'react'

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  
  const fetchData = () => {
    return fetch("http://localhost:5050/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          {recipe.name}
          {/* <img src={recipe.image} alt="" /> */}
        </div>
      ))}
    </div>
  )
}

export default RecipesPage