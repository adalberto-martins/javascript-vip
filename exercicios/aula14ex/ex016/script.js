function contar() {
    let ini = document.getElementById('itxtin')
    let fim = document.getElementById('itxtfi')
    let passo = document.getElementById('itxtpas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert(`[ERRO] Faltam dados!`)
        res.innerHTML = `"Impossível contar!"`
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert(`Passo invalido! Considerando PASSO 1`)
            p = 1
        } 
            
        if ( i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`            
            }            
        } else {
            // contagem decrescente
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }            
        }
        res.innerHTML += ` \u{1f3C1}`
        
    }
}


