//Peça a cor de um semaforo ("verde", "amarelo", "vermelho") e diga a ação
//ex: verde-siga. azul-cor-invalida

// const cor = prompt("Digite a cor do semaforo (verde)/(amarela)/(vermelho): ");

// if (cor === "verde") {
//     console.log("Pode passar");
// } else if (cor === "amarela") {
//     console.log("O farol esta fechando");
// } else if (cor === "vermelho") {
//     console.log("O farol esta fechado");
// } else {
//     console.log("Cor invalida");
// }



// Validação de nota
/*
0-100 <60 reprovado, 60-79 recuperação, 80-100 aprovado.
ex: 75 - recuperação e 105 - nota invalida
*/

// const nota = Number(prompt("Qual foi sua nota:"))

// if (Number.isNaN(nota) || nota < 0 || nota > 100) {
//      console.log("Nota inválida.");
// } else if (nota < 60) {
//      console.log("Reprovada!");
// } else if (nota < 80) {
//      console.log("Recuperação!");
// } else {
//      console.log("Aprovado!");
// }


// Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.

// **Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`

// const user = prompt("Usuario: ")
// const pass = prompt("Senha: ")

// const perfilOk = (user === "adimin" || user === "gerente")
// const senhaOk = (pass === "1234")

// if (perfilOk && senhaOk) {
//     console.log("Acesso liberado!")
// } else {
//     console.log("Acesso negado!")
// }

//pessoa digita 3 numero e saber qual é o maior

// const usuário = prompt("Digite o nome do usuario (admin/gerente): ") 
// const senha = prompt("Digite a senha: ") 

// if (usuário === "admin" || usuário === "gerente") {
//     console.log("Usuario correto!")
// } else if (senha === "1234") {
//     console.log("Senha ok")
// }else {
//  console.log("usuario ou senha incorreto")
// }


// Peça um número e diga se é positivo, negativo ou zero.
// **Exemplo:** `5` → `O número é positivo.` · `0` → `O número é zero.` · `abc` → `Valor inválido.`
// const valor = Number(prompt("Digite um numero pra checar se é positivo/zero/negativo: "));

// if (Number.isNaN(valor)) {
//     console.log("Numero Invalido!");
// } else if (valor >= 1){
//     console.log("Numero Positivo!");
// } else if (valor == 0) {
//     console.log("Numero Zero!");
// } else {
//     console.log("Numero Negativo!");
// }


// Se a idade for >= 18, mostrar que pode tirar carteira; senão, que ainda não pode.
// **Exemplo:** `20` → `Você pode tirar a carteira de motorista.` · `15` → `Você ainda não tem idade para dirigir.` · `abc` → `Idade inválida.`
// const idade = Number(prompt("Digite sua idade para chegar se pode digirir: "));

// if (Number.isNaN(idade)) {
//     console.log("Numero Invalido!");
// } else if (idade >= 18) {
//     console.log("Voce pode tirar a carteira de motorista!");
// } else {
//     console.log("Voce ainda nao pode tirar a carteira de motorista!");
// }

//Use o resto da divisão (`%`) para dizer se um número é par ou ímpar.
// **Exemplo:** `10` → `O número é par.` · `7` → `O número é ímpar.` · `abc` → `Número inválido.`
// const numero1 = Number(prompt("Digite um numero pra saber se é positivo ou negativo: "))

// if (Number.isNaN(numero1)) {
//     console.log("Numero Invalido!")
// } else if (numero1 % 2 === 0){
//     console.log("Numero par!")
// } else {
//     console.log("Numero Impar")
// }

// Peça peso e altura, calcule o IMC e classifique: 
// <18.5 abaixo do peso, 18.5–24.9 normal, 25–29.9 sobrepeso, 
// >=30 obesidade. Valide entradas inválidas.

// **Exemplo:** peso `70` e altura `1.75` → `Seu IMC é: 22.86` e `Classificação: Peso normal`
// const peso = Number(prompt("Digite seu peso (Kg): "));

// const altura = Number(prompt("Digite sua altura (m): "))

// const imc = peso / (altura ** 2)

// if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0 ) {
//     console.log("Numero Invalido")
// } else if (imc === 18.5  || imc <18.5) {
//     console.log("Abaixo do peso!")
// } else if (imc > 18.5 || imc > 24.9) {
//     console.log("Peso normal!")
// } else if (imc > 25 || imc > 29.9) {
//     console.log("Sobrepeso")
// } else {
//     console.log("Obesidade")
// }
//     console.log(`Seu IMC é: ${imc.toFixed(2)}`)

// const peso = Number(prompt("Digite seu peso em kg:"));
// const altura = Number(prompt("Digite sua altura em metros:"));

// if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
//      console.log("Valores de peso ou altura inválidos.");
// } else {
//     const imc = peso / (altura * altura);

//     console.log(`Seu IMC é: ${imc.toFixed(2)}`);

//     if (imc < 18.5) {
//         console.log("Classificação: Abaixo do peso");
//     } else if (imc < 25) {
//         console.log("Classificação: Peso normal");
//     } else if (imc < 30) {
//         console.log("Classificação: Sobrepeso");
//     } else {
//         console.log("Classificação: Obesidade");
//     }
// }

// Se o valor da compra for maior que R$ 100, aplicar 10% de desconto.

// **Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80`

// const compra = Number(prompt("Digite o valor da compra: "));
// if (Number.isNaN(compra) || compra < 0) {
//     console.log("Valor invalido");
// } else if (compra > 100) {
//     const desconto = compra * 0.1
//     console.log("Valor final com desconto: R$" + (compra - desconto));
// } else {
//     console.log("Valor final: R$" + compra);
// }

//Peça 3 números e diga qual é o maior.
// **Exemplo:** `4`, `9` e `7` → `O maior número é: 9`
// const numero1 = Number(prompt("Digite o primeiro valor:"));
// const numero2 = Number(prompt("Digite o segundo valor:"));
// const numero3 = Number(prompt("Digite o terceiro valor:"));

// if (Number.isNaN(numero1) || Number.isNaN(numero2) || Number.isNaN(numero3)) {
//     console.log("Numero Invalido!");
// } else {
//     let maior = numero1;
//     if (numero2 > maior) maior = numero2;
//     if (numero3 > maior) maior = numero3;
//     console.log("O maior numero é:" + maior)
// }