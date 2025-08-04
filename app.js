//lista nomes tem a relação ID : nome
//listaIDS se usa o Math.random para sortear o numero do index e acessar listaNomes 
let listaNomes = {'sorteado':'sorteado'};
let listaIDS = [];
let notFirstTime = false;
let qntPessoas = 0;

//
let objEntrada = document.getElementById("amigo");
let listFriends = document.getElementById("listaAmigos");
let resultado = document.getElementById('resultado');

//gera ID para pintar nomes sorteados e utilizar o botão remover
function gerarID(nome){

    let newID = nome;
    
    //adiciona um 'a' no começo se o ID já existir no objeto listaNomes
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

//gerada dinamicamente na criação dos elementos em adicionarAmigo()
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
        
        //define ID para ambos elementos serem removidos
        //
        //acredito que possa ser feito com div para executar apenas uma vez
        //tanto aqui quanto em removerAmigo()
        button.setAttribute('onclick',`removerAmigo('${idName}')`);
        listItem.setAttribute('id',`${idName}`);
        
        button.innerText = 'Remover';
        listItem.innerText = `${entradaInput}`;

        listItem.appendChild(button);
        listFriends.appendChild(listItem);

        qntPessoas++;
    }
    else {
        alert('insira um nome');
    }
}

function sortearAmigo() {
    //caso seja primeira vez sorteado, esse if não executará
    //porque não há childNode dentro do UL de classe 'resultado'
    //uma alternativa é verificar se o innerText dessa UL seja vazio
    if (notFirstTime) {
        let toChangeLI = document.getElementById('sorteado');
        
        resultado.removeChild(toChangeLI);
    }
    notFirstTime = true;
    
    //sorteia cor, e numero dentre a quantidade de nomes na lista
    //recebe nome pelo index da listaIDS > listaNomes
    let bColor = parseInt(Math.random() * 16777215);
    let numSorteio = parseInt(Math.random() * qntPessoas);
    let txtResultado = document.createElement('li');
    let amigoSorteado = document.getElementById(`${listaIDS[numSorteio]}`);
    
    txtResultado.setAttribute('id','sorteado');
    
    //se a lista para o sorteio estiver vazia isso não executara
    //acredito que seja um vestigio de codigo macarrao e que existe forma melhor de fazer isso
    if(amigoSorteado != null){
        amigoSorteado.style.backgroundColor = '#' + bColor.toString(16);
        
        txtResultado.innerText = listaNomes[[listaIDS[numSorteio]]];
    }else{
        alert('Nenhum amigo na Lista');
    }

    resultado.appendChild(txtResultado);
}