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

//############################################################################
//Uma função pode retorna qualquer tipo de dado ate mesmo outra função.

function terceiraIdade(idade){
   
    if(typeof idade !== 'number'){
        return 'Informe sua idade.'
    }else if(idade >= 60){
        return true;
    }else{
        return false;
    }
}
console.log(terceiraIdade(60))
