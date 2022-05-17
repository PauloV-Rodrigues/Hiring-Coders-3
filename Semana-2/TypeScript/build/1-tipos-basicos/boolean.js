"use strict";
let estaAtivo;
estaAtivo = true;
function mapearStatus(status) {
    if (status) {
        return `Usuário ativo!`;
    }
    else {
        return `Usuário inativo!`;
    }
}
mapearStatus(true);
