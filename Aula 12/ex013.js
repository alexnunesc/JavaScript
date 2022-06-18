var agora = new Date()
var diaSem = agora.getDay()
/*
0 - dom
1 - seg
2 - ter
3 - qua
4 - qui
5 - sex
6 - sab
*/
switch(diaSem){
    case 0:
    console.log('Dom')
    break
    case 1:
    console.log('Seg')
    break
    case 2:
    console.log('Ter')
    break
    case 3:
    console.log('Qua')
    break
    case 4:
    console.log('Qui')
    break
    case 5:
    console.log('Sex')
    break
    case 6:
    console.log('Sab')
    break
    default:
    console.log('Error')
    break 
}
