const escola = 'David';

console.log(escola.charAt(4));

console.log(escola.charCodeAt(3));

console.log(escola.indexOf('d'));

console.log(escola.substring(1,3));

console.log('Escola '.concat(escola).concat('!'));
console.log(escola.replace(/\d/,'e'));

console.log('David,Maria,Jose'.split(','));

let nome = 'David'

//String são imutáveis, para cada tentatica de mudança da string é criada uma cópia 
//Mantendo o valor original
console.log(nome.toUpperCase())
console.log(nome)

