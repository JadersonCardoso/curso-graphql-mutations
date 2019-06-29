const { usuarios, proximoId } = require('../data/db')

module.exports = {
    //{nome, email, idade}

    novoUsuario(_, args) {
        const emailExistente = usuarios.some(u => u.email === args.email)
        if( emailExistente) {
            throw new Error('Já existe e-mail cadastrado!')
        }
        
        const novo = {
            id: proximoId,
            ...args,
            perfil_id: 1,
            status: 'ATIVO'

        }
        usuarios.push(novo)
        return novo
    }
}