import { useState } from "react";

export default function RecipesForm(/*{ onSubmit }*/) {
  /*const [recipe, setRecipe] = useState({
    name: "",
    url: "",
    ingredients: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setRecipe((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form button clicked!");
    
    onSubmit(recipe);
    setRecipe({
        name: "",
        url: "",
        ingredients: "", 
  })
};
*/

  return (
    <div class="container mx-auto w-2/6 px-4 py-5">
      <div class="my-4">
        <h2 class= "flex justify-center font-semibold tracking-wide">Drink maker</h2>
      </div>

      <form /*onSubmit={handleSubmit}*/>
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a name" required
          //name="name"
          //value={recipe.name}
          //onChange={(e) => handleInputChange(e)}
          />
        </label>
      </div>

      <div class="mb-6">
        <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <input type="url" id="url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a url image" required
          //name="url"
          //value={recipe.image}
          //onChange={(e) => handleInputChange(e)}
          />
        </label>
      </div>

      <div class="mb-6">
        <label for="ingredients" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <input type="text" id="ingredients" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add ingredients" required
          //name="ingredients"
          //value={recipe.ingredients}
          //onChange={(e) => handleInputChange(e)}
          />
        </label>
      </div>

      <div class="flex justify-center">
        <button 
        type="submit" 
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">Submit
        </button>
      </div>

      </form>
    </div>
  )
}



 
