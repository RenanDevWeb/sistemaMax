const express = require('express');
const app = express();
const port = 3000
const connection = require('./database/database')
const bodyParser = require('body-parser')
const Cliente = require('./database/Cliente')
const UserLogin = require('./database/Userlogin')

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


connection.authenticate()
    .then(() => { console.log("Conectado ao banco de dados")})
    .catch((err) => { console.error(err)})



app.get('/', (req,res)=>{
    res.render('login');
})


app.get('/login', (req,res)=>{
    const nome = req.body.nome;
    const password = req.body.senha;
    UserLogin.findAll()
    .then(dados => {
        if(dados.name === nome && dados.password === password){
            res.redirect('index')
        }else
            res.redirect('login') 
        
    }
       )
    res.render('index')

})

app.get('/cadastroUser',(req,res) => {
    res.render('cadastroUser')
})


app.get('/usuarios' , (req,res) => {
    UserLogin.findAll().then(actions => {
        res.render('usuarios',{
            dados: actions,
        });
    })
});






app.post('/cadastroUser', (req,res)=>{
    const nome = req.body.nome;
    const password = req.body.senha;
    const perfil = req.body.perfil;
    UserLogin.create({
        name:nome,
        password: password,
        perfil: perfil
    }).then(()=> res.redirect('/usuarios')).catch((err) => console.log(err))
    
})





app.get('/index',(req,res) => {
    Cliente.findAll().then(action => {
        res.render('index',{
            actions: action
        });
    })
  
})


app.get('/cadastrarcliente',(req,res) => {
    res.render('cadastrarcliente')
})





app.post('/adicionar',(req,res)=> {
    const nome = req.body.nome;
    const telefone1 = req.body.telefone1;
    const telefone2 = req.body.telefone2;
    const email = req.body.email;
    const cpf = req.body.cpf;

    Use.create({
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