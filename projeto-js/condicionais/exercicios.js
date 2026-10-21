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