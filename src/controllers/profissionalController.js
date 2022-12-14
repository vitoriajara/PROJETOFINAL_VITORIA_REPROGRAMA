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
            unidade_de_atendimento: profissional.endereco

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
 
const buscarProfissional = async (req, res) => {
    const { nome } = req.query;

    let query = { };

    if (nome) query.nome = new RegExp(nome, 'i');

    try{
        const pacientes = await profissionalSchema.find(query);
        res.status(200).json(pacientes)

    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
}


const obterProfissionalPorId = async (req, res) => {
    try {
        const profissional = await profissionalSchema.findById(req.params.id)
        res.status(200).json(paciente);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const deletarProfissional = async(req, res) =>{
    try{
        const profissional = await profissionalSchema.findById(req.params.id)

        await profissional.delete();

        res.status(200).json({
            mensagem: `Cadastro do profissional deletado com sucesso.`
        })
    }catch(error){
        res.status(400).json({
            mensagem: error.message
        })
    }
}

module.exports = {
    casdatrarProfissional,
    buscarProfissional,
    obterProfissionalPorId,
    deletarProfissional
}
