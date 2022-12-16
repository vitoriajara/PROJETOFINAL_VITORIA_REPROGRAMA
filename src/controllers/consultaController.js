const ConsultaSchema = require("../models/consultaSchema");

const descreverConsulta = async (request, response) => {
    try {
        const consulta = request.body
        const consultaSalvar = new ConsultaSchema({
            id_paciente: consulta.id_paciente,
            triagem: consulta.triagem,
            id_profissional: consulta.id_profissional,
            tipo_de_consulta: consulta.tipo_de_consulta,
            data_da_consulta: consulta.data_da_consulta,
            descricao_consulta: consulta.descricao_consulta,
            exames_realizados: consulta.exames_realizados,
            prescricao_consulta: consulta.prescricao_consulta,
            evolucao_consulta: consulta.evolucao_consulta

        })
        console.log(consultaSalvar)
        const consultalSalva = await consultaSalvar.save();
        return response.status(201).json({
            consulta: consultalSalva
        })

    } catch (error) {
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const obterConsultas = async (request, response) => {
    try {
        const consultas = await ConsultaSchema.find()

        return response.status(200).json({ message: `Encontramos ${consultas.length} consultas.`, consultas })


    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const obterconsulta = async (req, res) => {
    const { id_paciente, id_profissional, tipo_de_consulta } = req.query;
 
    let query = {};

    if (id_paciente) {
        query.id_paciente = new RegExp(id_paciente, 'i');
    }
    else if (id_profissional) {
        query.id_profissional = id_profissional
    }
    else if (tipo_de_consulta) {
        query.tipo_de_consulta = tipo_de_consulta
    }

    try {
        const consulta = await ConsultaSchema.find(query);
        res.status(200).json(consulta)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const obterConsultaPorId = async (req, res) => {
    try {
        const consulta = await ConsultaSchema.findById(req.params.id)
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const atualizarConsulta = async (request, response) => {
    const { id } = request.params
    const consulta = request.body
    const consultaBuscada = await ConsultaSchema.findById(id)
    if (!consultaBuscada) {
        return response.status(404).send({
            message: `Consulta com o ${id} não encontrada!`
        })
    }


    consultaBuscada.id_paciente = consulta.id_paciente
    consultaBuscada.triagem = consulta.triagem
    consultaBuscada.id_profissional= consulta.id_profissional
    consultaBuscada. tipo_de_consulta= consulta. tipo_de_consulta
    consultaBuscada.data_da_consulta = consulta.data_da_consulta
    consultaBuscada.descricao_consulta = consulta.descricao_consulta
    consultaBuscada.exames_realizados = consulta.exames_realizados
    consultaBuscada. prescricao_consulta = consulta. prescricao_consulta
    consultaBuscada.evolucao_consulta = consulta.evolucao_consulta
   
    const consultaAtualizada = await consultaBuscada.save()


    response.status(200).send(consultaAtualizada)
}


const deletarConsulta = async (req, res) => {
    try {
        const consulta = await ConsultaSchema.findById(req.params.id)

        await consulta.delete();

        res.status(200).json({
            mensagem: `Esta consulta foi deletada com sucesso`
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}
module.exports = {
    descreverConsulta,
    obterConsultas,
    obterconsulta,
    obterConsultaPorId,
    atualizarConsulta,
    deletarConsulta,
    
}