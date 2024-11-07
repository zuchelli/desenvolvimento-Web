/*Função soma sem retorno*/
function somar(n1,n2){
    var r 
    r=n1+n2
    alert("Função soma sem retorno "+r)
}
somar(3,5)
/*Função subtração com retorno*/
function subtrair(n1,n2){
    var r 
    r=n1-n2
    return(r)
}
var result
result=subtrair(10,9)
alert("Função com Retorno"+result)