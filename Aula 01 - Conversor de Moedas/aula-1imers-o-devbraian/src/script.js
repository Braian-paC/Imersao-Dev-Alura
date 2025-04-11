console.log("Tá olhando o que aqui no console? APERTA O BOTÃO")

function ouro_prata(){
  let ouro = prompt("Digite o valor: ");
  ouro = parseFloat(ouro);
  let prata = 12*ouro;
  alert(ouro+" moedas de ouro equivalem a "+prata+" moedas de prata!");
}

function prata_cobre(){
  let prata = prompt("Digite o valor: ");
  prata = parseFloat(prata);
  let cobre = 20*prata;
  alert(prata+" moedas de prata equivalem a "+cobre+" moedas de cobre!");
}

function cobre_ouro(){
  let cobre = prompt("Digite o valor: ");
  cobre = parseFloat(cobre);
  let ouro = 0.00446*cobre;
  alert(cobre+" moedas de cobre equivalem a "+ouro+" moedas de ouro!");
}