var nome = prompt("Digite seu nome: ")

switch(nome){
    case "Remerson":
        //console.log("Seja bem vindo!");
        prompt("Seja bem vindo "+ nome);
        break;
    
    case "Carlos":
        prompt("Seja bem vindo " + nome);
        break;

    case "Luiz":
        //console.log("Seja bem vindo " + nome);
        prompt("Seja bem vindo "+ nome);
        break;
}



/* TESTANDO CONDIÇÃO COM IF ELSE



if(nome =="humberto"){
    /*console.log("Seja bem vindo!!")
    console.log é a maneira de representar a resposta da condição dentro do html
    */

   // alert("Seja bem vindo " + nome + "!!")
 /*   
}else{
    //console.log("Nome não indentificado")
    alert(nome + " não é um nome registrado no nosso programa")
}
*/

//somando valotes

var n1 = parseFloat(prompt("Digite um numero: "));
var n2 = parseFloat(prompt("Digite outro numero: "));



var soma = parseFloat(n1 + n2);

alert("A soma dos valores " + n1 +" + "+ n2 + " é de " + soma);

//usando for:

/*
for(var i; i =>10; i++){
    console.log("Numero " + i);
    prompt("Numero " + i);
}

*/

for( var i = 0; i < 10; i ++){
    console.log("O valor da variavel i é " , i)
    //i = 5;
}