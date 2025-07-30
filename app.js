let listaNomes = [];
let qntPessoas = 0;
let indexList = 0;
let objEntrada = document.getElementById("amigo");
let listFriends = document.getElementById("listaAmigos");
let resultado = document.getElementById('resultado');

function validarEntrada(entrada) {
    if(entrada == ""){
        return false;
    }
    return true;
}

function removerAmigo(id) {
    let target = document.getElementById(id);
    listaNomes();
    listFriends.removeChild(target);
    qntPessoas--;
}

function adicionarAmigo() {
    let entradaInput = objEntrada.value;
    if (validarEntrada(entradaInput)){
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        let idName = `friend${indexList}`;
        
        button.setAttribute('onclick',`removerAmigo('${idName}')`);
        listItem.setAttribute('id',`${idName}`);
    
        button.innerHTML = 'Remover';
        listItem.innerHTML = `${entradaInput}`;
        listItem.appendChild(button);
        listFriends.appendChild(listItem);

        listaNomes.push(entradaInput);
        indexList++;
        qntPessoas++;
    }
    else {
        alert('insira um nome');
    }
}

function sortearAmigo() {
    let numSorteio = parseInt(Math.random() * qntPessoas);
    let txtResultado = document.createElement('li');
    //let amigoSorteado = document.getElementById(`friend${numSorteio}`);

    txtResultado.innerText = listaNomes[numSorteio];
    resultado.appendChild(txtResultado);
}