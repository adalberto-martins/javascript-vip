function converter() {
    let cot = parseFloat(prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`))
    let cart = parseFloat(prompt(`Quantos R$ você tem na carteira?`))
    let res = document.querySelector('section#res')

    if(!cot || !cart) {
        alert(`Digite um valor!`)
        res.innerHTML = ''
        return
    }

    let con = cart / cot

    res.innerHTML = `Você tem R$ ${cart.toFixed(2).replace('.', ',')} na carteira.<br>` +
                    `Com a cotação de R$ ${cot.toFixed(2).replace('.', ',')} por dólar,<br>` +
                    `Você pode comprar US$ ${con.toFixed(2).replace('.', ',')}.`
}