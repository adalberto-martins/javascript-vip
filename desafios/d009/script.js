function ajuste() {
    let nome = prompt(`Qual é o nome do Funcionário?`)
    let sal = Number(prompt(`Qual é o salário de ${nome}?`))
    let por = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let res = document.getElementById('res')
    let aum = (sal * (por / 100))
    let nsal = sal + aum
    
    if(!nome || isNaN(sal) || isNaN(por) || sal <=0 || por <=0) {
        alert(`Digite um nome e salário e porcentagem validos!`)
        res.innerHTML = ''
        return
    } else {
        res.innerHTML = `<p><strong>${nome} recebeu um aumento salarial!</strong></p><br>`
        res.innerHTML += `<p>O salário atual era R$ ${sal.toFixed(2).replace('.', ',')}.</p>`
        res.innerHTML += `<p>Com um aumento de ${por}%, o Salário vai aumentar R$ ${aum.toFixed(2).replace('.', ',')} no próximo mês.</p>`
        res.innerHTML += `<p>E apartir daí, ${nome} vai passar a ganhar R$ ${nsal.toFixed(2).replace('.', ',')}.</p>`
    }
}