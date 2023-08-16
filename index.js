const express = require('express')
const app = express()
const port = 3333
const array = []

const path = require('path')
const basePath = path.join(__dirname, 'templates')



app.use(express.urlencoded({
    extended: true
})) // Montar um ob. json
app.use(express.json())

//Rota Página Home

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/Home.html`)

})

// Rota para mostrar cursos

app.get('/Curso', (req,res)=>{
    res.sendFile(`${basePath}/Curso.html`)

})


//Rota para mostrar o formulario

app.get('/FormContato', (req, res)=>{
    res.sendFile(`${basePath}/FormContato.html`)

})



//Rota para cadastrar as informações do Formulario

app.post('/user/save', (req,res)=>{
    const {name, numero, age, email} = req.body
    array.push({
        nome: name, 
        number: numero,
        idade: age,
        email: email
    })

    console.log(array)
    // const name = req.body
    // const age = req.body
    // console.log(`Nome: ${nome}, Contato: ${numero}, email: ${email}, Idade: ${age}`)
    res.sendFile(`${basePath}/FormContato.html`)
})


app.listen(port,()=>{
    console.log('servidor rodando...')
  
})