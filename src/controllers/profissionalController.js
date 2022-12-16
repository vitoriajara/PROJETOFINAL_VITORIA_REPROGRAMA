const ProfissionalSchema = require("../models/profissionalSchema");

const casdatrarProfissional = async (request, response) => {
    try {
        const profissional = request.body
        const profissionalSalvar = new ProfissionalSchema({
            nome: profissional.nome,
            coren: profissional.coren,
            crm: profissional.crm,
            cpf: profissional.cpf,
            telefone: profissional.telefone,
            data_de_nascimento: profissional.data_de_nascimento,
            unidade_de_atendimento: profissional.unidade_de_atendimento

        })
        console.log(profissionalSalvar)
        const profissionalSalvo = await profissionalSalvar.save();
        return response.status(201).json({
            profissional: profissionalSalvo
        })

    } catch (error) {
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const obterTodosProfissionais = async (request, response) => {
    try {
        const profissionais = await ProfissionalSchema.find()

        return response.status(200).json({ message: `Encontramos ${profissionais.length} profissionais.`, profissionais })


    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const obterProfissional = async (req, res) => {
    const { nome, coren, crm, cpf } = req.query;
    console.log(coren)

    let query = {};

    if (nome) {
        query.nome = new RegExp(nome, 'i');
    }
    else if (coren) {
        query.coren = coren
    }
    else if (crm) {
        query.crm = crm
    }
    else if (cpf) {
        query.cpf = new RegExp(cpf, 'i');
    }

    try {
        const profissional = await ProfissionalSchema.find(query);
        res.status(200).json(profissional)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const obterProfissionalPorId = async (req, res) => {
    try {
        const profissional = await ProfissionalSchema.findById(req.params.id)
        res.status(200).json(profissional);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const atualizarProfissional = async (request, response) => {
    const { id } = request.params
    const profissional = request.body
    const profissionalBuscado = await ProfissionalSchema.findById(id)
    if (!profissionalBuscado) {
        return response.status(404).send({
            message: `Profissional com o ${id} não encontrado!`
        })
    }


    profissionalBuscado.nome = profissional.nome
    profissionalBuscado.coren = profissional.coren
    profissionalBuscado.crm = profissional.crm
    profissionalBuscado.cpf = profissional.cpf
    profissionalBuscado.telefone = profissional.telefone
    profissionalBuscado.data_de_nascimento = profissional.data_de_nascimento
    profissionalBuscado.unidade_de_atendimento = profissional.unidade_de_atendimento
   
    const profissionalAtualizado = await profissionalBuscado.save()


    response.status(200).send(profissionalAtualizado)
}


const deletarProfissional = async (req, res) => {
    try {
        const profissional = await ProfissionalSchema.findById(req.params.id)

        await profissional.delete();

        res.status(200).json({
            mensagem: `Cadastro do profissional deletado com sucesso.`
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

module.exports = {
    casdatrarProfissional,
    obterTodosProfissionais,
    obterProfissional,
    obterProfissionalPorId,
    atualizarProfissional,
    deletarProfissional
}
