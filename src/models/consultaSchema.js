const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    triagem: {
        type: String,
        required: false
    },
    id_profissional: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profissional',
        required: false
    },
    tipo_de_consulta: {
        type: String,
        required: true
    },
    data_da_consulta: {
        type: String,
        required: true
    },
    descricao_consulta: {
        type: String,
        required: true
    },
    exames_realizados: {
        type: String,
        required: false
    },
    prescricao_consulta: {
        type: String,
        required: false
        },
    evolucao_consulta: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Consulta", consultaSchema)