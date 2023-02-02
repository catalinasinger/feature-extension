var express = require('express');
var router = express.Router();
var db=require('../model/helper')

/* GET users listing. */
router.get('/', async function(req, res, next) {
try {
  const response = await db ('select * from recipes;')

  res.send({recipes:response.data})
} catch (error) {
res.status(500).send()
}
});

module.exports = router;
