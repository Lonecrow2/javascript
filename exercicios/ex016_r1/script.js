function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtanoid')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/m_criança.png')
            } else if (idade < 29) {
                //jovem
                img.setAttribute('src', 'imagens/m_jovem.png')
            } else if (idade < 59) {
                //adulto
                img.setAttribute('src', 'imagens/m_adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/m_velho.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'mulher'
                if (idade >= 0 && idade < 12) {
                    //criança
                    img.setAttribute('src', 'imagens/f_criança.png')
                } else if (idade < 29) {
                    //jovem
                    img.setAttribute('src', 'imagens/f_jovem.png')
                } else if (idade < 59) {
                    //adulto
                    img.setAttribute('src', 'imagens/f_adulto.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'imagens/f_velho.png')
                }
            }
            res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
            res.appendChild(img)
        }
    }
