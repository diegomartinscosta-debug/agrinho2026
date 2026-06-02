// Botão Saiba Mais

document.getElementById("btnSaibaMais")
.addEventListener("click", () => {

    document.getElementById("sobre")
    .scrollIntoView({
        behavior: "smooth"
    });

});

// Contador Animado

let contador = document.getElementById("contador");
let valor = 0;
let alvo = 5000;

let animacao = setInterval(() => {

    valor += 50;

    contador.textContent =
    valor.toLocaleString("pt-BR");

    if(valor >= alvo){
        clearInterval(animacao);
    }

}, 20);