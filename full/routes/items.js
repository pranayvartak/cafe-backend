var express = require('express');
const Item = require('../models/Item');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req,res)=> res.json( await Item.find()) );
router.get('/:id', async(req,res)=> res.json( await Item.findById(req.params.id)) );
router.post('/', async(req,res)=> res.json( await Item.create(req.body)) );
router.put('/:id', async(req,res)=> res.json( await Item.findByIdAndUpdate(req.params.id,req.body)) );
router.delete('/:id', async(req,res)=> res.json( await Item.findByIdAndDelete(req.params.id)) );


module.exports = router;
