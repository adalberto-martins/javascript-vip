function desconto() {
    let prod = prompt(`Qual é o produto que você está comprando?`)
    let pre = Number(prompt(`Qual é o preço de ${prod}?`))
    let des = (pre * 10 / 100)
    let pren = pre - des
    let res = document.querySelector('section#res')
    if(!prod || isNaN(pre) || pre <= 0) {
        alert('Digite um produto e um preço Válido!')
        res.innerHTML = ''
        return
    }

    res.innerHTML = `<p><strong>Calculando desconto de 10% para ${prod}</strong></p>`
    res.innerHTML += `<p>O preço original era R$ ${pre.toFixed(2).replace('.', ',')} reais</p>`
    res.innerHTML += `Você acaba de ganhar R$ ${des.toFixed(2).replace('.', ',')} reais de desconto (-10%).`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${pren.toFixed(2).replace('.', ',')} reais</p>`
}