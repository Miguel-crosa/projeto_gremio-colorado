let imagem = document.getElementById("ronaldo");
let imagem2 = document.getElementById("um");
let imagem3 = document.getElementById("dois");
let imagem4 = document.getElementById("tres");
let ronaldo = document.getElementById("roblox");
let body = document.body;
let imagensCima = document.getElementById("imagens-cima");
let imagensBaixo = document.getElementById("imagens-baixo")
let miguel = document.querySelector(".miguel");
let trovao = document.querySelector(".trovao");

let num = 0;
var num2 = 0;

imagem.addEventListener("click", function () {

    num += 1;

    if (num % 2 == 0) {
        imagem.src = './_imagens/unnamed.png';
        imagem.style.width = '13.5%';
    }
    else {
        imagem.src = '_imagens/1000024925.jpg';
        imagem.style.width = '17%';
    }

});

imagem2.addEventListener("click", function () {

    num2 += 1;

    if (num2 > 1) {
        num2 -= 1;
    }
});

imagem3.addEventListener("click", function () {

    num2 += 1;

    if (num2 > 2) {
        num2 -= 1;
    }
});


imagem4.addEventListener("click", function () {

    num2 += 1;

    if (num2 > 3) {
        num2 -= 1;
    } else if (num2 == 3) {
        ronaldo.style.display = 'flex';
        ronaldo.style.animation = 'roblox-animation 5s linear';
        trovao.play();

        const intervalo = setTimeout(() => {
            ronaldo.style.display = 'none';
            ronaldo.style.animation = 'none';
            num2 = 0;
        }, 5001);

    }

    else {
        miguel.play();
        alert("ronaldo");
    }
});