var express = require('express');
const order = require('../models/Order');
var router = express.Router();


router.get('/', async(req,res)=> res.json( await order.find()) );
router.get('/:id', async(req,res)=> res.json( await order.findById(req.params.id)) );
router.post('/', async(req,res)=> res.json( await order.create(req.body)) );
router.put('/:id', async(req,res)=> res.json( await order.findByIdAndUpdate(req.params.id,req.body)) );
router.delete('/:id', async(req,res)=> res.json( await order.findByIdAndDelete(req.params.id)) );


module.exports = router;
