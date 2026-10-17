if (typeof prompt === "undefined") {
    globalThis.prompt = require ("prompt-sync")();
}

const nome = prompt("Qual é o seu nome? ");

const idade = Number(prompt("Qual é sua idade "));

console.log(`Olá, ${nome}! Daqui a 10 anos voce terá ${idade + 10} anos.`);
