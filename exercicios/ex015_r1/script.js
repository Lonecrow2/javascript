function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `São ${hora} horas`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
        img.src = 'imagens/dia_render.png'
        document.body.style.backgroundColor = '#af7200'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
        img.src = 'imagens/tarde_render.png'
        document.body.style.backgroundColor = '#20a000'
    } else {
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
        img.src = 'imagens/noite_render.png'
        document.body.style.backgroundColor = '#001524'
    }
}