const nome = 'Wendell'
const sexo = 'F'
const idade = 60
const contribuicao = 30

const soma = idade + contribuicao

if (sexo === 'M' && contribuicao >= 35 && soma >= 95) {
    console.log(`${nome}, você pode se aposentar.`)
} else if (sexo === 'F' && contribuicao >= 30 && soma >= 85) {
    console.log(`${nome}, você pode se aposentar.`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar.`)
}
