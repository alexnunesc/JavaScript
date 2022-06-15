/*window.document.write("Olá Mundo!")
window.document.write(document.characterSet)
window.document.write(document.URL)

window.document.write(navigator.userAgent)

window.document.write(document.body.h1)*/

//Manipulando elementos do document.

//EX 01

//var p1 = document.getElementsByTagName('p')[0] //para seleciar qual P sera mostrado começar no 0
//document.write(p1.innerText) //Para mostrar o que está dentro da Var p1, no caso innerText

//EX 02

//var p1 = document.getElementsByTagName('p')[1] //para seleciar qual P sera mostrado começar no 0
//document.write(`está escrito assim "${p1.innerText}"`) //Para mostrar o que está dentro da Var p1, no caso innerText


//p1.style.color = 'black' //Add CSS directamente ao elemento.

//var cuerpo = document.body

//cuerpo.style.background = 'violet'

/*/EX 03
var p1 = document.getElementsByTagName('p')[1] 
document.write(`está escrito assim "${p1.innerHTML}"`)*/

/*/EX 04 com  Alert
var p1 = document.getElementsByTagName('p')[1] 
alert(`está escrito assim "${p1.innerHTML}"`)*/



//Manipulando elementos por ID.

var corpo = window.document.body
var ha = window.document.getElementeById('msg')
ha.style.background = 'green'
ha.innerText = 'Aguardando...'

