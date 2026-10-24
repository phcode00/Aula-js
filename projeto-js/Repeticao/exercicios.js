// // // Contagem de 1 a 10 com while
// // // let i = 1

// while (i <= 10) {
//     console.log(`Numero: ${i}`)
//     i++
//  }

// tabuada
//  for (let i = 1; let <= 10; i++) {
//       console.log(`5 * ${i} = ${5 * i}`)
// }

// //  Soma de 1 a 100 com for
// // Calcule a soma dos números de 1 até 100.

// // **Exemplo de saída:** `A soma de 1 a 100 é: 5050`
// // let soma = 0

// // for (let i = 1; 1 <= 100; i++) {
// //     soma += i;
// // }
// // console.log(soma)

// //Peça 5 números ao usuário, calcule e mostre a média.
// **Exemplo:** entradas `2`, `4`, `6`, `8` e `10` → saída `A média é 6`

// let soma = 0

// for ( let i = 1; i <= 5; i++) {
//     const num = Number(prompt(`Digite o ${i} numero:`))
//     soma += num
// }

// const media = soma / 5;

// console.log(`A media é ${media}`)

// Peça nomes repetidamente. Só pare quando o usuário digitar "sair".
// **Exemplo:** entradas `Ana`, `Bia` e `sair` → saídas `Você digitou: Ana` e `Você digitou: Bia`
// let nome;

// do {
//     nome = prompt("Digite um nome(ou 'sair' para encerrar):");
//     if (nome !== "sair") {
//         console.log(`Voce digitou: ${nome}`)
//     }  
// } while (nome !== "sair"); 

// Mostre no console apenas os números pares de 1 a 20.
// **Exemplo de saída:** `2`, `4`, `6`, ... até `20`

// for (let i = 1; 1 <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// Peça uma palavra e verifique se é um palíndromo (lê-se igual de frente para trás, ex.: "arara").
// **Exemplo:** `arara` → `arara é um palíndromo!` · `casa` → `casa não é um palíndromo.`
// const palavra = prompt("Digite uma palavra:")

// let invertida = ""

// for ( let i = palavra.length -1; i >= 0; i--) {

//     invertida += palavra[i];

// }

// if (palavra === invertida) {
//     console.log(`${palavra} é um palindromo`)
// } else {
//     console.log(`${palavra} não é um palindromo`)
// }

// Simule um menu de banco (1-Depositar, 2-Sacar, 3-Sair). Enquanto o usuário não digitar 3, o menu deve continuar aparecendo.
// **Exemplo:** opção `1` com valor `100` → `Depósito realizado. Saldo: R$100`; depois opção `2` com valor `30` → `Saque realizado. 
// Saldo: R$70`; depois opção `3` → `Programa encerrado.`


// let saldo = 0
// let opção;

// do {
//     opção = prompt(`Digite: 1.depositar / 2.sacar / 3.sair`);

//     if(opção === "1") {
//         const valor = Number(prompt("Valor para deposito:")); 
//         saldo += valor;
//         console.log(`Deposito realizado R$${saldo}`);
//     } else if (opção === "2") {
//         const valor = Number(prompt("Valor para saque:"));
//         if (valor > saldo) {
//             console.log("Saldo insuficiente");
//         } else {
//             saldo -= valor
//             console.log(`Saque realizado. Saldo: R$${saldo}`);
//         }
//     } else if (opção !== "3");
//         console.log("Opção invalida!");

// } while (opção !== "3");
// console.log("Programa invalido.")

// Mostre as tabuadas do 1 ao 10, cada uma de x1 até x10, com um título antes de cada tabuada. Use um laço dentro de outro.
for (let tabuada = 1; tabuada <= 10; tabuada++) {
    console.log("")
    console.log(`---tabuada do ${tabuada}---`)

    for (let i = 1; i <= 10; i++) {
        console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    }
}
