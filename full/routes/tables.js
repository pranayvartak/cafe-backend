var express = require('express');
const Table = require('../models/Table');
var router = express.Router();


router.get('/', async(req,res)=> res.json( await Table.find()) );
router.get('/:id', async(req,res)=> res.json( await Table.findById(req.params.id)) );
router.post('/', async(req,res)=> res.json( await Table.create(req.body)) );
router.put('/:id', async(req,res)=> res.json( await Table.findByIdAndUpdate(req.params.id,req.body)) );
router.delete('/:id', async(req,res)=> res.json( await Table.findByIdAndDelete(req.params.id)) );


module.exports = router;
