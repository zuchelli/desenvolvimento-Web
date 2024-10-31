var i, tab, result
i=0
tab=parseInt(prompt("Digite a tabuada que deseja saber"))
while(i<11)
{
    result=tab*i
    document.write("<h2>"+tab+"X"+i+"="+result+"</h2>")
    i++
}

