//LISTA DE AMIGOS
let listaAmigos = [];

//FUNÇÃO PARA ADICIONAR NOMES VALIDOS A LISTA
function adicionarAmigo() {
let campoDeEntrada = document.getElementById("amigo").value.trim();

 if (campoDeEntrada === "") {
    alert("Por favor, insira um nome.");

 } else {
   listaAmigos.push(campoDeEntrada);
    document.getElementById("amigo").value = "";
    atualizarListaDeAmigos();
 }
}

//FUNÇÃO PARA ATUALIZAR A LISTA DE NOMES
function atualizarListaDeAmigos() {
let listagem = document.getElementById("listaAmigos");
listagem.innerHTML = "";
for (let i = 0; i < listaAmigos.length; i++) {
   let item = document.createElement("li");
   item.textContent = listaAmigos[i];
   listagem.appendChild(item);
}
}
