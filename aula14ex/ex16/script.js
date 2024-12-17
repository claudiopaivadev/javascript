function contar() {
    var n1 = document.getElementById('n1')
    var num1 = Number(n1.value)
    var n2 = document.getElementById('n2')
    var num2 = Number(n2.value)
    var passo = document.getElementById('passo')
    var passo3 = Number(passo.value)
    var calculo = document.getElementById('calculo')


    if (n1.value.length == 0 || passo.value.length == 0) {
        calculo.innerHTML = 'Impossivel contar!'
    }
    else{
        //calculo.innerHTML = `${num1} ${num2} ${passo3}`

        do{
            calculo.innerHTML(num1)
            num1 = num1 + passo3
        } while (num1 <= num2)

        /*var x = num1
        while (x <= num2) {
            calculo.innerHTML(x)
            x = x + passo3
        }*/

        /*for (num1; num1 <= num2; num1 = num1 + passo3) {
            calculo.innerHTML == `${num1}`
        }*/
    }

}