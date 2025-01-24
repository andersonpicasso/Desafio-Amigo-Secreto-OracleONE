let listaNomes = [];

function adicionarAmigo(){
    let inputCampo = document.querySelector('input');
    let nome = document.querySelector('input').value;
    if(verificarNomeVazio(nome) === true){
        alert('Por favor, insira um nome')
    }
    else{
        if (listaNomes.includes(nome)){
            inputCampo.value = '';
            alert(`O nome ${nome} já está na lista`);}
        else{
            listaNomes.push(nome);
            mostrarNomes();
            inputCampo.value = ''; 
        }
    }
}

function mostrarNomes(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = listaNomes.join('<br>');
}

function sortearAmigo(){
    if(listaNomes.length <= 1){
        alert('Por favor, adicione pelo menos dois nomes antes de sortear');
    }
    else{
        let valorAmigo = parseInt(Math.random()*(listaNomes.length))
        let amigoSecreto = listaNomes[valorAmigo];
        let resultado = document.getElementById('resultado');
        listaAmigos.innerHTML = '';
        resultado.innerHTML = `Seu amigo secreto sorteado é ${amigoSecreto}`;
}
}

function resetarLista(){
    listaNomes = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
}

function verificarNomeVazio(string){
    let veficarString = !string.trim();
    return veficarString;
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        adicionarAmigo();
    }
  });