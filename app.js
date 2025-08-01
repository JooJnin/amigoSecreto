let listaNomes = {'sorteado':'sorteado'};
let listaIDS = [];
let notFirstTime = false;
let qntPessoas = 0;

let objEntrada = document.getElementById("amigo");
let listFriends = document.getElementById("listaAmigos");
let resultado = document.getElementById('resultado');

function gerarID(nome){

    let newID = nome;
    
    //let i = qntPessoas;
    if(newID in listaNomes){
        newID = 'a' + newID;
        
        while(newID in listaNomes){   
            newID = 'a' + newID;
        }
    }
    listaNomes[newID] = nome;
    listaIDS[qntPessoas] = newID;

    return newID;
}

function validarEntrada(entrada) {
    if(entrada == ""){
        return false;
    }
    return true;
}

function removerAmigo(id) {
    let target = document.getElementById(id);

    listaIDS.splice(id in listaNomes,1);
    delete listaNomes[id];
    listFriends.removeChild(target);

    qntPessoas--;
}

function adicionarAmigo() {

    let entradaInput = objEntrada.value;

    if (validarEntrada(entradaInput)){

        let idName = gerarID(entradaInput);
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        
        button.setAttribute('onclick',`removerAmigo('${idName}')`);
        listItem.setAttribute('id',`${idName}`);
    
        button.innerHTML = 'Remover';
        listItem.innerHTML = `${entradaInput}`;
        listItem.appendChild(button);
        listFriends.appendChild(listItem);

        qntPessoas++;
    }
    else {
        alert('insira um nome');
    }
}

function sortearAmigo() {
    if (notFirstTime) {
        let toChangeLI = document.getElementById('sorteado');
        
        resultado.removeChild(toChangeLI);
    }
    notFirstTime = true;
    
    let bColor = parseInt(Math.random() * 16777215);
    let numSorteio = parseInt(Math.random() * qntPessoas);
    let txtResultado = document.createElement('li');
    let amigoSorteado = document.getElementById(`${listaIDS[numSorteio]}`);
    
    txtResultado.setAttribute('id','sorteado');
    
    if(amigoSorteado != null){
        amigoSorteado.style.backgroundColor = '#' + bColor.toString(16);
        
        txtResultado.innerText = listaNomes[[listaIDS[numSorteio]]];
    }else{
        alert('Nenhum amigo na Lista');
    }

    resultado.appendChild(txtResultado);
}