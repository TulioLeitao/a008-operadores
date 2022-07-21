let primeiroNum = Number(prompt("Por favor, insira um número"));
let segundoNum = Number(prompt("Agora ensira um segundo número, por favor."));

let resultado1 = primeiroNum %segundoNum;
let resultado2 = segundoNum %primeiroNum;

console.log ("O primneiro número é maior que o segundo?", primeiroNum > segundoNum);
console.log ("O primeiro número é igual ao segundo?", primeiroNum === segundoNum);
console.log ("O primeiro número é divisível pelo segundo?", resultado1 === 0 );
console.log ("O segundo numero é divisível pelo primeiro?", resultado2 ===0);


