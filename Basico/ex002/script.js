function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <12){
        //Bom Dia
        
        document.body.style.background = '#1b64b8f5'

    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#ad5f17'

    } else{
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#15043bf5'
    }
}
