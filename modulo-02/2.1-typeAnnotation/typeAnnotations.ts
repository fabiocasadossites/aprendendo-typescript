
// ==> variáveis [Type Annotations]
let nome: string = 'Fabio Augusto';
console.log(nome);

// ==> arrays [Type Annotations]
let animais: string[] = ['elefante','cachorro','gato','panda','girafa'];
console.log(animais);

// ==> objetos [Type Annotations]
let carro: {
    nome: string
    ano: number
    preco: number
};

carro = {nome: 'Logan', ano:2018, preco: 15.000}
console.log(carro);

// ==> functions [Type Annotations]
function multiplicarNumeros(num1:number, num2: number){
    return num1*num2;
}
console.log(multiplicarNumeros(2,5));