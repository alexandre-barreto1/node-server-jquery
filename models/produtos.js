const mongoose = require('mongoose');
const Produto = mongoose.Schema({

    nome: {
        type: String
    },
    valor: {
        type: Number
    },
    qtd: {
        type: Number
    }
});
module.exports = mongoose.model('produtos',Produto);
