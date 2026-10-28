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

const aluno = {nome: "Pedro", idade: 16}

aluno.idade = 17
aluno.cidade = "São Paulo"
console.log(aluno)

delete aluno.cidade
console.log(aluno)