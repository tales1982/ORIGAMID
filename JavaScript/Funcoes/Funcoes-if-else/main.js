function corFavorita(cor){
    if(cor ==='azul'){
        return 'Você gosta do Ceu'
    }else if(cor === 'verde'){
        return 'Voce gosta da Floresta'
    }else{
        return 'Voce nao gosta de nada.'
    }
}

console.log(corFavorita("azul"));
console.log(corFavorita("verde"));
console.log(corFavorita(""));