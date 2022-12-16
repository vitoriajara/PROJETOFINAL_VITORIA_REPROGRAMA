const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String, 
        required: true
    },
    numero_cartao_sus: {
        type: String,
        required: true,
        unique: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    idade: {
        type: Number,
        required: true
    },
    telefone: {
        type: String, 
        required: true
    },
    data_de_nascimento:{
        type: String,
        required: true
    },
    endereco: {
        type: {
            rua: String,
            bairro: String,
            numero: String,
            cep: String,
            municipio: String, 
            estado: String,
            pais: String,
        }, 
        required: true
    },
    dados_antropometricos:{
        type: {
            peso: String,
            altura: String,
            idade_gestacional: String,
        },
        required: true
    },
   
   
}, { timestamps : true })

module.exports = mongoose.model("Paciente", pacienteSchema)