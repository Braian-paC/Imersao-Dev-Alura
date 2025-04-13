function Quiz() {
  // Função para sumir o botão
  const botao = document.getElementById("start-button")
  botao.style.display = "none"

  // PARTE 1: Lista de perguntas e respostas
  perguntas = [
    {
      pergunta: "Qual o nome verdadeiro do Frog?",
      respostas: [
        { opcao: "Sapo", correta: false },
        { opcao: "Glenn", correta: true },
        { opcao: "Stuart", correta: false }
      ]
    },
    {
      pergunta: "Quantas formas tem o Lavos, antes de entrar em sua forma final?",
      respostas: [
        { opcao: "12", correta: false },
        { opcao: "5", correta: false },
        { opcao: "9", correta: true }
      ]
    },
    {
      pergunta: "Quantos finais tem Chrono Trigger?",
      respostas: [
        { opcao: "13", correta: true },
        { opcao: "Um único final", correta: false},
        { opcao: "8", correta: false}
      ]
    },
    {
      pergunta: "Qual a data de lançamento de Chrono Trigger?",
      respostas: [
        { opcao: "13 de abril de 1995", correta: false},
        { opcao: "11 de março de 1995", correta: true},
        { opcao: "20 de junho de 2001", correta: false}
      ]
    },
    {
      pergunta: "Quem criou o videogame Chrono Trigger?",
      respostas: [
        { opcao: "Hayao Miyazaki", correta: false},
        { opcao: "Yasunori Mitsuda", correta: true},
        { opcao: "Akira Toriyama", correta: false}
      ]
    }
  ];

  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");

  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos

  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correta) {
          // Corrigido aqui: use "correta" conforme a chave no JSON
          acertos++; // Incrementa o contador de acertos corretamente
        }

        // Avança para a próxima pergunta
        indiceAtual++;

        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };

      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }

  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }

  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
}