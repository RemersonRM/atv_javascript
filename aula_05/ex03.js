//Gerando interface

const readline = require('readline');
const r2 = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

//variaveis do Script
var mn = Infinity;
var mN = -Infinity;
var n = 0;

//função para usar a interface
function sN(){
    r2.question("Digite um numero: ", (enter) =>{
        const numero = parseInt(enter);

        //verificação se o numero é valido
        if (!isNaN(numero)) {

            //condições para definir se o numero é maior ou menor
            if(numero < mn){
                mn = numero;
            }
            if(numero > mN){
                mN = numero;
            }
            
            //criando um contador
            n++;
            //condição para caso o contador seja menor que 10 ele fique repetindo em loop
            if(n < 10){
                sN(); 
                //caso a condição seja saciada, ira apresentar os dados inseridos
            } else {
                console.log(`O menor numero inserido foi: ${mn}`)
                console.log(`O maior numero inserido foi: ${mN}`)
                r2.close();
            }
        } else {
            console.log('Número inválido. Tente novamente.');
            sN(); // Chama recursivamente em caso de entrada inválida
        }
    })
}

sN();
