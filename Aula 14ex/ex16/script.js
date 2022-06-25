
/*Soluçãonoconsole.
let inicio = -1
let fim = 10
let passo = 1

if (inicio < 0 && fim < inicio) {
    for (inicio ; inicio >= fim; inicio -= passo){
        console.log(`passo ${inicio}`)
    }
} else {
    for (inicio ; inicio <= fim; inicio += passo){
        console.log(`passo ${inicio}`)
    }
}
*/

//solução no HTML
let inicio1 = document.querySelector('input#inicio')
let fim1 = document.querySelector('input#fim')
let passo1 = document.querySelector('input#passo')//seleção de objetos.


let contar = document.querySelector('input#contar')//seleção doobjeto que vai acionar a função.
contar.addEventListener('click', res)//monitoramento e acionamento da função.

let resultado = document.querySelector('div#resultado') //seleção doobjeto que irá receber os dados.

function res(){
    resultado.innerHTML = 'Contando: <br> ' // para mudar a msg inicial da div.

    let inicio = Number(inicio1.value)
    let fim = Number(fim1.value)//bloco para converteras Vars em number
    let passo = Number(passo1.value)

   
    if(passo > fim && fim >= 0){ 
        //bloco para condições de possiveis erros do usuário
        alert(' "PASSO" não pode ser maior que o "FIM" ') 
        
    }else if(passo.value == '' || passo == 0){
        alert(' "PASSO" não pode esta vazio, será considerado o valor "1" ') //bloco para condições de possiveis erros do usuário
        passo = 1 //a mesma coisa de passo = passo + 1... para o passo valer 1, nesse caso.
        teste()// chamando função
        
    }else {//bloco de condições
        
        teste() // chamando função

        //É a mesma coisa que adicionar o código abaixo no lugar da função teste()

    }

    //função que será chamada em todos osmomentos decondições, e validações do resultados , que o usuário digitou.
    function teste(){
        if (inicio > fim ) {

            for (inicio ; inicio >= fim; inicio -= passo){
                
                resultado.innerHTML += ` ${inicio} \u{1F449}`
            }
        } else {
    
            for (inicio; inicio <= fim; inicio += passo){
                
                resultado.innerHTML += ` ${inicio} \u{1F449}`
            }
        }
        resultado.innerHTML += ` ..\u{1F3C1}`
    }
}
