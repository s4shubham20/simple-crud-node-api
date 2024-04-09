const express = require('express');
const {getProduct, setProduct, singleProduct, updatedProduct, deleteProduct} = require('../controllers/product.controller.js');
const router = express.Router();

router.get('/', getProduct);
router.get('/:id', singleProduct);
router.post('/', setProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);

module.exports = router;