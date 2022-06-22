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