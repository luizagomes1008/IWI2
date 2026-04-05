
function parimpar() {
     let num0 = prompt("Escolha um número !")
     if (num0 % 2 !== 0) {
         alert("O número é Impar")
     }else{ 
         alert("O número é Par")
  }
   
}
function maior() {
    let num = prompt("Qual sua idade !")
    if (num >= 18) {
        alert("você é de maior")
    }else{ 
        alert("você é de menor")
    }
}
function regressiva() {
    var l = prompt("escolha um numero para a contagem regressiva");
    while (l) {
    let alerta= console.log(l);
    l--;
    alert(l)
    
}
    
}
function contagem() {
    for (let i = 0; i < 11 ; i++) {
    alert(i);
    
}

}
function tabuada() {
    var num1 = prompt("escolha um numero por favor:");
for (let numm = 0; numm < 11 ; numm++) {
    let multicla = num1 * numm;
    alert(multicla);    
}

}
function somatorio() {
    var num2 = prompt("escolha um numero por favor:"); 
    for (let n = 0 ; n<= num2 ; n++) {
      let ad = 0+ n;
      alert(ad);
}
    
}
function primo() {
    let numero5 = Number(prompt("Digite um número:"));
let primo = true;

if (numero5 <= 1) {
  primo = false;
} else {
  for (let i = 2; i < numero5; i++) {
    if (numero5 % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  alert("O número é primo.");
} else {
  alert("O número não é primo.");
}

    
}
function login(params) {
    let usuarioCorreto = "gloss";
let senhaCorreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

while (usuario !== usuarioCorreto || senha !== senhaCorreta) {
  alert("Usuário ou senha incorretos. Tente novamente.");
  usuario = prompt("Digite o usuário:");
  senha = prompt("Digite a senha:");
}

alert("Login realizado com sucesso!");
    
}
function positivo(params) {
    let total = 0;
let numero6 = Number(prompt("Digite um número positivo (negativo para parar):"));

while (numero6 >= 0) {
  total += numero6;
  numero6 = Number(prompt("Digite outro número positivo (negativo para parar):"));
}

alert("A soma total é " + total);
    
}
function adivinhar(params) {
    let secreto = 2;
let palpite = Number(prompt("Adivinhe o número de 1 a 10:"));

while (palpite !== secreto) {
  if (palpite < secreto) {
    alert("HUuuuuum... o número secreto é maior.");
  } else {
    alert("HUuuuuum... o número secreto é menor.");
  }

  palpite = Number(prompt("Tente de novo:"));
}

alert("Ebaaa! Você acertou!!!!!!!");
    
}
function fatorial(params) {
    let num7 = Number(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 1; i <= num7; i++) {
  fatorial *= i;
}

alert("O fatorial de " + num7 + " é " + fatorial);
    
}
function notas(params) {
    let nota= parseFloat(prompt("Digite um número de 0 a 10."))
while (nota>10 || nota<0) {
    let nota= parseFloat(prompt("DIGITE UM NÚMERO DE 0 ATÉ 10!"))
    if (nota<=10 && nota>=0){
        alert("isso!!!")
        break
    }
}
    
}
function media(params) {
    let n1 = prompt("Fale a primeira nota.");
let n2 = prompt("Fale a segunda nota.");
let n3 = prompt("Fale a terceira nota.");

let media= (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3

if (media>=7) {
    alert("a sua média é "+ media +", você foi aprovado!!!!")
} else {
     alert("a sua média é "+ media +", você foi reprovado!")
}

    
}
function caixa(params) {
    let valor=prompt("Fala um valor ai para sacar");

for (valor ; valor>=100; valor=valor-100) {
    alert("nota de 10")
}
for (valor ; valor>=50; valor=valor-50) {
    alert("nota de 50")
}
for (valor ; valor>=20; valor=valor-20) {
    console.log("nota de 20")
}
for (valor ; valor>=10; valor=valor-10) {
    console.log("nota de 10")
}
for (valor ; valor>=5; valor=valor-5) {
    console.log("nota de 5")
}
for (valor ; valor>=2; valor=valor-2) {
    console.log("nota de 2")
}
for (valor ; valor>=1; valor=valor-1) {
    console.log("nota de 1")
}
    
}
function nums(params) {
    let secImpar = prompt("Digite um número.")

console.log("Atividade 15");

for (var NuImp = 1; NuImp <= secImpar; NuImp=NuImp+2) {
    alert(NuImp);
    //alert(NuImp)
}
    
}