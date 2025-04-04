alert("Por favor, utilize os botões!")

function ouro_prata(){
  let ouro = prompt("Digite o valor: ");
  ouro = Number(ouro);
  let prata = 12*ouro;
  alert(ouro.toFixed(2)+" moedas de ouro equivalem a "+prata.toFixed(2)+" moedas de prata!");
}

function prata_cobre(){
  let prata = prompt("Digite o valor: ");
  prata = Number(prata);
  let cobre = 20*prata;
  alert(prata.toFixed(2)+" moedas de prata equivalem a "+cobre.toFixed(2)+" moedas de cobre!");
}

function cobre_ouro(){
  let cobre = prompt("Digite o valor: ");
  cobre = parseFloat(cobre);
  let ouro = 0.00446*cobre;
  alert(cobre.toFixed(2)+" moedas de cobre equivalem a "+ouro.toFixed(2)+" moedas de ouro!");
}