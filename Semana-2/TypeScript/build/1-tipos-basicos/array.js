"use strict";
const gatos = [
    'Jorge',
    'Estela',
    'Bethy'
];
gatos.push('Marrie');
function exibeGatos(gatos) {
    return `Os gatos são: ${gatos.join(', ')}`;
}
exibeGatos(gatos);
