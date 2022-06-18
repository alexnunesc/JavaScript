/*var idade = 18
if(idade < 16) {
    console.log('Não votar')
}else {
    if(idade >= 16 && idade < 18){
       console.log('Voto opcional') 
    }else{
        console.log('Votar')
    }
}*/


//Usando o else if

var idade = 67
console.log(`Você tem ${idade} anos`)
if(idade < 16) {
    console.log('Não votar')
}else if (idade < 18 || idade > 65){
    console.log('Voto opicional')
}else{ 
    console.log('Voto obrigatório')
}