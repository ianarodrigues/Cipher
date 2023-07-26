# Cifra de César

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Sobre o tema e usuários](#3-sobre-o-tema-e-usuários)
- [4. Protótipo](#4-protótipo)
- [5. Interface do projeto e objetivos alcançados](#5-interface-do-projeto-e-objetivos-alcançados)
- [6. Instruções de uso](#6-instruções-de-uso)
- [7. Especificações Técnicas](#7-especificações-técnicas)
- [8. Melhorias futuras](#8-melhorias-futuras)

---

## 1. Prefácio

O projeto em questão é uma aplicação web criada como parte do bootcamp da Laboratória, em que o seu principal objetivo é cifrar e/ou decifrar um texto fornecido pelo usuário através do navegador, indicando um deslocamento específico dos caracteres.

O projeto baseou-se na cifra de César, que é uma das técnicas mais simples de cifrar uma mensagem. A cifra de césar é uma cifra por substituição em que cada letra é substituída por outra levando em consideração o número fornecido para deslocamento dos caracteres. Por exemplo, se usarmos o deslocamento de 2 posições, a palavra “LABORATORIA” seria “NCDQTCVQTKC”.

<p align="center">
<img src="thumb.png" alt="Cifra de César" />
</p>

## 2. Resumo do projeto

O Universo Secreto é uma aplicação web que permite a codificação e decodificação de mensagens secretas que são enviadas entre amigos e foi inspirada na língua dos pês em que muitas crianças e adolescentes a utilizavam para comunicar entre si. Com isso, a intenção ao escolher este tema foi resgatar essa brincadeira de infância através da codificação e decodificação da mensagem.

Dessa forma, o projeto foi desenvolvido com a finalidade de criar um local para que amigos possam conversar sem que outras pessoas saibam sobre o que estão falando, apenas quem tem a chave (deslocamento) poderá acessar a mensagem e decifrá-la.

### Os objetivos gerais deste projeto são os seguintes

- Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
- Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
- Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
- Implementar controle de versão com git (e a plataforma github)

## 3. Sobre o tema e usuários

Os principais usuários do Universo secreto são adolescentes que desejam enviar uma mensagem “secreta” para os seus amigos, assim como na língua dos pês em que só quem sabia falar conseguia entender o que o amigo estava dizendo, no Universo secreto, apenas quem tiver posse da chave e da mensagem codificada conseguirá decodificar a mensagem e ter acesso às informações contidas nela.

O maior objetivo deste projeto é oferecer segurança e praticidade para os usuários quando precisarem enviar mensagens confidenciais para os seus amigos, assegurando que apenas o destinatário tenha acesso às informações descritas na mensagem.

## 4. Protótipo

O protótipo foi desenvolvido levando em consideração ao que iria remeter à:

- Universo secreto;
- Mistério;
- Segredo;
- Temática lúdica voltada para o público, que são adolescentes.

Com isso, as cores que foram utilizadas com maior predominância foram: preto, roxo e azul. Justamente por abarcar os pontos citados acima, para remeter ao mistério, segredo, algo que ainda não foi explorado e por isso também a escolha do background que remete à um universo a ser explorado. A definição da tipografia utilizada nos títulos, teve como objetivo remeter à uma carta, algo escrito à mão.

**Protótipo da tela inicial:**

<p align="center">
<img src="Página inicial - Comece por aqui.png" width="700px" alt="Protótipo da tela inical" />
</p>

## 5. Interface do projeto e objetivos alcançados

A interface do projeto foi idealizada para trazer mais privacidade ao usuário no que se refere ao momento de codificar ou decodificar a mensagem, com isso, foi definido que em uma página o usuário deverá informar a mensagem a ser codificada ou decodificada e na página seguinte ele conseguirá visualizá-la codificada ou decodifica, a depender da sua escolha, conferindo maior privacidade à mensagem escrita anteriormente.

De modo geral, o projeto foi idealizado para ser fácil e intuitivo de ser utilizado, em que os usuários consigam facilmente codificar e decodificar a mensagem sem gerar dúvidas de como prosseguir.

[✔] Possui uma interface que possibilita criptografar e descriptografar.  
[✔] Permite ao usuário escolher o número de deslocamento.  
[✔] Aceitação de letras maiúsculas  
[✔] Outros caracteres são mantidos (como pontuação, espaços)  
[✔] Testes unitários dos métodos cipher (encode e decode).

## 6. Instruções de uso

Para usar o Universo secreto, o usuário terá acesso na primeira página às informações sobre o que é o Universo secreto. Ao clicar em “Comece por aqui!”, o usuário passará para a próxima página onde deverá escolher a chave numérica para o deslocamento dos caracteres, ele poderá escolher a chave em conjunto com o receptor da mensagem ou sozinho.

Para escrever a mensagem, basta clicar em “Escreva a sua mensagem secreta” que será direcionado para a próxima página, onde poderá contar o seu segredo e escolher entre codificar a mensagem clicando no botão “Codificar” ou em “Decodificar” para decodificar a mensagem, assim que o usuário clicar em um dos dois botões, ele será direcionado para a página que mostrará a mensagem codificada ou decodificada, a depender da sua escolha. Após isso, o usuário deverá compartilhar a chave, a mensagem e o link para que o amigo consiga decodificar a mensagem.

Ao final da página, caso queira codificar ou decodificar outra mensagem, poderá clicar no botão “Escrever outra mensagem” que será direcionado para a página inicial.

## 7. Especificações Técnicas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- HTML5
- CSS
- JavaScript
- Visual Studio Code
- GitBash
- GitHub

## 8. Melhorias futuras

Algumas ideias para futuras melhorias:

- Adicionar um botão de cópia para a área de transferência para facilitar a cópia da mensagem criptografada ou descriptografada;
- Adicionar um botão "redefinir" para limpar os campos de entrada e saída;
- Adicionar suporte para letras minúsculas.

## Autores

- **Iana Rodrigues** - <a href="https://github.com/ianarodrigues"> @ianarodrigues</a>
