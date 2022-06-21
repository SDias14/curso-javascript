// var olamundo = "Olá terra";

//o javascript possui variaveis. As variaveis são declaradas com o comando var. elas facilitam na hora de manipular os dados repetitivos. 

//há dois tipos de comandos que tambem se usa para declarar variaveis : o let e o const. o let é um comando que permite a declaração de variaveis com o escopo de bloco, ou seja, seu valor é apenas válido dentro do bloco. o const é um comando que permite a declaração de constante com o escopo de bloco, ou seja, seu valor é apenas válido dentro do bloco.const é const e var é var.

//variaveis podem guardar qualquer tipo de dado. string, number, boolean, object, array, function, etc. o typeof é um comando que retorna o tipo de dado que está guardado na variavel. o stanceof é um comando que mostra de que instancia veio a variavel. 


/*console.log(olamundo); 
console.log(olamundo);
console.log(olamundo);
*/


       //alert("Olá Mundo"); tanto faz abrir com as aspas simples ou duplas. esse console.log é para testar o código. No javascript o console.log é um comando que mostra algo na tela. É case-sensitive, ou seja, é necessário colocar o console.log em caixa alta  ou baixa para que o console.log funcione. Este é uma forma de script incorporado. Por que ? porque está junto com o código html. Não é a melhor solução. 

       //operador ==
       
      /* let a=10;
       const b=20; */

      // console.log(a==b);
       
      //operador de comparação, vai retornar true ou false.

//operador ===
 

/*      let a=10;
       const b="10";

       console.log(a===b);

       */

       //temos 3 tipos de igual : igual simples = igual de atribuição ; igual duplo= comparação de valor ; igual triplo = comparação de valor e igualdade de dado. 

   /*    let a=10;
       const b="10";

       console.log(a!==b);

       */


       //para retornar a resposta diferente é necessario colocar o ! antes do operador. Se o ! for sucedido por dois iguais ele vai comparar o valor e o tipo. Se o ! for sucedido por um igual ele vai comparar o valor.

      //operadores logicos.  
       
     /*  let a=10;
       const b="10";

       console.log(a==b && typeof b == "string"); 
       
       este é um caso de uso do operador e. nesse caso ele vai retornar verdadeiro se a primeira condição for verdadeira e tambem a segunda 
       
       
       */

  /*     let a=10;
       const b="10";

       console.log(a==b || typeof a == "string"); */

       //controle de trechos de codigos 

  /*     let cor = "yellow";

       if(cor === "verde") {
           
            console.log("siga");

           
       
        } 
        
        else if (cor === "yellow") {

            console.log("atenção");
        
        }

        //else if será um if a mais. 
        
        
        else {
           
            console.log("pare");
       }

       */

 //esse é um tipo de controle de codigo quando queremos rodar apenas um trecho do codigo. 

 //rodar parte do codigo com o switch


   /*      let cor = "amarelo";

         switch (cor){

            case "verde":
                console.log("siga");
            break;

            case "amarelo":
                console.log("atenção");
            break;

            case "vermelho":
                console.log("pare");
            break;

            default: 
                console.log("não sei");
         }

         //esse é um modo eficiente porque ele nao vai comparar com todas as outras informações. ele vai rodar o codigo baseado somente na questao da cor da variavel. 

         */

         //uso do for para repetições : 

         let n = 7;

         for (let i=0; i <= 10; i++){

            console.log (`${i} X ${n} = ${i*n}`); //esse é um exemplo de template string onde voce coloca diversos objetos e variaveis na mesma linha

         }







       