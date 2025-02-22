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

//FUNÇÃO PARA SORTEAR OS NOMES NA LISTA
function sortearAmigo() {
   if (listaAmigos.length === 0) {
      alert("Insira alguns nomes para sortear");
   } else {
      let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
      let amigoAleatorio = listaAmigos[indiceAleatorio];
      atualizarSorteado(amigoAleatorio);
   }
}

//FUNÇÃO ATUALIZAR O AMIGO SORTEADO
function atualizarSorteado(amigoAleatorio) {
   let sorteado = document.getElementById("resultado");
   sorteado.innerHTML = (`Seu amigo sorteado é ${amigoAleatorio}`)
}
