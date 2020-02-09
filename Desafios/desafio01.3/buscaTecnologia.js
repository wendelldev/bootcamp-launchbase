const users = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function checaTechs(tech, usuarios) {
    this.tech = tech

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].tecnologias.indexOf(this.tech) >= 0) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com ${this.tech}`)
        } else {
            console.log(`O usuario ${usuarios[i].nome} não trabalha com ${this.tech} e sim com ${usuarios[i].tecnologias}`)
        }
    }
}

checaTechs('HTML', users)