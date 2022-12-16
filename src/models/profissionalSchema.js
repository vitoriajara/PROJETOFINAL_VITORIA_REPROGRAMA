const mongoose = require('mongoose');

const profissionalSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    coren: {
        type: String,
        required: false,
       

    },
    crm: {
        type: String,
        required: false,
        

    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true
    },
    data_de_nascimento: {
        type: String,
        required: true,
    },
    unidade_de_atendimento: {
        type: {
            rua: String,
            bairro: String,
            numero: String,
            cep: String,
            municipio: String,
            estado: String,
            pais: String
        },
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Profissional", profissionalSchema)