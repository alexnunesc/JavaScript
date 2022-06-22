//alert('Olá, Mundo!')
var corpo = document.querySelector('body')
function carregar(){
    
    var msg = document.querySelector('div#msg')//isso é um objeto
    var img = document.querySelector('img#imagem')//seleção de objectos
    var data = new Date() //pega data do sistema
    var hora = data.getHours() // escolher qual paramentro da data usar
  
    msg.innerHTML = `Agora são ${hora} horas` //receberá a ação "mudar o texto"
    if(hora > 5 && hora < 12){
        img.src = 'img/m.png'//para manipular imagens.
        corpo.style.background = '#84b1da'
        msg.innerHTML += ' <br> Bom Dia!'
    }else if(hora > 11 && hora < 18){
        img.src = 'img/t.png' //para manipular imagens.
        corpo.style.background = '#fdc9ba'
        msg.innerHTML += ' <br> Boa Tarde!'
    }else{
        img.src = 'img/n.png' //para manipular imagens.
        // por o endereço da img completo
        corpo.style.background = '#1e3138'
        msg.innerHTML += ' <br> Boa Noite!'

        //document.body.style.background = '#1e3138' //para adicionar a cor diretamente sem usar var corpo.
    }
}
//Para inicializar essa função no momento que a página for abertar fazer o seguinte comando no HTML <body onload="carregar()">