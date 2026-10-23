// Arrays - lista de valores com indice

// const frutas = ["Maça", "banana", "Laranja"];

// console.log(frutas[0]);
// console.log(frutas.length); // le a quantidade de coisas na lista

// frutas.push("Uva"); //adiciona intens na lista
// console.log(frutas);

// //Objetos - conjunto de chave e valor
// const pessoa = [
//     {nome: "Pedro", idade: 35}
// ]

// console.log(pessoa.nome);
// pessoa.cidade = "Sao Paulo"

//while

// let i = 1

// while (i <= 5) {
//     console.log("Numero:" + i);
//     i++ // contador para adicionar mais pode colocar i+= 2/3/4...
// }

//do..while
// let senha;

// do {
//     senha = prompt("Digite a senha:")    
// } while (senha !== "1234"); //tem que fazer a negação para ele sair do codigo

//for
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`)
// }

//Contagem regressiva
// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }
// console.log("Fogo!!")

//Acumulador: somando dentro do loop
// let soma = 0 

// for (let i = 1; i <= 5; i++) {
//     soma += i;
// }
// console.log(soma)

//for..of
// const frutas = ["banana", "uva", "Laranja"]

// for (const fruta of frutas) {
//     console.log("frutas:", fruta)
// }

//for..in
// const pessoa = { nome: "Lucas", idade: 25, cidade: "Recife" }

// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`)
// }

//Laço dentro de laço
// for (let linha = 1; linha <= 3; linha++) {
//     let texto = "";

//     for (let coluna = 1; coluna <= 4; coluna++) {
//         texto += "* ";
//     }

//     console.log(texto);
// }

//exercicio piramide
// for (let linha = 1; linha <= 4; linha++) {
//     let texto = "";

//     for (let coluna = 1; coluna <= linha; coluna++) {
//         texto += "* ";
//     }

//      console.log(texto);
//  }