const express = require('express');
const { createCategory, getAllCategory, deleteCategory, updateCategory, createProduct, getAllProduct, deleteProduct, updateProduct } = require('../controlers/webcontroler');


const route = express.Router();

// categories
route.post('/create-category',createCategory);
route.get('/get-all-category',getAllCategory);
route.delete('/delete-category/:id',deleteCategory);
route.post('/update-category/:id',updateCategory);

// Product
route.post('/create-product',createProduct);
route.get('/get-all-product',getAllProduct);
route.delete('/delete-product/:id',deleteProduct);
route.post('/update-product/:id',updateProduct);

module.exports = route