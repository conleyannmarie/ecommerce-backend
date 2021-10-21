const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({ 
    include: [Product],
  })
  .then((categoryOutput) => {
    res.json(categoryOutput);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
