import { useEffect, useState } from "react";

function IngredientsData() {
  const [ingredients, setIngredients] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5050/ingredients")
      .then((response) => response.json())
      .then((data) => setIngredients(data.ingredients));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>{ingredient.name}</div>
      ))}
    </div>
  );
}
export default IngredientsData;



