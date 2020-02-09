const progamador = {
    nome: 'Wendell',
    idade: 22,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop'},
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O user ${progamador.nome} tem ${progamador.idade} anos e usa a tecnologia ${progamador.tecnologias[0].nome} com especialidade em ${progamador.tecnologias[0].especialidade}`)
