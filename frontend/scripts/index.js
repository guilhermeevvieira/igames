    async function mostraVendas() {
    const response = await fetch("http://localhost:3300/igames");
    const json = await response.json();
    console.log(json);

    json.forEach(venda => {
        var ul = document.querySelector('ul');
        var li = document.createElement('li');
        li.innerHTML = li.innerHTML = `
        <span>${venda.id}</span>
        <span>${venda.nome}</span> 
        <span>${venda.codigo}</span> 
        <span> R$${venda.valor},00</span> 
        <span>${venda.pagamento}</span> 
        <span>${venda.data}</span> 
        <span>${venda.cliente}</span> 
        `
        ul.appendChild(li);
    })
}
mostraVendas()

async function adicionaVendas(evento) {
    evento.preventDefault();
    const nomeJogo = document.querySelector('.nomeJogo').value;
    const data = document.querySelector('.data').value;
    const codigo = document.querySelector('.codigo').value;
    const valor = document.querySelector('.valor').value;
    const pagamento = document.querySelector('.pagamento').value;
    const cliente = document.querySelector('.cliente').value;

    const venda = {
        cliente: cliente,
        pagamento: pagamento,
        data: new Date(data).toLocaleDateString('pt-br'),
        nome: nomeJogo,
        valor: valor,
        codigo: codigo
    }

    const response = await fetch("http://localhost:3300/igames", {
        method: "POST",
        body: JSON.stringify(venda),
        headers: {
            'Content-Type': 'application/json'
        },

    });
}

