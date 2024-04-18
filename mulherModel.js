const mongoose = require('mongoose')

mulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    imagem: {
        type: String,
        require: true
    },
    citacao: {
        type: String,
        require: true
    },
    minibio: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('diva', mulherSchema)