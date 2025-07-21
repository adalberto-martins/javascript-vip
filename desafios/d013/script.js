function verificar() {
    let nome = window.prompt(`Qual é o nome do aluno?`)
    let res = document.querySelector(`section#res`)

    if (!nome) {
        window.alert (`[ERRO!] Nome inválido!, Digite o nome do aluno(a)!`)
        res.innerHTML = ''
        return
    }

    let not1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let not2 = Number(window.prompt(`Segunda nota de ${nome}:`))

    if(not1 === '' || not2 === '') {
        window.alert(`[ERRO!] As notas não podem estar em branco.`)
        res.innerHTML = ''
        return
    }

    not1 = Number(not1)
    not2 = Number(not2)

    if (
        isNaN(not1) || isNaN(not2) || not1 < 0 || not1 > 10 || not2 < 0 || not2 > 10
    ) {
        window.alert(`[ERRO!] As notas devem ser números entre 0 e 10.`)
        res.innerHTML = ''
        return
    }

    let media = (not1 + not2) / 2

    res.innerHTML = `<p><strong>Analisando a situação de ${nome}</strong></P>`
    res.innerHTML += `<p>Com as notas ${not1.toFixed(1).replace('.', ',')} e ${not2.toFixed(1).replace('.', ',')} a <strong>média é ${media.toFixed(1).replace('.', ',')}.</strong></p>`

    if (media >= 6 ) {
        res.innerHTML += `<p>Com média acima 6,0, o aluno está <strong class="aprovado">APROVADO</strong></P>`
    }else if (media < 6 && media >= 3) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <strong class="recuperacao">RECUPERAÇÂO</strong></P>`
    } else if (media < 3) {
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está<strong class="reprovado"> REPROVADO</strong></P>`
    }
    
}