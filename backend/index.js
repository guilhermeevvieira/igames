const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.json')
const fs = require('fs')

app.use(bodyParser.json());

app.get('/igames', (req,res) => {
    res.json(db)
})

app.post('/igames', (req,res) =>{
    const novaVenda = req.body
    db.vendas.push(novaVenda)
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2))
    res.json(db)
});

const port = 3300;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});