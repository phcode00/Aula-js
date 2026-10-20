//Linguagem interpretada
//Nodejs
//Tipagem fraca

/*
let minha_variavel = 10;
console.log(minha_variavel);

minha_variavel = "hello, word :)";
console.log(minha_variavel);

minha_variavel = true;
console.log(minha_variavel);

let numero = 10;
let texto = "20";
let resultado = numero + texto;

console.log(resultado)
*/

//Váriavel

//Let - palavra que cria a variável
//const - palavra que cria a variável
//var - palavra que cria a variável

//let idade = 35;
//idade - vai receber valor
//= - atribuição
//35 - valor

/*
let nome = ("Pedro")
let idade1 = (10)

console.log(nome)
console.log(idade1)
console.log(idade1 + 1)
console.log("Olá," + nome + "!")

idade1 = 30
*/

//Case Sensitive
/*
let nome = "pedro"
let Nome = "otavio"
let NOME = "João"

console.log(nome)
console.log(Nome)
console.log(NOME)
*/

//Palavra Reservada
//let, const, var, if, else, for, while, function, return, class, new, switch, case

//Regras de Nomenclatura
//Pode começar com letra, _ ou $
//Pode conter: letras, numeros, _ ou $

/*
let idade = 35
idade = 21
console.log(idade)

const PI = 3.14159

const total = 150

if (total > 150) {
    var desconto = 10
    let frete = 0
}

console.log(frete)
*/

//Tipos Primitivos
//const preco = 19.9;
//console.log(typeof preco);

//const nome = "lucas";
//console.log(typeof nome);

//const ativo = true;
//console.log(typeof ativo);

//const vazio = null;
//console.log(typeof vazio);

//let indefinido;
//console.log(typeof indefinido)

//string e template literals
/*
const nome1 = "pedro";
const nome2 = "lucas";
const nome3 = "felipe";
const idade = 16;

const nomeCompleto = "Pedro Henrique Pereira Neiva";

console.log(nomeCompleto.length); //length =  pra saber o comprimento da string 
console.log(nomeCompleto.toUpperCase()); //toUpperCase = deixa tudo maiusculo sem excessao e colocar () no final da chamada 
console.log(nomeCompleto.toLowerCase()); //toUpperCase = deixa tudo minusculo sem excessao e colocar () no final da chamada

console.log(`Olá, meu nome é ${nomeCompleto} e tenho ${idade} anos.`) //Melhor pratica colocar ``(crase)
*/

//Conversões de tipos 
// console.log(Number("123")); // converter string em numero.
// console.log(parseInt("10.9")); // deixa um numero quebrado em interio
// console.log(parseFloat("10.9")); // deixa um numero quebrado mesmo
// console.log(String(123)); // transformo um numero em string

// console.log(Boolean(0)); // 0 é um falso ou seja false
// console.log(Boolean(1)); // 1 é um True ou seja Verdadeiro

// const texto = prompt("Digite um numero: ");
// const texto1 = Number(prompt("Digite um numero: "));

// console.log(texto1 + 5);

//Arredondamento e formatando números

// const preco = 19.987;

// console.log(preco.toFixed(2)) // toFixed(numero de casas decimais) permite deixar colocar quantas casas decimais quiser
// console.log(Math.round(preco)) // arredonda o numero mais proximo da variavel
// console.log(Math.floor(preco)) // arrendonda para o menor numero da variavel
// console.log(Math.ceil(preco)) // 

// Operador aritmetico
// console.log(2 + 3) //soma
// console.log(5 - 4) //subtração
// console.log(4 * 2) //multiplicação
// console.log(10 / 2) //divisao
// console.log(10 % 3) //resto da divisao
// console.log(2 ** 3) //exponencial

//Operador de comparação
// console.log(5 == "5");//igual frouxo = comparação de valor e não tipo
// console.log(5 == 5); //igaul frouxo

// console.log(5 === "5") ;//igual estrito = compação de tipo e valor
// console.log(5 === 5); //igual estrito

// console.log(5 !== "5"); //diferente estrito = 
// console.log(5 !== 7); //diferente frouxo = !== ele nega a comparação (5 não é igual a 7 = verdadeiro  )

//Media de notas
// const nota1 = Number(prompt("primeira Nota: "));
// const nota2 = Number(prompt("Segunda Nota: "));

// const Media = (nota1 + nota2) / 2;

// console.log(`Sua media final ${Media.toFixed(1)}`)

//Calcular IMC
// const peso = Number(prompt("Digite seu peso (Kg): "))
// const altura = Number(prompt("Digite sua altura (m): "))

// const imc = peso / (altura ** 2)

// console.log(`Seu IMC foi ${imc.toFixed(2)}`) //poderiamos usar o alert no lugar do console.log