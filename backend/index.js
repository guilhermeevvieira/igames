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

app.put('/igames/:id', async (req,res) =>{
    const response = await fetch(`${URL}/vendas/${req.params.id}`,{
        method:'PUT',
        body:JSON.stringify(req.body)
    });
    const json = await response.json();

    res.json(json)
})

app.delete('/igames/:id', async (req,res) =>{
    const response = await fetch(`${URL}/vendas/${req.params.id}`, {
        method:'DELETE'
    });
    const json = await response.json();

    res.json(json);

})

const port = 3300;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});