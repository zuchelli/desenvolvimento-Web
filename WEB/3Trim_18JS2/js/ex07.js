var cm=[], alm=[], jantar=[],prato, i=0

do{
    prato=prompt("Digite o prato do café da manhã")
     cm.push(prato)
}while(prato!=null)
 cm.pop()
 alert(cm)
 document.write("<h1>Café da Manhã</h1> <br> <ol>"+cm+"</ol>")
 do{
    prato=prompt("Digite o prato do almoço")
     alm.push(prato)
}while(prato!=null)
 alm.pop()
 alert(alm)
 document.write("<h1>Almoço</h1> <br> <ol>"+alm+"</ol>")
 do{
    prato=prompt("Digite o prato do jantar")
     jantar.push(prato)
}while(prato!=null)
 jantar.pop()
 alert(jantar)
 document.write("<h1>Jantar</h1> <br> <ol>"+jantar+"</ol>")