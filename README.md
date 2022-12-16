# GESTA-CARE

## Tema

Saúde da mulher e tecnologias de facilitação do atendimento na atenção primária à saúde

## Objetivo
Tem como objetivo principal garantir a segurança, continuidade e qualidade das consultas realizadas no pré-natal. 

## Problemática

Na gestação a mulher passa por diversas experiências e mudanças no biológicas e emocionais, nesse sentido a consulta de pré-natal que é realizada na atenção primária à saúde tem como objetivo acolher e proporcionar as melhores condições para essa gestante, a fim de evitar problemas futuros no que diz respeito a saúde da mãe e do bebê. 

A consulta de pré-natal deve ser registrada do início da gestação até o nascimento do bebê e é no cartão da gestante (ou caderneta) que deve ser realizado o registro pelo profissional responsável pelo atendimento, é por meio desta que é realizado o monitoramento e acompanhamento durante a gestação.

No entanto essa ferramenta apresenta fragilidades quanto ao armazenamento desses dados, o extravio ou a perda desse cartão pode causar complicações quanto a continuidade e qualidade do atendimento dessa gestante, visto que diversas unidades de saúde do serviço público no Brasil não apresentam um sistema informatizado de armazenamento de dados ou possuem de maneira obsoleta. 

## Solução proposta 

O projeto proposto trata-se de uma API (Application Programming Interface) que permite a listagem das gestantes que realizam o  pré-natal permitindo que o profissional cadastre e realize o acompanhamento e evolução a cada consulta.

O cadastro da gestante é realizado de maneira simples pelo profissional e é necessário apenas informar dados pessoais básicos, após isso o profissional pode inserir informações obtidas durante o atendimento, o cadastro do profissional também é realizado de maneira simples. Além disso, está disponível aos usuários as funções de editar e deletar dados quando necessário.  


## Tecnologias Utilizadas 

- JavaScript
- Git/GitHub
- NodeJs
- MongoDB Atlas 
- Postman 
- VScode
- Vercel 

## Dependências 

- Express: 4.18.2
- Nodemon: 2.0.20
- Dotenv-safe: 8.2.0
- Mongoose: 6.7.5
- Cors: 2.8.5




## Acessos 

Local: localhost:9780/

Vercel:https://projetofinal-vitoria-reprograma-ezsuxfkg0-vitoriajara.vercel.app/

GitHub: https://github.com/vitoriajara/PROJETOFINAL_VITORIA_REPROGRAMA

Postman: https://documenter.getpostman.com/view/24365052/2s8YzXuer7

### Link - Slide de apresentação 
https://www.canva.com/design/DAFU7wXAg9k/doEskM9nPOs42l4pI77mgQ/view?utm_content=DAFU7wXAg9k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink


## Funcionalidades

- Cadastro, login, atualização e exclusão de usuários
- Cadastro das pacientes que realizam consulta de pré-natal
- Obter todas as pacientes cadastradas
- Obter paciente por nome, número do cartão do sus ou CPF
- Obter paciente por ID  
- Atualizar cadastro da paciente 
- Deletar cadastro da paciente 
- Cadastrar profissional médico ou enfermeiro 
- Obter todos os profissionais cadastrados
- Obter profissional por nome, COREN ou CRM 
- Obter profissional por ID 
- Atualizar cadastro do profissional
- Deletar cadastro do profissional
- Descrever consulta realizada pelo profissional médico ou enfermeiro 
- Obter todas a consultas realizadas
- Obter consultas por meio do ID do paciente, ID do profissional e tipo de consulta 
- Obter consulta por ID 
- Atualizar dados da consulta 
- Deletar registro da consulta 



## 📁 Arquitetura MVC

```
  
📁 PROJETO_FINAL_REPROGRAMA
  |
  |- 📁 src
  |   |
  |- 📁 database
  |         |- 📑 mongoConfig.js
  |   |- 📁 controller
  |         |- 📑 consultaController.js
  |         |- 📑 pacienteController.js
  |         |- 📑 professionalController.js
  |
  |   |- 📁  models
  |         |- 📑 consultaSchema.js
  |         |- 📑 pacienteSchema.js
  |         |- 📑 profeisionalSchema.js
  |
  |   |- 📁 routes
  |         |- 📑 consultaRoutes.js
  |         |- 📑 pacientesRoutes.js
  |         |- 📑 profissionalRoutes.js
  |     
  |
  |   |- 📑 app.js
  |
  |
  |- 📑 .env
  |- 📑 .env.example
  |- 📑 .gitignore
  |- 📑 package-lock.json
  |- 📑 package.json
  |- 📑 README.md
  |- 📑 server.js


```http
  Rotas/pacientes/
```

| Metódo http   | Endpoit      | Retorno                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Post`      | `/paciente/cadastrar` | Cadastrada paciente inserido|
| `Get`      | `/pacientes/` | Retorna todos os pacientes cadastrados  |
| `Get`      | `/paciente/obter` | Possibilita a busca por meio do nome, número cartão do SUS e CPF |
| `Get`      | `/paciente/:id` | Possibilita a busca por meio do ID  |
| `Put`      | `/paciente/:id` | Tem a finalidade de atualizar o cadastro do paciente |
| `Delete`      | `/paciente/:id` | Permite deletar cadastro da paciente |



```http
  Rotas/profissional
```

| Metódo http   | Endpoit      | Retorno                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Post`      | `/profissional/cadastrar` | Cadastrada profissional inserido|
| `Get`      | `/profissionais/` | Retorna todos os profissionais cadastrados  |
| `Get`      | `/profissional/obter` | Possibilita a busca por meio do nome, CRM ou COREN |
| `Get`      | `/profissional/:id` | Possibilita a busca por meio do ID  |
| `Put`      | `/profissional/:id` | Tem a finalidade de atualizar o cadastro do profissional |
| `Delete`      | `/profissional/:id` | Permite deletar cadastro do profissional |


```http
  Rotas/consulta
```

| Metódo http   | Endpoit      | Retorno                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Post`      | `/consulta/cadastrar` | Permite que  a profissional médica ou enfermeira descreva a consulta da paciente |
| `Get`      | `/consultas/` | Retorna todos os consultas inseridas  |
| `Get`      | `/consulta/obter` | Possibilita a busca por meio do ID do paciente, ID do profissional e o tipo da consulta. |
| `Get`      | `/consulta/:id` | Possibilita a busca por meio do ID  |
| `Put`      | `/consulta/:id` | Tem a finalidade de atualizar consultas inseridas |
| `Delete`      | `/consulta/:id` | Permite deletar consulta |



 ## Dados para Collection

 ### Collection consulta 

- ID paciente: gerado automaticamente ao realizar cadastro 
- ID profissional:gerado automaticamente ao realizar cadastro 
- Triagem: texto (Obrigatório)
- Tipo de consulta: texto (Obrigatório)
- Data da consulta: texto (Obrigatório)
- Descrição da consulta: texto (Obrigatório)
- Exames realizados: texto (Obrigatório)
- Prescrição da consulta: texto (Obrigatório)
- Evolução da consulta: texto (Obrigatório)

### Collection paciente
- ID: gerado automaticamente
- Nome: texto (Obrigatório)
- Número do cartão do sus:  texto (Obrigatório)
- CPF:  texto (Obrigatório)
- Telefone: texto (Obrigatório)
- Data de nascimento: texto (Obrigatório)
- Endereço: objeto (Obrigatório)
- Dados antropométricos: objeto (Obrigatório)

### Collection profissional 
- ID: gerado automaticamente
- Nome: texto (Obrigatório)
- CRM:  texto
- COREN: texto 
- CPF:  texto (Obrigatório)
- Telefone: texto (Obrigatório)
- Data de nascimento: texto (Obrigatório)
- Unidade de atendimento: objeto (Obrigatório)
- Dados antropométricos: objeto (Obrigatório)

## API 

### A API deve retornar o seguinte json para pacientes:

```jsx
{
    "nome": "Barbara Lima (exemplo 3)",
    "numero_cartao_sus": "4005000600003",
    "cpf": "33322244403",
    "idade": "23",
    "telefone": "(67) 96556210",
    "data_de_nascimento": "16/11/1999",
    "endereco": {
        "rua": "Rua joão pessoa",
        "bairro": "São Francisco",
        "numero": "500",
        "cep": "79200000",
        "municipio": "Campo Grande",
        "estado": "Mato Grosso do sul",
        "pais": "Brasil"
    },
    "dados_antropometricos": {
        "peso": "58 kg",
        "altura": "1,65",
        "idade_gestacional": "30 semanas"
    }
}
````
### A API deve retornar o seguinte json para profissionais:

```jsx
"message": "Encontramos 3 profissionais.",
    "profissionais": [
        {
            "_id": "639c762e9842b8191247a7aa",
            "nome": "Vitória Jara (Exmeplo 1)",
            "coren": "4005000",
            "crm": "---",
            "cpf": "90280270202",
            "telefone": "(67) 96712556",
            "data_de_nascimento": "16/10/00",
            "unidade_de_atendimento": {
                "rua": "Rua 26 de agosto",
                "bairro": "São Francisco",
                "numero": "600",
                "cep": "79780000",
                "municipio": "Campo GRande",
                "estado": "Mato Grosso do Sul",
                "pais": "Brasil",
                "_id": "639c762e9842b8191247a7ab"
            },
            "createdAt": "2022-12-16T13:44:14.058Z",
            "updatedAt": "2022-12-16T13:44:14.058Z",
            "__v": 0
        },

````

### A API deve retornar o seguinte json para consultas:


```jsx
{
    "message": "Encontramos 1 consultas.",
    "consultas": [
        {
            "_id": "639c79299842b8191247a7c3",
            "triagem": "PA 120x80 mmHg, T 36ºC, FR 18",
            "id_profissional": "639c762e9842b8191247a7aa",
            "tipo_de_consulta": "enfermagem",
            "data_da_consulta": "10/12/2022",
            "descricao_consulta": "Gestante,20 semanas, sem queixas, realizado ausculta dos batimentos cardio fetais 125 Bpm, mensuração da altura uterina ",
            "exames_realizados": "Segunda fase IPED, teste rapidos sifilis, HIV, Hepatite B e C resultados não reagentes",
            "evolucao_consulta": "Paciente sem queixas algicas",
            "createdAt": "2022-12-16T13:56:57.333Z",
            "updatedAt": "2022-12-16T13:56:57.333Z",
            "__v": 0
        }
    ]
}
```
##Implementações futuras

- Implementar autenticação nas rotas de cadastro, atualizar e deletar; 
- Relacionar profissionais e pacientes com regiões de abrangência;
- Implementar interface front-end.

## Considerações 

Portanto espera-se que com a implementação da solução proposta, a API facilite e garanta mais segurança aos pacientes durante os registros realizados pelos profissionais de saúde.


## Autora

Vitória Alaman Jara 

Github - https://github.com/vitoriajara

Dia 16/12/2022

