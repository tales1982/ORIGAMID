//Crie uma função para verificar se o valor e true
const sol = false

function irPraia(){
    if (sol === true){
        let  res = document.getElementById("res")
        res.innerText = "O dia estar muito bonito Vamos para a Praia.";
        
    }else{
        res.innerText = "O dia esta muito chuvoso vamos ficar em casa."
    }
}
irPraia()