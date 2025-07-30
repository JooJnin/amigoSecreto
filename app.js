let listaNomes = [];
let objEntrada = document.getElementById("amigo");

function validarEntrada(entrada) {
    if(entrada == ""){
        return false;
    }
    return true;
}

function adicionarAmigo() {
    if (validarEntrada(objEntrada.value)){
    }
    else {
        alert('insira um nome');
    }
    console.log('teste empty string');
}

function sortearAmigo() {
    
}