function Crono(){
  escolhaComputador = Math.floor(Math.random() *4) +1
  escolhaJogador = 1
  if (escolhaComputador == escolhaJogador){
    return escolhaComputador;
  }
  if (escolhaComputador == 2){
    alert('Crono arrebata a Lucca.')
  }
  if (escolhaComputador == 3){
    alert('Frog dá uma linguada no Crono.')
  }
  if (escolhaComputador == 4){
    alert('Marle congela seu coração SEVERAMENTE.')
  }
}

function Lucca(){
  escolhaComputador = Math.floor(Math.random() *4) +1
  escolhaJogador = 2
  if (escolhaComputador == escolhaJogador){
    return escolhaComputador;
  }
  if (escolhaComputador == 1){
    alert('Lucca apanha para Crono.')
  }
  if (escolhaComputador == 3){
    alert('Frog vira uma rã torrada.')
  }
  if (escolhaComputador == 4){
    alert('Em briga de muié, quem ganha é a nerdola Lucca puxando a Marle pelo cabelo.')
  }
}

function Frog(){
  escolhaComputador = Math.floor(Math.random() *4) +1
  escolhaJogador = 3
  if (escolhaComputador == escolhaJogador){
    return escolhaComputador;
  }
  if (escolhaComputador == 1){
    alert('Frog saca sua Masamune e acaba degolando propositalmente o seu melhor amigo Crono.')
  }
  if (escolhaComputador == 2){
    alert('Como sempre, a nerdola Lucca pisoteia a rã gigante e incendeia seu cadáver.')
  }
  if (escolhaComputador == 4){
    alert('Uma batalha mais que justa, um Sapo e uma Princesa, Marle e Frog, ambos exaustos decidem desistir e acabam aceitando o empate, um belo e único final feliz.')
  }
}

function Marle(){
  escolhaComputador = Math.floor(Math.random() *4) +1
  escolhaJogador = 4
  if (escolhaComputador == escolhaJogador){
    return escolhaComputador
  }
  if (escolhaComputador == 1){
    alert('Crono contra Marle? Acho que nem preciso dizer que o Crono ganha. (mentira, é primeiro de abril)')
  }
  if (escolhaComputador == 2){
    alert('Duas mulheres brigando, quem vence é Lucca, a nerdola.')
  }
  if (escolhaComputador == 3){
    alert("Uma batalha mais que justa, um Sapo e uma Princesa, Marle e Frog, ambos exaustos decidem desistir e acabam aceitando o empate, um belo e único final feliz.")
  }
}