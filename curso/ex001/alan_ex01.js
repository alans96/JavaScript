/* Aprovação do Aluno */

//Dados
const escola = prompt('Qual é a escola do aluno?').toLocaleUpperCase()
const n1 = parseFloat( prompt('Primeira nota:')) 
const n2 = parseFloat( prompt('Segunsda nota:'))
const n3 = parseFloat( prompt('Terceira nota:'))
const n4 = parseFloat( prompt('Quarta nota:'))

// Condição de escola válida
if ((escola == 'A') || (escola == 'B') || (escola == 'C') ){
    const soma = n1 + n2 + n3 + n4
    if ((Number.isNaN(n1)) || (Number.isNaN(n2)) || (Number.isNaN(n3)) || (Number.isNaN(n4)) ){
        console.log('Revise as notas')
    } else{
        // Casos de cada escola
        switch (escola){
            case 'A':
                if (soma > 60){
                    console.log('O aluno da escola ' + escola + ' foi APROVADO com a nota ' + soma);
                } else {
                    console.log('O aluno da escola ' + escola + ' foi REPROVADO com a nota ' + soma);
                }
                break;
            case 'B':
                if (soma > 70){
                    console.log('O aluno da escola ' + escola + ' foi APROVADO com a nota ' + soma);
                } else {
                    console.log('O aluno da escola ' + escola + ' foi REPROVADO com a nota ' + soma);
                }
                break
            default:
                if ((soma > 60) && ((n1 >= 10) && (n2 >= 10) && (n3 >= 10) && (n4 >= 10))){
                    console.log('O aluno da escola ' + escola + ' foi APROVADO com a nota ' + soma);
                } else{
                    console.log('O aluno da escola ' + escola + ' foi REPROVADO com a nota ' + soma);
                }
                break;
    }
    }  
}else{
    console.log('Escola não cadastrada!')
}