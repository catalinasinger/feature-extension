var express = require('express');
var router = express.Router();
var db=require('../model/helper')

/* GET recipes listing. */
router.get('/', async function(req, res, next) {
try {
  const response = await db ('select * from recipes;')

  res.send({recipes:response.data})
} catch (error) {
res.status(500).send()
}
});

//get one recipe
router.get('/:id', async function(req, res, next) {
  const params= req.params
  const id = paramas.id

  const results = await db ("select * from recipes where id = ${id}")

  const recipes = results.data
  const recipe = recipe [0]

  if (!recipe){
    res.status = (404).send()
    return
  }

  res.send =({recipes})
});


module.exports = router;
