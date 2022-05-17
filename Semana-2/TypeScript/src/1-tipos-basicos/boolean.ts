let estaAtivo: boolean;

estaAtivo = true;

function mapearStatus(status:boolean){
    if (status){
        return `Usuário ativo!`
    } else {
        return `Usuário inativo!`
    }
}

mapearStatus(true);