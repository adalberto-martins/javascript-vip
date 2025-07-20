function calcular() {
    let a = Number(prompt("Qual é o valor de a?"))
    let b = Number(prompt("Qual é o valor de b?"))
    let c = Number(prompt("Qual é o valor de c?"))

    let res = document.getElementById('res')

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        res.innerHTML = `Por favor, digite valores válidos para a, b e c.`
        return
    }

    let delta = b**2 - 4*a*c

    res.innerHTML = `<p><strong>Resolvendo Bhaskara</strong></p>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4.${a}.${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong class="marcado">Δ = ${delta}</strong class="marcado"></p>`
    

}

