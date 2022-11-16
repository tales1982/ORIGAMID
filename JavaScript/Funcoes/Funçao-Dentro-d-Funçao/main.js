
let proficao = 'Designer'

function dados(){
    let nome ='Tales';
    function outrosDados(){
        let endereco = 'Grevenmacher';
        let idade = 39
        return `${nome}, ${idade} Anos, Cidade ${endereco}, Profisao ${proficao}`
    }
     return outrosDados()
    
}
console.log(dados())