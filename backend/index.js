const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const URL = "http://localhost:3000"

app.use(bodyParser.json());

app.get('/igames', async (req,res) => {
    
    const response = await fetch(`${URL}/vendas`);
    const json = await response.json();
    
    res.json(json)

})

app.post('/igames', async (req,res) =>{

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