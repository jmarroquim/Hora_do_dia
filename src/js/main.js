function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        document.body.style.background = '#95b271'
        img.src = './src/assets/images/fotomanha.webp'
    } else if (hora >= 12 && hora <= 18) {
        //bora tarde
        document.body.style.background = '#d3c1ab'
        img.src = './src/assets/images/fototarde.webp'
    } else {
        //boa noite
        document.body.style.background = '#752b2b'
        img.src = './src/assets/images/fotonoite.webp'
    }
}
