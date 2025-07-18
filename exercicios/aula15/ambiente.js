let nun = [5, 8, 2, 9, 3]
nun.push(1)
nun.sort()
console.log(nun)
console.log(`O vetor tem ${nun.length} posições`)
console.log(`O primeiro valor do vetor é ${nun[0]}`)
let pos = nun.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}