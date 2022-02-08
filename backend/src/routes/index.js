const { Router } = require('express');

const products = require('./products');
const create = require('./create');



const router = Router();


router.use('./products', products); 
router.use('./create', create); 

 

module.exports = router;
