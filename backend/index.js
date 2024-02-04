const express = require('express');
const bodyParser = require('body-parser');

const cors = require("cors")
const app = express();
const URL = "http://localhost:3000"


app.use(cors())
app.use(bodyParser.json());

app.get('/igames', async (req,res) => {
    
    const response = await fetch(`${URL}/vendas`);
    const json = await response.json();
    
    res.json(json)

})

app.post('/igames', async (req,res) =>{

    console.log(req.body);
    const response = await fetch(`${URL}/vendas`, {
        method:'POST',
        body:JSON.stringify(req.body)
    });
    const json = await response.json();

    res.json(json)
});

const port = 3300;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});