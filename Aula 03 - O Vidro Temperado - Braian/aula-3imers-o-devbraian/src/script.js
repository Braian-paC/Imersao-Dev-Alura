console.log("Rode o código pelo botão 'Play'")
function VidroTemperado(){
  rodada = 1
  vitoria = 0
  while (rodada <= 3){
    rodada += 1
    escolhaJogador = prompt("Nível "+(rodada-1)+", escolha um vidro (1, 2 ou 3)")
    pisoQuebrado = Math.floor(Math.random()*3) +1

    if (escolhaJogador == pisoQuebrado){
      alert('Acho que você já era amigo(a).')
      rodada = 4
    }
    else if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
      alert('Não tente trapacear! Comece tudo do zero.')
      rodada = 4
    }
    else {
      vitoria += 1
      if (vitoria == 3) {
        alert("Você ganhou o jogo do Vidro Temperado, parabéns!")
      }
      else if (vitoria < 3) {
        alert("Perfeito, siga em frente!")
      } 
    }
  }
}