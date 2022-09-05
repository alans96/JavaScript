function contar(){

    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'impossivel contar'
        //window.alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // Contagem cresente
        if (i < f){
            for(let c = i; c <= f; c +=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        // Contagem regressiva
        }else{
            for(let c = i; c >= f; c -=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        
    }

}