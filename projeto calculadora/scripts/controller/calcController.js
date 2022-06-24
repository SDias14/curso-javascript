// dentro desse arquivo de controle vamos ter o controller do mvc. Será responsavel pelas ações. 

//criando classe: 

class CalcController{

    constructor(){

        this._displayCalc = "0";
        this._dataAtual;



    }

    get displayCalc(){

        return this._displayCalc;

    }

    set displayCalc(value){

        this._displayCalc = value;

    }

    get dataAtual(){

        return this._dataAtual;

    }

    set dataAtual (value){

        this._dataAtual = value;

    }


}

//primeira letra da class sempre maiuscula. a classe vazia nao serve pra nada. a classe pode ser comparada a arquivos compactados. Dentro de uma classe encontraremos variaveis e funcoes. Dentro da classe elas se chamarao atributos e metodos. O que é uma classe ? Uma classe é um conjunto de atributos e metodos. Toda vez que falarmos de um objeto ele estará associado a uma classe.

//metodo construtor: qualquer funcao e metodo que a gente cria precisamos colocar os parenteses com parametros. dentro das chaves a gente tem o que o codigo deve fazer com a informação.

//comando this: se eu vou usar uma variavel dentro de um metodo, eu preciso usar o this. Por que ? Porque a variavel por si so nao tera esses poderes. o this faz referencia do objeto que foi instanciado.

//encapsulamento : é uma forma de proteger quem pode ou nao acessar aquele trecho de codigo. As tres formas de encapsulamento: public, private e protected. public : fala com todo mundo. protected : fala so com quem gosta. private : fala com ninguem.  quando falamos de private, falamos que somente atributos ou metodos da mesma classe podem acessar. No javascript isso nao vai acontecer. ele vai ser representado pelo _. O objetivo de querer acessar o atributo : chamá-lo ou pegar o valor que tem dentro dele ou guardar um valor nele.

//metodos get e set: 