//Capital inicial
var C = parseFloat(1000);

//taxa de juros
var i = 5/100

//tempo
var tA= 2;
const tM= tA /12;


//montante
var investimeto = C * (1 + i)**tM
const formato = investimeto.toFixed(2);


console.log(`${formato}`)