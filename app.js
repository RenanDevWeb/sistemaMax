const express = require('express');
const app = express();
const port = 3000
const connection = require('./database/database')
const bodyParser = require('body-parser')
const Cliente = require('./database/Cliente')

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


connection.authenticate()
    .then(() => { console.log("Conectado ao banco de dados")})
    .catch((err) => { console.error(err)})



app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/dados',(req,res) => {
    Cliente.findAll().then(actions => {
        console.log(actions)
        res.render('dados',{
            actions: actions
        })
    })
})

app.get('/index',(req,res) => {
    Cliente.findAll().then(action => {
        res.render('dados',{
            actions: action
        });
    })
  
})

app.post('/adicionar',(req,res)=> {
    const nome = req.body.nome;
    const telefone1 = req.body.telefone1;
    const telefone2 = req.body.telefone2;
    const email = req.body.email;
    const cpf = req.body.cpf;

    Cliente.create({
        nome:nome,
        telefone1: telefone1,
        telefone2: telefone2,
        email: email,
        cpf: cpf
    }).then(()=> res.redirect('/index')).catch((err) => console.log(err))
})



app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})