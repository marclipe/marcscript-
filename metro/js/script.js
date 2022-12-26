function enviar() {
    var number = document.getElementById('number')
    var res = document.getElementById('resposta')   
    if (number.value.length == 0) {
        window.alert('Por favor não deixe o campo vazio!')
    } else {
        var num = Number(number.value)
        if (num % 1 == 1 || num % num == 1) {
            res.innerHTML += `O número ${num} é primo!` 
        } else {
            res.innerHTML += `O número ${num} é composto!`
        }
    }
}