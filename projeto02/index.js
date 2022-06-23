// o javascript é uma linguagem reativa , ou seja, ela necessita de uma reação de um usuário para que seja executada.

//função : a função é um trecho de codigo que executa alguma ação e retorna algum valor. o valor devolvido é o return. funcao pode realizar calculos, verificar condições, etc. temos tres tipos de funções: funcao simples, função anonima e arrow function. 

/*function soma(a, b){
    return a + b;
    
}

// pode ser criado argumentos ou parametros para a função, sempre dentro de parenteses e separados por virgula.Este é o primeiro passo, criar a função. Agora precisamos criar um bloco de codigo que será executado quando a função for chamada: 

let resultado = soma(1,2); 

console.log(resultado);

*/


/*function calc(a, b, operator){
    return eval(`${a} ${operator} ${b}`);
    
}

let resultado = calc(1, 2, "+"); 

console.log(resultado);*/

//funcao dentro de outra função: pode-se usar o eval, que é uma função nativa do javascript que permite executar codigo javascript. Ele vai interpretar o codigo javascript e retornar o resultado. Como funciona : primeiro voce cria a funcao e da um nome para ela. Depois voce passa os parametros. Apos isso voce tem que colocar o return, pois voce quer que te retorne algum valor.

//funcao anonima: é uma função que não tem nome.

/*(function (a, b){
    return a + b;
    
})(1, 2);

 

console.log(resultado) */

//para que essa funcao funcione precisamos colocar entre parenteses. 

//===================================

//arrow function: é uma função que é escrita em forma de arrow function.

/*let calc = (a, b, operator) => {
    return eval(`${a} ${operator} ${b}`);
    
}

let resultado = calc(1, 2, "+"); 

console.log(resultado); */

// em arrow functions nao precisamos escrever a palavra function. a funcao vai estar dentro de uma variavel.


//===================================

//manipulando o dom (document object model) : é a estruta de como o html é formado.  

//dentro do dom temos os eventos, que são os eventos que o usuario executa no browser.

//evento exemplos : 



/*window.addEventListener('focus', event => {

console.log('focus');

});

// esse é o evento de foco. quando o usuario clica no browser, ele executa o evento focus. 


//evento document. 

document.addEventListener ('click', event => {
    
    
    console.log('click')
    
});

//o window event se comporta em toda a janela , enquanto o document event se comporta apenas no documento. 

*/

//===================================

//quando trabalhamos com datas , estamos na verdade trabalhando com objetos. Precisamos trabalhar com classes. 

//let agora = new Date();

//console.log(agora);

// criamos uma variavel que recebe uma instancia da classe Date.

/*
let agora = new Date();

console.log(agora.getDate()); //retorna o dia do mes.
console.log(agora.getMonth()); //retorna o mes do ano, começando em 0 .
console.log(agora.getUTCFullYear()); //retorna o ano. */

/*
let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR")); //retorna o dia do mes.

*/


//arrays: é uma estrutura de dados que permite armazenar varios valores em uma unica variavel.

//let carros = ["palio 98" , "uno" , "fusca", 10, true, new Date(), function(){}];

//console.log(carros); //retorna todos os valores do array.

//console.log(carros.length); //retorna o tamanho do array.

//console.log(carros [5].getFullYear()); //retorna o valor do indice 5.

//laços de repetição: é um tipo de estrutura de controle que permite que um bloco de codigo seja executado determinado numero de vezes.

/* let carros = ["palio 98" , "uno" , "fusca", 10, true, new Date(), function(){}];

carros.forEach(function(value, index){
   
    console.log(index, value);
}); */

/*
let companhia = ["tam", "latam", "123 milhas", "quatar arlines"
];

companhia.forEach(function(value, index){
       
    console.log(index, value);
});

*/
//===================================


//orientação a objetos: jeito de se programar que voce reutiliza codigo. dentro de uma classe nos temos elementos e funcoes. a variavel dentro da classe se chama atributo e a funcao dentro da classe se chama metodo. ganham mais recursos. O atributo é como uma variavel, a diferença é que podemos chamar da onde quisermos. atributos = armazenamento. metodos = ações que realizamos. Instancia : é quando o objeto representa uma classe. temos que chama-la com o new. 

/*
let celular = function (){
    
    this.cor = "prata";

    this.ligar = function(){
        console.log("Primeira Ligação");
        return "ligando...";
    }
}

let objeto = new celular();

console.log(objeto.ligar());
*/

//criação do mesmo codigo de maneira mais atual : 

class celular {
    constructor(){
        this.cor = "prata";
    }
    ligar(){
        console.log("Primeira Ligação");
        return "ligando...";
    }
}

let objeto = new celular;

console.log(objeto.ligar());




