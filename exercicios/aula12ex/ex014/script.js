function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} Minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'  
        document.body.style.background = '#c7b087' 
        
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png' 
        document.body.style.background = '#cb9056'
        
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#2b6b97'
    }
}