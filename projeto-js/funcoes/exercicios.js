// Crie a função saudar(nome) que devolve o texto Olá, <nome>!.
/*function saudar(nome) {
    console.log(`Olá, ${nome}!`)
    //return `Olá`, ${nome} Outra forma de fazer
}
saudar("pedro")
*/

// Crie a função `areaRetangulo(base, altura)` que devolve a área.

// **Exemplo:** `areaRetangulo(5, 3)` devolve `15`
/*function areaRetangulo(a, b) {
    //return a * b Outra forma de fazer
    return {
        area: a * b
    }
}

const area = areaRetangulo(5, 3)
console.log(area)
*/

// Crie `maiorDeTres(a, b, c)` que devolve o maior dos três números, sem usar `Math.max`.

// **Exemplo:** `maiorDeTres(3, 9, 5)` devolve `9`
// function maiorDeTres(a, b, c) {
//     let maior = a;
//     if (b > maior) maior = b;
//     if (c > maior) maior = c;
//     return maior;
// }

// console.log(maiorDeTres(3, 9, 5));

// Math.max();
// console.log(Math.max(3, 9, 5));

// Crie `celsiusParaFahrenheit(c)`. Fórmula: `c * 9 / 5 + 32`. Se `c` não for um número válido, devolva `null`.
// **Exemplo:** `celsiusParaFahrenheit(100)` devolve `212`; `celsiusParaFahrenheit("abc")` devolve `null`

// function celsiusParaFahrenheit(c) {
//     if (typeof c !== "number" || Number.isNaN(c)) {
//         return null;
//     }
//     return c * 9 / 5 + 32;
// }

// console.log(celsiusParaFahrenheit(100));

// Crie `contarVogais(texto)` que devolve quantas vogais (a, e, i, o, u) o texto tem, sem diferenciar maiúsculas de minúsculas.
// **Exemplo:** `contarVogais("JavaScript")` devolve `3`

function contarVogais(texto) {
    const vogais = "aeiou";
    let total = 0;

    for (const letra of texto.contarVogais()) {
        if (vogais.includes(vogais)) {
            total++
        }
    }
    return total;
}
console.log(contarVogais("senai"));
