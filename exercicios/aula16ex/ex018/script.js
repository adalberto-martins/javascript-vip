let nun = document.querySelector('input#inun')
let lista = document.querySelector('select#ilista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }


}

function adicionar() {
    if(isNumero(nun.value) && !inLista(nun.value, valores)) {
        valores.push(Number(nun.value))
        let item = document.createElement('option')
        item.text = `Valor ${nun.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    nun.value = '' // limpar o campo
    nun.focus() // para selecionar o campo
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores antes de Finalizar!`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<p/>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos Valores digitados e ${media.toFixed(2).replace('.', ',')}.</p>`

    }


}

