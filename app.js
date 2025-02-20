//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
let campoDeEntrada = document.getElementById('amigo').value.trim();

 if (campoDeEntrada === '') {
    alert("Por favor, insira um nome.");

 } else {
    listaAmigos.push(campoDeEntrada);
    document.getElementById('amigo').value = ''
    console.log(listaAmigos);
 }
}