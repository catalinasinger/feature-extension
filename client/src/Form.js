function IngredientForm() {
  return (
    <div className="form">
     <h1> Ingredients</h1>

     <label><h3>ingredient1</h3></label>
     <checkbox>1</checkbox>
     <checkbox>2</checkbox>
     <checkbox>3</checkbox>
     <checkbox>4</checkbox>
     
     <label><h3>ingredient2</h3></label>
     <checkbox>1</checkbox>
     <checkbox>2</checkbox>
     <checkbox>3</checkbox>
     <checkbox>4</checkbox>


     <label><h3>ingredient3</h3></label>
     <checkbox>1</checkbox>
     <checkbox>2</checkbox>
     <checkbox>3</checkbox>
     <checkbox>4</checkbox>

    </div>
  );
}

//will onsubmit cover all checkboxes  ??
//overflow scroll for checkboxes

export default IngredientForm;
