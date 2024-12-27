function contar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var passo = document.getElementById('passo')
    var calculo = document.getElementById('calculo')


    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        calculo.innerHTML = 'Impossivel contar!'
        // window.alert('[ERRO] Faltam dados!')
    }

    else{
        calculo.innerHTML = 'Contando: <br>'
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)
        var passo3 = Number(passo.value)

        if(passo3 <= 0){ 
            window.alert('Passo inválido! considerando PASSO 1')
            passo3 = 1
        }

        if(num1 < passo3){
            for (x = num1; x <= num2; x += passo3) {
            calculo.innerHTML += `${x} \u{1F449}`
            } 
            calculo.innerHTML +=`\u{1F3C1}`
        }
        else{
            for(x = num1; x >= num2; x-=passo3) {
                calculo.innerHTML += `${x} \u{1F449}`
            }
            calculo.innerHTML +=`\u{1F3C1}`
        }
    }
}