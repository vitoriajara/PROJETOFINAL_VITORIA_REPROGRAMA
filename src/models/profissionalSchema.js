const mongoose = require('mongoose');

const profissionalSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    coren: {
        type: String,
        required: false
    },
    crm: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: true
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
        }
    }
}, { timestamps: true })

module.exports = mongoose.model("Profissional", profissionalSchema)