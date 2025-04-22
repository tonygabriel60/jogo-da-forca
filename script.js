const palavaras = [
    "computador", "teclado", "mouse", "monitor", "impressora", "scanner", 
    "celular", "tablet", "notebook", "desktop", "internet", "rede", 
    "wifi", "senha", "login", "programa", "codigo", "desenvolvedor", 
    "aplicativo", "jogo", "musica", "video", "foto", "arquivo", 
    "pasta", "documento", "planilha", "apresentacao", "projeto", "equipe"
];
    
let palavraSorteada;
let letrasErradas = [];
let letrasCertas = [];

function sorteiaPalavra() {
    const indice = Math.floor(Math.random() * palavaras.length);
    return palavaras[indice];
}

function preparaPalavra(palavra) {
    const palavraElement = document.getElementById("palavra");
    if (palavraElement) {
        palavraElement.innerHTML = "";
    
        for (let i = 0; i < palavra.length; i++) {
            const span = document.createElement("span");
            span.textContent = "-";
            span.style.marginRight = "10px";
            span.id = `letra-${i}`;
            palavraElement.appendChild(span);
        }
    } else {
        console.error("Elemento 'palavra' não encontrado");
    }
}

function verificaLetra() {
    const letra = document.getElementById("letra").value.toLowerCase();
    if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) {
        alert("Você já informou essa letra!");
        return; 
    }

    let acertou = false;
    for (let i = 0; i < palavraSorteada.length; i++) {
        if (palavraSorteada[i] === letra) {
            acertou = true;
            if (!letrasCertas.includes(letra)) {
                letrasCertas.push(letra); 
            }
            const span = document.getElementById(`letra-${i}`);
            span.textContent = letra;
        }
    }

    if (!acertou) {
        letrasErradas.push(letra);
        const letrasErradasElement = document.getElementById("letras-erradas");
        letrasErradasElement.textContent = letrasErradas.join(",");
    }

    document.getElementById("letra").value = "";

    const letrasUnicas = new Set(palavraSorteada); 
    if (letrasCertas.length === letrasUnicas.size) {
        exibirMensagemVitoria();
    }
}

function exibirMensagemVitoria() {
    const mensagemVitoria = document.getElementById("mensagem-vitoria");
    const nickname = localStorage.getItem("nickname"); 
   
    mensagemVitoria.innerHTML = `
        <h2>Parabéns, ${nickname}! Você venceu!</h2>
        <button id="jogar-novamente">Jogar Novamente</button>
    `;

    mensagemVitoria.style.display = "block"; 
    const enviarButton = document.getElementById("enviar");
    enviarButton.disabled = true; 

    document.getElementById("jogar-novamente").addEventListener("click", function() {
        location.reload(); 
    });
}

document.getElementById("iniciar-jogo").addEventListener("click", function() {
    const nickname = document.getElementById("nickname").value.trim();
    if (nickname === "") {
        alert("Por favor, insira seu nome ou nickname!");
        return;
    }

    localStorage.setItem("nickname", nickname);

    document.getElementById("nome-jogador").textContent = `Jogador: ${nickname}`;

    document.getElementById("login").style.display = "none";
    document.getElementById("jogo").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function() {
    palavraSorteada = sorteiaPalavra(); 
    console.log(palavraSorteada);
    preparaPalavra(palavraSorteada); 
    const enviarButton = document.getElementById("enviar");
    enviarButton.addEventListener("click", verificaLetra);
});