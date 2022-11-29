// Booleano
var vOuf = false;
console.log(typeof(vOuf));

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String
var nome = nome;
console.log(typeof(nome));

// Como declarar
var variavel;
console.log(variavel);

// Funcion
var funcao = function() {}
console.log(typeof(funcao));

// Como declarar
var variavel = 'diana';
variavel = 'marcelo';
console.log(variavel);

// Let
let variavel2 = 'diana';
variavel2 = 'marcelo';
console.log(variavel2);

// Const
const variavel3 = 'diana';
variavel3 = 'marcelo'; // Const não pode ser alterada;
console.log(variavel3);

// Scopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno);

escopoLocal();

// Atribuição
var atribuicao = 'diana';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação Idêntica
var comparacaoIdentica = '0' == '0';
console.log(comparacaoIdentica);

// Adição
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 2 - 1;
console.log(subtracao);

// Multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// Divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 5 < 2;
console.log(menorQue);

// Maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// Menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);
