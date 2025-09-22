function validarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const idade = document.getElementById('idade').value;
    const turma = document.getElementById('turma').value;
    const esporte = document.getElementById('esporte').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telRegex = /\(\d{2}\)\s?\d{4,5}-\d{4}/; 

    if (!emailRegex.test(email)) {
        console.log('Erro ao colocar o email');
        return false;
    }

    if (!telRegex.test()) {
        console.log('Erro ao colocar o telefone');
        return false;
    }
    
}

