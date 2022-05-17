const gatos: string[] = [
    'Jorge',
    'Estela',
    'Bethy'
]

gatos.push('Marrie');

function exibeGatos(gatos: string[]){
    return `Os gatos são: ${gatos.join(', ')}`
}

exibeGatos(gatos)