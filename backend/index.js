const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let igames = {   
        "id": 0,
        "cliente": 'kaynan',
        "pagamento": 'pix',
        "data": '24/01/2024',
        "nome": "gta",
        "valor": 100,
        "codigo": 'DNQFXFOPA'

    }



app.get('/igames', (req,res) => {
    res.json(igames)
})

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})