// Criar uma lista com 3 jogadores

Time1 = ["", "", ""]
Time2 = ["", "", ""]

forcaTime1 = 0
forcaTime2 = 0

Time2_nomes = ["Magus", "Lavos", "Ozzie", "SCP-682 - The Reptyle", "Phoenix", "Kil'Jaeden", "Arthas", "Blademaster", "Slenderman", "Demon Hunter"]

for (let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do personagem "+(i+1)+": ")
  Time1[i] = escolhaPersonagem
  // Calcular a força de cada jogador e depois somar para saber a força do time.
  forcaTime1 += Math.floor(Math.random()*10)+1
  indiceAleatorio = Math.floor(Math.random()*10)
  Time2[i] = Time2_nomes[indiceAleatorio]
  forcaTime2 += Math.floor(Math.random()*10)+1
}

alert("Agora o Time 1 contém os personagens: "+Time1)

alert("Agora o Time 2 contém os personagens: "+Time2)
// Comparar os dois times para saber qual deles venceu
if (forcaTime1 > forcaTime2) {
  alert("Parabéns, você venceu do time do computador!")
  alert("Força do seu time: "+forcaTime1+"\nForça do time do computador: "+forcaTime2)
}
else if (forcaTime2 > forcaTime1) {
  alert("Bom, infelizmente você perdeu para o computador.")
  alert("Força do seu time: "+forcaTime1+"\nForça do time do computador: "+forcaTime2)
}
else {
  alert("Por incrível que pareça, ambos os times são muito fortes!")
  alert("Força de ambos os times: "+forcaTime1)
}