let listaNomes = [];

function adicionarAmigo(){
    let limparCampo = document.querySelector('input');
    let nome = document.querySelector('input').value;
    let listaAmigos = document.getElementById('listaAmigos');
    if(nome == ' '){
        alert('Por favor, insira um nome válido')
    }
    else{
        listaNomes.push(nome);
        listaAmigos.innerHTML = listaNomes.join('<br>');
        console.log(listaNomes);
        limparCampo.value = ' '; 
    }
}

function sortearAmigo(){
    if(listaNomes.length <= 1){
        alert('Por favor, adicione pelo menos dois nomes antes de sortear');
    }
    else{
        let valorAmigo = parseInt(Math.random()*(listaNomes.length))
        let amigoSecreto = listaNomes[valorAmigo];
        let resultado = document.getElementById('resultado');
        console.log(valorAmigo);
        listaAmigos.innerHTML = '';
        resultado.innerHTML = `Seu amigo secreto sorteado é ${amigoSecreto}`;
}
}

function resetarLista(){
    listaNomes = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    console.log(listaNomes);
}

