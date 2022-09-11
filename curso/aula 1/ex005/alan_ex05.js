/* Prova Final*/

const dadosPessoas = [
    ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'],
    [1.70, 1.72, 1.62, 1.90, 1.53],
    [80, 90, 61, 84, 49]
]
//Variáveis
 let somaAltura = 0
 let somaPeso = 0
 let id = 0
 let imc = 0
 let maiorAltura = 0
 let menorAltura = 0
 let nomeAlturaMaior = 0
 let nomeAlturaMenor = 0
 let maiorPeso = 0
 let menorPeso = 0
 let nomePesoMaior = 0
 let nomePesoMenor = 0
 let maiorImc = 0
 let menorImc = 0
 let nomeImcMaior = 0
 let nomeImcMenor = 0

 // Percorrer a matriz 
for (id; id < dadosPessoas[0].length; id++){

    // Soma da Altura 
    somaAltura += dadosPessoas[1][id]
    
    // Soma do peso
    somaPeso += dadosPessoas[2][id]

    // IMC de cada pessoa
    imc = dadosPessoas[2][id] / (dadosPessoas[1][id] * dadosPessoas[1][id])
    console.log('O IMC do(a)', dadosPessoas[0][id], 'é', imc)

    //Análise do IMC
    if (maiorImc < imc){
        maiorImc = imc
        nomeImcMaior = dadosPessoas[0][id]
    }else{
        menorImc = imc
        nomeImcMenor = dadosPessoas[0][id]
    }

    // Análise da maior e menor altura
    if (maiorAltura < dadosPessoas[1][id]){

        maiorAltura = dadosPessoas[1][id]
        nomeAlturaMaior = dadosPessoas[0][id]
    }else {
        menorAltura = dadosPessoas[1][id]
        nomeAlturaMenor = dadosPessoas[0][id]

    }

    // Análise da maior e menor peso
    if (maiorPeso < dadosPessoas[2][id]){

        maiorPeso = dadosPessoas[2][id]
        nomePesoMaior = dadosPessoas[0][id]

    }else {
        menorPeso = dadosPessoas[2][id]
        nomePesoMenor = dadosPessoas[0][id]

    }
}
// A média de altura
console.log('Altura média', somaAltura/(id))

//A média de peso
console.log('Peso médio', somaPeso/id)

//O nome da pessoa mais alta e sua altura
console.log('Maior altura é de', nomeAlturaMaior, 'com', maiorAltura)

//O nome da pessoa mais baixa e sua altura
console.log('Menor altura é de', nomeAlturaMenor, 'com', menorAltura)

//O nome da pessoa com peso maior e seu peso
console.log('Maior peso é de', nomePesoMaior, 'com', maiorPeso)

//O nome da pessoa com peso menor e seu peso
console.log('Menor peso é de', nomePesoMenor, 'com', menorPeso)

//O nome da pessoa com IMC maior e seu IMC
console.log('Maior IMC é de', nomeImcMaior, 'com', maiorImc)

//O nome da pessoa com IMC menor e seu IMC
console.log('Menor IMC é de', nomeImcMenor, 'com', menorImc)
