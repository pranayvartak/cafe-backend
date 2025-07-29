var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req,res)=> res.json( await User.find()) );


module.exports = router;
