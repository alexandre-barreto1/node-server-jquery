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
});
router.get('/:id', function (req, res, next) {
    let buscaid = req.params.id;
    Produtos.find({_id:buscaid}, function (err,produto) {
        if(err){
            console.log(err,'erro get')
        }
        res.status(200).send(produto)
    })
});
router.post('/save',function(req,res,next){
         let novoProduto = new Produtos(req.body);
         novoProduto.save(function (err,produto) {
             if(err){
                 console.log(err);

             }
             res.json(produto);

         })

});


router.put('/:id', function (req, res, next) {
    Produtos.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
        Produtos.findOne({_id: req.params.id}).then(function (produtos) {
            res.json(produtos);
        });
    });
});
router.delete('/apagar/:id', function (req, res) {

    Produtos.findOneAndRemove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            return;
        }

        res.send(req.params.id);
    });
});

module.exports = router;

