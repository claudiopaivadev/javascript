function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade>=0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/homemcriança.jpg')
            }
            else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'imagens/homemjovem.jpg')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            }
            else{
                //Idoso
                img.setAttribute('src', 'imagens/homemvelho.jpg')
            }
        } 
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade>=0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/mulhercriança.jpg')
            }
            else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'imagens/mulherjovem.jpg')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulheradulta.jpg')
            }
            else{
                //Idoso
                img.setAttribute('src', 'imagens/mulhervelha.jpg')
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}