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
      
      
        }, 1000);  

    }

    initButtonsEvents(){

       let buttons =  document.querySelectorAll("#buttons > g, #parts > g");

       buttons.addEventListener("click", e => {

       }
    
    
    }

    setdisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    
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

