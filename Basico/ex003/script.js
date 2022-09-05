function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const anoPessoa = document.getElementById('txtano')
    const res = document.getElementById('res')

    if (anoPessoa.value.length == 0 || anoPessoa.value > ano){
        alert(`[ERRO] Verificar os dados`)

    } else{
        // Cálculo da idade
        const sexPessoa = document.getElementsByName('radsex')
        const idade = ano - anoPessoa.value
        let sex = ''

        //Imagem
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Verificar o Sexo
        if (sexPessoa[0].checked){
            sex = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/menina1.jpg')
                
            } else if (idade < 21){
                //Adolecente
                img.setAttribute('src', 'imagens/menina2.jpg')

            }else if (idade < 51){
                //Mulher
                img.setAttribute('src', 'imagens/menina3.jpg')
                
            }else {
                // Idosa
                img.setAttribute('src', 'imagens/menina4.jpg')
            }

            res.innerHTML = `Idade da ${sex} calculada ${idade}`

        } else{
            sex = 'Homen'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/menino1.jpg')
                
            } else if (idade < 21){
                //Adolecente
                img.setAttribute('src', 'imagens/menino2.jpg')

            }else if (idade < 51){
                //Mulher
                img.setAttribute('src', 'imagens/menino3.jpg')
                
            }else {
                // Idosa
                img.setAttribute('src', 'imagens/menino4.jpg')
            }

            res.innerHTML = `Idade do ${sex} calculada ${idade}`
        }

        res.appendChild(img)

    }
}