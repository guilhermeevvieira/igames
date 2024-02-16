let controleEditar = 0;

async function mostraVendas() {
  const response = await fetch("http://localhost:3300/igames");
  const json = await response.json();

  json.forEach((venda) => {
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    li.innerHTML = li.innerHTML = `
        <span id="${venda.id}">${venda.id}</span>
        <span id="${venda.nome}">${venda.nome}</span> 
        <span id="${venda.codigo}">${venda.codigo}</span> 
        <span id="${venda.valor}"> R$${venda.valor},00</span> 
        <span id="${venda.pagamento}">${venda.pagamento}</span> 
        <span id="${venda.data}">${venda.data}</span> 
        <span id="${venda.cliente}">${venda.cliente}</span>
        <div class="button">
        <input class="b" id="" onclick="editar('${venda.id}','${venda.nome}','${venda.codigo}','${venda.valor}','${venda.pagamento}','${venda.dataEdit}','${venda.cliente}')" type="button" value="editar">
        <input class="b" id="" onclick="apagar('${venda.id}')" type="button" value="excluir">
        </div> 
        `;

    ul.appendChild(li);
  });
}
function editar(id, nome, codigo, valor, pagamento, data, cliente) {

  document.getElementById("nomeJogo").value = nome;
  document.getElementById("data").value = data;
  document.getElementById("codigo").value = codigo;
  document.getElementById("valor").value = valor;
  document.getElementById("pagamento").value = pagamento;
  document.getElementById("cliente").value = cliente;
  document.getElementById("cadastro").innerText = "atualizar";
  controleEditar = 1;
  document.getElementById("cadastro").addEventListener("click", async () => {
    mudar(id);
  });

}
async function mudar(id) {
  const nomeJogo = document.querySelector(".nomeJogo").value;
  const data = document.querySelector(".data").value;
  const codigo = document.querySelector(".codigo").value;
  const valor = document.querySelector(".valor").value;
  const pagamento = document.querySelector(".pagamento").value;
  const cliente = document.querySelector(".cliente").value;

  const hoje = new Date(data);

  const dia = hoje.getDate().toString().padStart(2, "0");
  const mes = (hoje.getMonth() + 1).toString().padStart(2, "0"); // Mês começa do zero, então adicionamos 1
  const ano = hoje.getFullYear();

  const dataFormatada = `${dia}-${mes}-${ano}`;
  const dataFormatadaEdit = `${ano}-${mes}-${dia}`;

  const venda = {
    cliente: cliente,
    pagamento: pagamento,
    data: dataFormatada,
    nome: nomeJogo,
    valor: valor,
    codigo: codigo,
    dataEdit: dataFormatadaEdit,
  };

  const response = await fetch(`http://localhost:3300/igames/${id}`, {
    method: "PUT",
    body: JSON.stringify(venda),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
async function apagar(id) {
  const response = await fetch(`http://localhost:3300/igames/${id}`, {
    method: "DELETE",
  });
}
mostraVendas();

async function adicionaVendas(evento) {
  if (controleEditar == 0) {
    evento.preventDefault();
    const nomeJogo = document.querySelector(".nomeJogo").value;
    const data = document.querySelector(".data").value;
    const codigo = document.querySelector(".codigo").value;
    const valor = document.querySelector(".valor").value;
    const pagamento = document.querySelector(".pagamento").value;
    const cliente = document.querySelector(".cliente").value;

    const hoje = new Date(data);

    const dia = hoje.getDate().toString().padStart(2, "0");
    const mes = (hoje.getMonth() + 1).toString().padStart(2, "0"); // Mês começa do zero, então adicionamos 1
    const ano = hoje.getFullYear();

    const dataFormatada = `${dia}-${mes}-${ano}`;
    const dataFormatadaEdit = `${ano}-${mes}-${dia}`;

    const venda = {
      cliente: cliente,
      pagamento: pagamento,
      data: dataFormatada,
      nome: nomeJogo,
      valor: valor,
      codigo: codigo,
      dataEdit: dataFormatadaEdit,
    };

    const response = await fetch("http://localhost:3300/igames", {
      method: "POST",
      body: JSON.stringify(venda),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
