const nome = 'Renata';
const eu = 'David';

const concat = eu + ' vai' + '  \
pegar a ' + nome;

console.log(concat);

const template = `
    ${eu}
    vou pegar a 
    ${nome}
`;

console.log(template);

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Meu nome é ${up('david')}`);