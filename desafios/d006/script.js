function converter() {
    let temp = parseFloat(prompt(`Digite a temperatura em °C (Celsius): `))
    let res = document.querySelector('section#res')

    if (isNaN(temp)) {
    alert(`Por favor, digite uma temperatura válida em Celsius!`);
    res.innerHTML = '';
    return;
    }   
    
    let k = temp + 273.15
    let f = (temp * 9/5) + 32
    
   

    res.innerHTML = `<p><strong>A Temperatura de ${temp.toFixed(1).replace('.', ',')}°C, corresponde a...</strong></p>`
    res.innerHTML += `<p>${k.toFixed(1).replace('.', ',')} K (Kelvin)</p>`
    res.innerHTML += `<p>${f.toFixed(1).replace('.', ',')}°F (Fahrenheit)</p>`
    
}