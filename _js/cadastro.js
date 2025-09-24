var modal = document.querySelector(".json-informacoes");

function validarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const nomeRegex = /^[A-Za-zÀ-ú \'-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telRegex = /\(\d{2}\)\s\d{4,5}\-\d{4}/;

    if (!nomeRegex.test(nome)) {
        alert('Digite seu nome corretamente!');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Erro ao colocar o email');
        return false;
    }

    if (!telRegex.test(telefone)) {
        alert('Erro ao colocar o telefone');
        return false;
    }

    window.location.href = "./index.html";
    return true;

}

function converterJson() {

    modal.style.display = 'flex';

    const dadosJson = {};

    dadosJson.nome = document.querySelector('#nome').value;
    dadosJson.email = document.querySelector('#email').value;
    dadosJson.telefone = document.querySelector('#telefone').value;
    dadosJson.idade = document.querySelector('#idade').value;
    dadosJson.turma = document.querySelector('#turma').value;
    dadosJson.esporte = document.querySelector('.esporte').value;
    dadosJson.novidade = document.querySelector('#radio-escolha').value;

    const json = JSON.stringify(dadosJson);

    document.getElementById("texto-div").innerHTML = json;


}

document.getElementById("fechar").addEventListener('click', function () {

    modal.style.animation = "modal-fechar 0.25s ease-out";


    const loop = setInterval(() => {

        modal.style.display = 'none';
        
    }, 220);

    

});