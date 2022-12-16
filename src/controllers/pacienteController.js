
const PacienteSchema = require("../models/pacienteSchema");

const casdatrarPaciente = async (request, response) => {
    try {
        const paciente = request.body
        const pacienteSalvar = new PacienteSchema({
            nome: paciente.nome,
            numero_cartao_sus: paciente.numero_cartao_sus,
            cpf: paciente.cpf,
            idade: paciente.idade,
            telefone: paciente.telefone,
            data_de_nascimento: paciente.data_de_nascimento,
            endereco: paciente.endereco,
            dados_antropometricos: paciente.dados_antropometricos

        })
        console.log(pacienteSalvar)
        const pacienteSalvo = await pacienteSalvar.save();
        return response.status(201).json({
            paciente: pacienteSalvo
        })

    } catch (error) {
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const obterTodosPacientes = async (request, response) => {
    try {
        const pacientes = await PacienteSchema.find()

        return response.status(200).json({ message: `Encontramos ${pacientes.length} pacientes.`, pacientes })


    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}


const obterPaciente = async (req, res) => {
    const { nome, numero_cartao_sus, cpf } = req.query;
    console.log(numero_cartao_sus)

    let query = {};

    if (nome) {
        query.nome = new RegExp(nome, 'i');
    }
    else if (numero_cartao_sus) {
        query.numero_cartao_sus = numero_cartao_sus
    }
    else if (cpf) {
        query.cpf = new RegExp(cpf, 'i');
    }

    try {
        const pacientes = await PacienteSchema.find(query);
        res.status(200).json(pacientes)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const obterPacientePorId = async (req, res) => {
    try {
        const paciente = await PacienteSchema.findById(req.params.id)
        res.status(200).json(paciente);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const atualizarPaciente = async (request, response) => {
    const { id } = request.params
    const paciente = request.body
    const pacienteBuscado = await PacienteSchema.findById(id)
    if (!pacienteBuscado) {
        return response.status(404).send({
            message: `Paciente com o ${id} não encontrado!`
        })
    }


    pacienteBuscado.nome = paciente.nome
    pacienteBuscado.numero_cartao_sus = paciente.numero_cartao_sus
    pacienteBuscado.cpf = paciente.cpf
    pacienteBuscado.idade = paciente.idade
    pacienteBuscado.telefone = paciente.telefone
    pacienteBuscado.data_de_nascimento = paciente.data_de_nascimento
    pacienteBuscado.endereco = paciente.endereco
    pacienteBuscado.dados_antropometricos = paciente.dados_antropometricos




    const pacienteAtualizado = await pacienteBuscado.save()


    response.status(200).send(pacienteAtualizado)
}

const deletarPaciente = async (req, res) => {
    try {
        const paciente = await PacienteSchema.findById(req.params.id)

        await paciente.delete();

        res.status(200).json({
            mensagem: `Cadastro da paciente deletado com sucesso.`
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


module.exports = {
    casdatrarPaciente,
    obterPaciente,
    obterTodosPacientes,
    obterPacientePorId,
    atualizarPaciente,
    deletarPaciente
}
