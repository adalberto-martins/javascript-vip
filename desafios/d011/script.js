function verificar() {
    let ano = Number(prompt(`Qual é o ano que você quer verificar?`))
    let res = document.querySelector('section#res')

    if(ano % 4 == 0 && ano % 100 != 0  ||  ano % 400 == 0) { 
        res.innerHTML = `<p>Analisando o ano de ${ano}...</p>`
        res.innerHTML = `O ano de ${ano} <strong class="bi">É BISSEXTO ✅</strong class="bi">;`  
    } else {
        res.innerHTML = `<p>Analisando o ano de ${ano}...</p>`
        res.innerHTML = `O ano de ${ano} <strong class="nbi">NÂO É BISSEXTO ❌</strong class="nbi">`
    }

}