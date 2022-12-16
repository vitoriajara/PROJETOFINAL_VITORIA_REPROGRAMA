Nome projeto
GESTA-CARE

Link - Slide de aprensentação 

Tema
Saúde da mulher e tecnologias de facilitação do atendimento na atenção primária à saúde
Objetivo
Tem como objetivo principal garantir a segurança, continuidade e qualidade das consultas realizadas no pré-natal. 

Problemática

Na gestação a mulher passa por diversas experiências e mudanças no biológicas e emocionais, nesse sentido a consulta de pré-natal que é realizada na atenção primária à saúde tem como objetivo acolher e proporcionar as melhores condições para essa gestante, a fim de evitar problemas futuros no que diz respeito a saúde da mãe e do bebê. 

A consulta de pré-natal deve ser registrada do início da gestação até o nascimento do bebê e é no cartão da gestante (ou caderneta) que deve ser realizado o registro pelo profissional responsável pelo atendimento, é por meio desta que é realizado o monitoramento e acompanhamento durante a gestação.

No entanto essa ferramenta apresenta fragilidades quanto ao armazenamento desses dados, o extravio ou a perda desse cartão pode causar complicações quanto a continuidade e qualidade do atendimento dessa gestante, visto que diversas unidades de saúde do serviço público no Brasil não apresentam um sistema informatizado de armazenamento de dados ou possuem de maneira defasada. 

Solução proposta 
O projeto proposto trata-se de uma API (Application Programming Interface) que permite a listagem das gestantes que realizam o  pré-natal permitindo que o profissional cadastre e realize o acompanhamento e evolução a cada consulta.

O cadastro da gestante é realizado de maneira simples pelo profissional e é necessário apenas informar dados pessoais básicos, após isso o profissional pode inserir informações obtidas durante o atendimento, o cadastro do profissional também é realizado de maneira simples. Além disso, está disponível aos usuários as funções de editar e deletar dados quando necessário.  

Tecnologias Utilizadas 

- JavaScript
- Git/GitHub
- NodeJs
- MongoDB Atlas 
- Postaman 
- VScode
- Vercel 

Dependências 

- Express: 4.18.2
- Nodemon: 2.0.20
- Dotenv-safe: 8.2.0
- Mongoose: 6.7.5
- Cors: 2.8.5

Funcionalidades

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


Arquitetura da API 

📂 PROJETO-FINAL-REPROGRAMA    
├─ 📂 node_modules
├─ 📂 src 
│  ├─ 📂 controllers
│  │  └─ consultaController.js
│  │  └─ pacienteController.js
│  │  └─ profissionalController.js
│  ├─ 📂 models
│  │  └─ consultaSchema.js
│  │  └─ pacienteSchema.js
│  │  └─ profissionalSchemal.js
│  ├─ 📂 routes
│  │  └─ consultaRouter.js
│  │  └─ consultaRouter.js
│  │  └─ consutaRouter.js
│  └─ app.js
├─ .env
├─ .gitignore 
├─ package-lock.json
├─ package.json
├─ README.md
├─ serve.js
└─ vercel.json
