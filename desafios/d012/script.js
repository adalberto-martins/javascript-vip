function verificar() {

    let prod = window.prompt('Qual o produto deseja analisar hoje?')
    let pre = Number(prompt('Qual era o preço do produto?'))
    let preatu = Number(window.prompt('Qual é o preço atual do produto?'))
    let res = document.querySelector('section#res')
    let dif = pre - preatu
    let vari = dif * 100 / pre

    if (!prod || !pre || !preatu) {
        alert(`Dados invalidos. Por Favor digite um produto, um preço e preço atual validos`)
        res.innerHTML = ''
        return
    } else if( pre > preatu) {
        res.innerHTML = `<p><strong>Analisando os valores informados</strong></p>`
        res.innerHTML += `<p>Hoje o ${prod}, está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R$ ${dif.toFixed(2)} em relção ao preço anterior.</p>`
        res.innerHTML += `Uma variação de ${vari.toFixed(1)}% para baixo.`
    } else {
        let aum = preatu - pre
        let variaum = (aum * 100) / pre
        res.innerHTML = `<p><strong>Analisando os valores informados</strong></p>`
        res.innerHTML += `<p>Hoje o ${prod}, está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu R$ ${aum.toFixed(2)} em relção ao preço anterior.</p>`
        res.innerHTML += `Uma variação de ${variaum.toFixed(1)}% para cima.`
    }
}