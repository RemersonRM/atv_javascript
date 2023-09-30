var populacaoA = parseFloat(8000);
var populacaoB = parseFloat(20000);
var anos = 0;

const CresA = 0.03;
const CresB = 0.015;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * CresA;
    populacaoB += populacaoB * CresB;
    anos++;
}

console.log('Levara aproximadamente ${anos} anos , para a população A ultrapassar a B');