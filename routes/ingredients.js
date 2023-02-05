var express = require('express');
var router = express.Router();
var db=require('../model/helper')

/* GET recipes listing. */
router.get('/', async function(req, res, next) {
try {
  const response = await db ('select * from ingredients;')

  res.send({ingredients:response.data})
} catch (error) {
res.status(500).send()
}
});

//get one recipe
router.get('/:id', async function(req, res, next) {
  const params = req.params
  const id = params.id

  const results = await db (`select * from ingredients where recipe_id = ${id}`)

  const ingredients = results.data
  const ingredient = ingredients

  if (!ingredient){
    res.status(404).send()
    return
  }

  res.send(ingredient)
});


module.exports = router;
