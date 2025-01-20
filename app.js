let listaAmigos = [];

function adicionarAmigo(){
    let limparCampo = document.querySelector('input');
    let nome = document.querySelector('input').value;
    let lista = document.querySelector('ul');

    if(nome == ' '){
        alert('Nenhum nome foi escrito.')
    }
    else{
        listaAmigos.push(nome);
        lista.innerHTML = listaAmigos.join('<br>');
        console.log(listaAmigos);
        limparCampo.value = ' '; 
    }
}

function sortearAmigo(){
    if(listaAmigos.length <= 1){
        alert('Adicione pelo menos dois nomes.');
    }
    else{
        let vencedor = document.querySelector('ul');
        let valorAmigo = parseInt(Math.random()*(listaAmigos.length))
        let amigoSecreto = listaAmigos[valorAmigo];
        console.log(valorAmigo);
        vencedor.innerHTML = `Seu amigo secreto é ${amigoSecreto}`;
}
}

function resetarLista(){
    listaAmigos = [];
    limpar = document.querySelector('ul');
    limpar.innerHTML = '';
    console.log(listaAmigos);
}

