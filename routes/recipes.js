var express = require('express');
var router = express.Router();
var db=require('../model/helper')

//Get recipes listing
router.get('/', async function(req, res, next) {
try {
  const response = await db ('select * from recipes;')

  res.send({recipes:response.data})
} catch (error) {
res.status(500).send()
}
});

//Get ONE recipe
router.get('/:id', async function(req, res, next) {
  const params = req.params
  const id = params.id

  const results = await db (`select * from recipes where id = ${id}`)

  const recipes = results.data
  const recipe = recipes[0]

  if (!recipe){
    res.status(404).send()
    return
  }

  res.send(recipe)
});

// Create new recipes

router.post("/", async (req, res) => {
  const name = req.body.name
  const image = req.body.url
  const ingredients = req.body.ingredients

  try {
    await db(`INSERT INTO recipes (name, image, ingredients) values ('${name}', '${image}', '${ingredients}');`)
    res.send(201)
  } catch(error) {
    res.status(500).send(error)
  }
});

module.exports = router;
