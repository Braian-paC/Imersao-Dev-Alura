// Criar uma lista com 3 jogadores

let Time1 = ["", "", ""]
let Time2 = ["", "", ""]

forcaTime1 = 0
forcaTime2 = 0

Time2_nomes = ["Magus", "Lavos", "Ozzie", "SCP-682 - The Reptyle", "Phoenix", "Kil'Jaeden", "Arthas", "Blademaster", "Slenderman", "Demon Hunter"]

c = 1


function Heroi_1() {
  const heroInput = document.getElementById("HeroiInput")
  const textoInput = heroInput.value
  Time1[c-1] = textoInput
  
  forcaTime1 += Math.floor(Math.random()*10)+1
  indiceAleatorio = Math.floor(Math.random()*10)
  Time2[c-1] = Time2_nomes[indiceAleatorio]
  forcaTime2 += Math.floor(Math.random()*10)+1
  
  c ++
  document.getElementById("HeroiInput").value=""
  
  if (c > 3){
    alert('Membros do seu Time: '+Time1[0]+", "+Time1[1]+" e "+Time1[2])
    alert('Membros do Time do BOT: '+Time2[0]+", "+Time1[2]+" e "+Time2[2])
    
    if (forcaTime1 > forcaTime2) {
      alert('Parabéns, você venceu!')
      alert('Sua força: '+forcaTime1+"\nForça do BOT: "+forcaTime2)
    }
    else if (forcaTime2 > forcaTime1) {
      alert('Perdeu pra um bot.')
      alert('Sua força: '+forcaTime1+"\nForça do BOT: "+forcaTime2)
    }
    else{
      alert('Por incrível que pareça deu empate! Ambos são igualmente fortes!')
    }
    
    c = 1
  }
}

const inputElement = document.getElementById("HeroiInput")

inputElement.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    Heroi_1()
  }
})
