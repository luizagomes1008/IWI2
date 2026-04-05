//a) Crie uma funçao que receba dois númerose retorne o maior deles.
function maior(x, y) {
    if (x > y) {
        return x;
    };
    if (y > x) {
        return y
    }
}

// let xis = number(prompt("fala um  numero agora!!!!!!!!!!!!!!!!!!!!!!!!!!!"))
// let ypsilon = number(prompt("fala outro numero ae!!!!!!!!!!!!!!!"))
let xis = 5;
let ypsilon= 9;

let funcao= maior(xis, ypsilon)
alert ("entre ambos, o maior é: "+funcao);


//b)Escreva uma função que receba um número e retorne true se ele for par e false caso contrário.
function numero(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

alert (numero(9))

//c) Desenvolva uma função que calcule o fatorial de um número.
function fatorial(num) {
    let fatorial = 1;

    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    return fatorial
}

alert(fatorial(6))


//d) Crie uma função que receba uma lista de números e retorne a média deles.

function media(numLista) {
    let i=0;
    let soma= 0;
    while (i<numLista.length) { //emquanto a posicao inicial exitir ate a posicao final (quantidade de n na lista)
    soma = soma +numLista[i];
    i++;
}
    let resultado = soma/numLista.length

    return resultado
}

alert(media([6, 5, 2, 8, 2]))
 

//e) implemente uma função que converta uma temperatura de Celsius para Fahreheint
Faren=0
function conversao(temperaturaC) {
    let Faren = temperaturaC*1.8+32;        
    return Faren
}
alert(conversao(26))
