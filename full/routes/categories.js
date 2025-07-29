var express = require('express');
const Category = require('../models/Category');
var router = express.Router();

/* GET users listing. */
router.get('/category', async(req,res)=> res.json( await Category.find()) );
router.post('/category', async(req,res)=> res.json( await Category.create(req.body)) );


module.exports = router;
