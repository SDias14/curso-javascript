// dentro desse arquivo de controle vamos ter o controller do mvc. Será responsavel pelas ações. 

//criando classe: 

class CalcController{

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl =document.querySelector("#hora");
        this._currentDate;
        this.initialize();
       


    }

    initialize(){
        
        this.setdisplayDateTime();
        
        setInterval(() => {
           
            this.setdisplayDateTime();
      
      
        }, 1000); // setInterval é um metodo que executa uma funcao a cada segundo ou um numero de vezes que queremos. 






    // esse tipo de manipulação do dom faz com que nos tenhamos uma iteração com o html baseado nos seletores css3. o innerhtml vai fazer a funcao de alterar as informaçoes no html. 

    }

    setdisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    //tudo que eu quiser que aconteça quando iniciar a calculadora eu coloco aqui neste metodo.

get displayTime(){
    this._timeEl.innerHTML;
}

set displayTime(value){
    this._timeEl.innerHTML = value;
}

get displayDate(){
    this._dateEl.innerHTML;
}

set displayDate(value){
    this._dateEl.innerHTML = value;
}



    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate (value){

        this._currentDate = value;

    }


}

//primeira letra da class sempre maiuscula. a classe vazia nao serve pra nada. a classe pode ser comparada a arquivos compactados. Dentro de uma classe encontraremos variaveis e funcoes. Dentro da classe elas se chamarao atributos e metodos. O que é uma classe ? Uma classe é um conjunto de atributos e metodos. Toda vez que falarmos de um objeto ele estará associado a uma classe.

//metodo construtor: qualquer funcao e metodo que a gente cria precisamos colocar os parenteses com parametros. dentro das chaves a gente tem o que o codigo deve fazer com a informação.

//comando this: se eu vou usar uma variavel dentro de um metodo, eu preciso usar o this. Por que ? Porque a variavel por si so nao tera esses poderes. o this faz referencia do objeto que foi instanciado.

//encapsulamento : é uma forma de proteger quem pode ou nao acessar aquele trecho de codigo. As tres formas de encapsulamento: public, private e protected. public : fala com todo mundo. protected : fala so com quem gosta. private : fala com ninguem.  quando falamos de private, falamos que somente atributos ou metodos da mesma classe podem acessar. No javascript isso nao vai acontecer. ele vai ser representado pelo _. O objetivo de querer acessar o atributo : chamá-lo ou pegar o valor que tem dentro dele ou guardar um valor nele.

//metodos get e set: 

//manipulação do dom: a primeira letra do dom é o d que significa document. Este é o site, meu documento. é diferente do BOM(browser object model). é TODA A JANELA. Cada tag do documento vai virar um objeto. 


//refatorando o codigo: melhorar o codigo.