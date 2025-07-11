var idade = 65
if (idade < 16) {
    console.log(`Não Vota`)
} else if (idade <= 17 || idade >= 65) {
        console.log(`Voto Opcional`)
} else {
    console.log(`Voto Obrigatorio`)
}