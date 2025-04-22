# Jogo da Forca

Bem-vindo ao **Jogo da Forca**, um jogo simples e divertido desenvolvido com HTML, CSS e JavaScript. O objetivo do jogo é adivinhar a palavra secreta antes que suas tentativas acabem. Divirta-se!

---

## Funcionalidades

- **Tela de Login**: O jogador insere seu nome ou nickname antes de iniciar o jogo.
- **Palavra Secreta**: Uma palavra aleatória é sorteada para o jogador adivinhar.
- **Letras Erradas**: Exibição das letras erradas já informadas.
- **Tentativas Restantes**: O jogador tem um número limitado de tentativas para acertar a palavra.
- **Mensagem de Vitória**: Ao acertar todas as letras, o jogador recebe uma mensagem de parabenização com seu nome.
- **Reinício do Jogo**: O jogador pode reiniciar o jogo clicando no botão "Jogar Novamente".

---

## Tecnologias Utilizadas

- **HTML**: Estrutura do jogo.
- **CSS**: Estilização da interface.
- **JavaScript**: Lógica do jogo e interatividade.

---

## Como Jogar

1. **Login**:

   - Insira seu nome ou nickname na tela inicial e clique no botão "Iniciar".
   - Seu nome será salvo no Local Storage e exibido durante o jogo.

2. **Adivinhe a Palavra**:

   - Digite uma letra no campo de entrada e clique no botão "Enviar".
   - Se a letra estiver na palavra secreta, ela será exibida no lugar correto.
   - Caso contrário, a letra será adicionada à lista de letras erradas e você perderá uma tentativa.

3. **Vença o Jogo**:

   - Acerte todas as letras da palavra antes que suas tentativas acabem.
   - Ao vencer, você verá uma mensagem de parabenização com seu nome.

4. **Reinicie o Jogo**:
   - Clique no botão "Jogar Novamente" para reiniciar o jogo com uma nova palavra.

---

## Estrutura do Projeto

- **index.html**: Arquivo principal que contém a estrutura do jogo.
- **style.css**: Arquivo de estilização para a interface do jogo.
- **script.js**: Arquivo que contém a lógica do jogo.

Você pode acessar o jogo diretamente pelo link: [Jogar Jogo da Forca](https://tonygabriel60.github.io/jogo-da-forca/).

**Nota**: As palavras utilizadas no jogo estão disponíveis no DevTools do navegador, dentro do código JavaScript.
