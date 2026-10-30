// Comece com uma fila vazia. Chegam Ana, Bia e Caio (nessa ordem). Atenda o primeiro da fila. Depois chega Duda com atendimento prioritário,
// que deve ir para o início. Mostre a fila a cada etapa.

// Saída esperada: `[ 'Ana', 'Bia', 'Caio' ]`, depois `[ 'Bia', 'Caio' ]`, depois `[ 'Duda', 'Bia', 'Caio' ]`

// const fila = [];
// fila.push("ana");
// fila.push("bia");
// fila.push("caio");
// console.log(fila)

// fila.shift("ana");
// console.log(fila);

// fila.unshift("duda");
// fila
//console.log(fila.join(" - "))

// Crie `remover(lista, valor)` que remove o valor da lista (se existir) e devolve `true` se removeu ou `false` se não achou.
// Exemplo: `remover(["a", "b", "c"], "b")` devolve `true` e a lista vira `[ 'a', 'c' ]`

// function remover(lista, valor) {
//     const pos = lista.indexOf(valor);
    
//     if (pos === -1) {
//         return false;
//     }

//     lista.splice(pos, 1);
//     return true
// }
// const letras = ["a", "b", "c"];
// console.log(remover(letras, "b"));

// console.log(letras);

// console.log(remover(letras, "z"));

// Crie um objeto `aluno` com `nome` e `idade`. Depois: altere a idade, 
// acrescente `curso`, remova a `idade` e mostre as chaves que sobraram.

// Saída esperada: `[ 'nome', 'curso' ]`

// const aluno = {
//     nome:"pedro", idade: 17
// }

// aluno.idade = 16;
// aluno.curso = "front-end";
// delete aluno.idade;

// console.log(aluno);
// console.log(Object.keys(aluno));

// Dado um array de alunos `{ nome, nota }`, crie `mediaTurma(alunos)` e `melhorAluno(alunos)` 
// (devolve o objeto do aluno com a maior nota).

// Exemplo: com Ana 8, Bia 5.5 e Caio 7 → média `6.833...` e
// melhor aluno `{ nome: 'Ana', nota: 8 }`

// function mediaTurma(alunos) {
//     let soma = 0;
//     for (const aluno of alunos) {
//         soma += aluno.nota;
//     }
//     return soma / alunos.length;
// }

// function melhorAluno(alunos) {
//     let melhor = alunos[0];
//     for (const aluno of alunos) {
//         if (aluno.nota > melhor.nota) {
//             melhor = aluno;
//         }
//     }

//     return melhor;
// }

// const turma = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Bia", nota: 5.5 },
//   { nome: "Caio", nota: 7 },
// ];

// console.log(mediaTurma(turma).toFixed(2));
// console.log(melhorAluno(turma));


// Dado const nums = [1, 2, 3, 4, 5], use map para criar um array com o dobro de cada número
// const nums = [1,2,3,4,5] 

// const dobro = nums.map((value => {
//     return value * 2
// }));
// console.log(dobro);

// const dobros = nums.map(n => n * 2);
// console.log(dobros);

// Dado const nomes = ["ana", "bruno", "carla"], use map para devolver todos os nomes em letras maiúsculas.
// nomes = ["ana", "bruno", "carla"];

// const nomesMaisculo = nomes.map((nome => {
//     return nome.toUpperCase();
// }))

// console.log(nomesMaisculo);

// Dado const precos = [100, 200, 50], use map para devolver os preços com 10% de aumento.
// const precos = [100, 200, 50];

// const aumento = precos.map((n => n + n * 0.1));
// console.log(aumento);

// Dado um array de alunos com nome e nota, use map para obter só os nomes.
//  const alunos = [
//    { nome: "Ana", nota: 8 },
//    { nome: "Bruno", nota: 5 },
//    { nome: "Carla", nota: 9 },
//  ];

// const nomes = alunos.map((nome => {
//     return nome.nome
// }))
// console.log(nomes);

// Com o mesmo array de alunos, use map para gerar textos no formato "Ana: 8".
// const nomes = alunos.map((nome => {
//      return nome.nome
// }))

// const linhas = alunos.map(a => `${a.nome}: ${a.nota}`);
// console.log(linhas)

// Dado um array de produtos com nome e preco, devolva objetos com os mesmos campos e um novo campo precoFinal com 10% de desconto. O array original não pode mudar.

// const produtos = [
//   { nome: "Mouse", preco: 100 },
//   { nome: "Teclado", preco: 40 },
// ];

// const comDesconto = produtos.map(p => {
//     return {...p, precoFinal: p.preco * 0.9}
// });

// console.log(comDesconto);
// console.log(produtos[0]);

// Numerar uma lista com index
// Dado const fila = ["Ana", "Bia", "Caio"], use map com o segundo parâmetro (index) para gerar "1. Ana", "2. Bia"...
// const fila = ["ana", "bia", "caio"]

// const Numerada = fila.map((nome, index) => `${index + 1}. ${nome}.`)
// console.log(Numerada)

// Filter e map encadeados

// Dado um array de itens com nome, qtd e preco, devolva objetos { nome, subtotal } apenas dos itens com qtd maior que 0. O subtotal é qtd * preco.

// const itens = [
//   { nome: "Caneta", qtd: 3, preco: 2 },
//   { nome: "Lápis", qtd: 0, preco: 1 },
//   { nome: "Caderno", qtd: 2, preco: 15 },
// ];

// const resultado = itens.filter(i => i.qtd > 0)
// .map(i => ({
//     nome: i.nome,
//     subtotal: i.qtd * i.preco,
// }));

// Dado const nums = [1, 2, 3, 4, 5, 6, 7, 8], use filter para ficar só com os números pares.

//  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

//  const pares = nums.filter(p => p % 2 === 0);

// console.log(pares);


// Duas condições
// Dado um array de pessoas com nome, idade e ativo (true/false), devolva só as pessoas ativas e maiores de 18.

// const pessoas = [
//   { nome: "Ana", idade: 20, ativo: true },
//   { nome: "Bia", idade: 17, ativo: true },
//   { nome: "Caio", idade: 25, ativo: false },
//   { nome: "Duda", idade: 30, ativo: true },
// ];

// const resultado = pessoas.filter(i => i.ativo === true && i.idade > 18);

// console.log(resultado.map(p => p.nome))  

// Dado um array de títulos de filmes e o termo "ar", devolva os títulos que contêm o termo, sem diferenciar maiúsculas de minúsculas.

// const titulos = ["Star Wars", "Matrix", "Parasita", "Avatar"];

// const verificacao = titulos.filter(i => i.toLowerCase().includes("ar"))
// console.log(verificacao)

// 1: Remover um item pelo id
// Dado um array de tarefas com id e texto, use filter para devolver a lista sem a tarefa de id 2.

// const tarefas = [
//   { id: 1, texto: "Estudar" },
//   { id: 2, texto: "Treinar" },
//   { id: 3, texto: "Dormir" },
// ];

// const verificacao = tarefas.filter(t => t.id !== 2)
// console.log(verificacao)


// Primeiro maior que 10
// Dado const nums = [4, 8, 12, 15, 3], use find para achar o primeiro número maior que 10.

//  const nums = [4, 8, 12, 15, 3]

//  const maior = nums.find(p => p > 10);
//  console.log(maior)

// Dado um array de pessoas com nome e idade, ache a pessoa chamada "Bruno".
// const pessoas = [
//   { nome: "Ana", idade: 20 },
//   { nome: "Bruno", idade: 17 },
//   { nome: "Carla", idade: 30 },
// ]

// const nome = pessoas.find(n => n.nome === "Bruno")
// console.log(nome)