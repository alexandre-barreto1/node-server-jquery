var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Produtos = require('./../models/produtos');
/* GET home page. */
router.get('/', function (req, res, next) {
    Produtos.find({}, function (err,produto) {
        if(err){
            console.log(err,'erro get')
        }
        res.status(200).send(produto)
    })
    res.json({title: 'Express'});
});

module.exports = router;

