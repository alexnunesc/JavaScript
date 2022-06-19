
var na = document.querySelector('input#pais')/*sempre que for verificar se uma VAR é == ou != de algo declarar: Ex: VAR.value == "Brasil"
ou por .value na seleção de valor*/
var res = document.querySelector('div#res')//mostrar valor
var re = document.querySelector('input#re')//elemete que executa ação
re.addEventListener('click', ver)//monitorar gatilho da ação

function ver(){
    if(na.value == 'Brasil' || na.value == 'brasil' ) {/*sempre que for verificar se uma VAR é == ou != de algo declarar: Ex: VAR.value == "Brasil"
    ou por .value na seleção de valor*/
        res.innerHTML = 'Você está no Brasi, é pode realizar a provar.'}else {
            res.innerHTML = 'Você não pode realiza a provar, pois esta fora do pais.'
        }

    }


    