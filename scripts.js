// Seleciona todos os botões dentro do container (botões de nota)
let buttons = document.querySelectorAll('.container button');

// Seleciona o elemento que mostra a tela de agradecimento
let thanks = document.querySelector('.thanks');

// Cria uma variável para armazenar a nota selecionada (começa em 0)
let rate = 0;


// Loop para percorrer todos os botões de nota
for(let i = 0; i < buttons.length; i++){
    // Adiciona um evento de clique em cada botão
    buttons[i].addEventListener('click', function(){
        cleanButtons(); // Remove a classe 'active' de todos os botões
        buttons[i].classList.add('active'); // Marca o botão clicado como 'active'
        rate = i + 1; // Define a nota escolhida (base 1)
    })
}

// Evento de clique no botão de enviar (btn deve existir no HTML com id="btn")
btn.onclick = function(){
    if(rate != 0){ // Só funciona se uma nota tiver sido escolhida
        thanks.classList.add('active'); // Mostra a tela de agradecimento
        rated.innerText = rate; // Insere a nota escolhida no elemento 'rated'

    }
}

// Função para remover o estado ativo de todos os botões
function cleanButtons(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active'); // Remove 'active'
    }
}
