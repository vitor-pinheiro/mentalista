var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3

while(tentativas > 0){
  var chute = parseInt(prompt("Digite um número de 0 a 10"))
  if(chute == numeroSecreto){
    alert("Acertou!!")
    break
  } else if(chute < numeroSecreto){
    alert("O número secreto é maior.")
    tentativas--
  } else {
    alert("O número secreto é menor.")
    tentativas--
  }
}

if(chute != numeroSecreto){
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}