

let lista= document.getElementById('lista');

let num = parseInt(lista.dataset.number)

let dados = "LISTA";

for (let i = 0; i < num; i++){
    dados += '<li>' + i + '</li>';
}

lista.innerHTML = dados;