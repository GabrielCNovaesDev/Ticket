function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let assentoEscolhido = document.getElementById('tipo-ingresso').value;

    if(assentoEscolhido == 'inferior'){
        comprarInferior(quantidade);
           
    }else if(assentoEscolhido == 'superior'){
        comprarSuperior(quantidade);
        
    }else if(assentoEscolhido == 'pista'){
        comprarPista(quantidade);
    }
}

function comprarPista(qtd){
    let quantidadePista = document.getElementById('qtd-pista'); 

    if(qtd > quantidadePista.textContent){
        alert('Quantidade maior que o permitido');
    } else{
        quantidadePista.innerText -= qtd;
    }
}

function comprarSuperior(qtd){
    let quantidadeSuperior = document.getElementById('qtd-superior'); 

    if(qtd > quantidadeSuperior.textContent){
        alert('Quantidade maior que o permitido');
    } else{
        quantidadeSuperior.innerText -= qtd;
    }

}

function comprarInferior(qtd) {
    let quantidadeInferior = document.getElementById('qtd-inferior');

    if(qtd > quantidadeInferior.textContent){
        alert('Quantidade maior que o permitido');
    } else{
        quantidadeInferior.innerText -= qtd;
    }

}

