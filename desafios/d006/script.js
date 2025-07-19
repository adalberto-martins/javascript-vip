function converter() {
    let dist = prompt('Digite uma distância em metros (m)')
    let res = document.querySelector('section#res')

    if (!dist || Number(dist) <= 0) {
        alert(`Por favor, digite uma distância válida em metros!`)
        res.innerHTML = ''
        return
    }
    
    let km = dist / 1000
    let hm = dist / 100
    let dam = dist / 10
    let dm = dist * 10
    let cm = dist * 100
    let mm = dist * 1000
    if(dist == 0) { 
        alert(`Por favor Digite uma Distancia em metros!`)
        res.innerHTML = ''
    }

    res.innerHTML = `<p><strong>A Distancia de ${dist} metros, corresponde a...</strong></p>`
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm} decimetros (dm)</p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
}