// const notas = [7, 8.5, 6];
// const alunos = {nome: "Pedro", idade: 16};

// const turma = [
//     {nome: "Pedro", idade: 16},
//     {nome: "Ana", idade: 20},

// ];
// console.log(notas[1]);
// console.log(alunos.nome);
// console.log(turma[1].nome);

// const frutas = ["maça", "banana", "laranja"];
// console.log(frutas[0]);
// console.log(frutas.length);
// console.log(frutas[frutas.length -1]);
// console.log(frutas.at(-1));
// console.log(frutas[10]);

// frutas[1] = "morango"
// console.log(frutas);

// const fila = ["Ana", "Bia"];

// fila.push("Caio");
// fila.unshift("Zeca");
// console.log(fila)

// const atendido = fila.shift();
// const saiu = fila.pop();

// console.log(fila);
// console.log(atendido, saiu);

// const letras = ["a", "b", "c", "d", "e"];
// letras.splice(1, 2);
// console.log(letras);

// letras.splice(1, 0, "x", "y");
// console.log(letras);

// letras.splice(0, 1, "Z");
// console.log(letras);

// const nums = [1, 2, 3, 4, 5];

// console.log(nums.slice(1, 3));
// console.log(nums.slice(-2));
// console.log(nums.slice());

// console.log(nums.includes(3));
// console.log(nums.includes(99));

// console.log(nums.indexOf(99));
// console.log(nums.join(" - "));

// console.log(nums);

// const a = [1, 2];
// const b = [3, 4];

// console.log(a.concat(b));
// console.log([...a, ...b]);
// console.log([0, ...a, 99, ...b])

// const aluno = {nome: "Pedro", idade: 16}

// aluno.idade = 17
// aluno.cidade = "São Paulo"
// console.log(aluno)

// delete aluno.cidade
// console.log(aluno)

//Filter, Map, Find e Reduce

// function dobro(n) {
//     return n * 2;
// }

// const dobroArrow = (n) => {
//     return n * 2;
// }

// const dobroCurto = n => n * 2;


const lucas = { name: "Lucas", lastName: "Garcez", age: 20 };
const maria = { name: "Maria", lastName: "Oliveira", age: 17 };
const joao = { name: "João", lastName: "Silva", age: 18 };
const ana = { name: "Ana", lastName: "Santos", age:22 };
const people = [lucas, maria, joao, ana]
//Filter
console.log("=== FILTER ===")

const maiores = people.filter((value, index, Array) => {
    console.log("Index", index);
    console.log("Value", value.name);
    console.log("-----------------");

    return value.age >= 18;
});

console.log("Resultado filter", maiores);

console.log("=== MAP ===");

const nomes = people.map((value, index, Array) => {
    console.log("Index", index);
    console.log("Value", value.name);
    console.log("-----------------");

    return value.name;
})

console.log("Resultado Map:", nomes)

console.log("=== FIND ===")

const mariaEncontrada = people.find((value, index, Array) => {
    console.log("Index:", index);
    console.log("Index:", value.name);
    console.log("-----------------");
    return value.name === "Maria";
});

console.log("Resultado find:", mariaEncontrada);

const pedro = people.find(p => p.name === "pedro");
console.log(pedro);

if (pedro === undefined) {
    console.log("pessoa não encontrada!");
}

console.log("=== Reduce ===");

// Array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {

// }, valorInicial);

const somaIdades = people.reduce((acc, value, index, array) => {
    console.log("Index:", index);
    console.log("Index:", value.name, value.age);
    console.log("Acumulador antes:", acc);
    return acc + value.age;
}, 0)

console.log("Resultdo reduce:", somaIdades);

const nomesMaiores = people
.filter(p => p.age >= 18)
.map(p => p.name.toUpperCase());

console.log(nomesMaiores);

const somaMaiores = people
.filter(p => p.age >= 18)
.reduce((acc, p) => acc + p.age, 0);

console.log(somaMaiores);