var frase
frase="A previsão de hoje é de que teremos ventos de mais de 100km/h em nossa região"
alert(frase)

var v1, v2, soma

v1=45
v2=55

soma= v1 + v2

alert("o resultado da soma é "+soma)

/*Exibindo o resultado em Html */
 document.write("<h2>"+soma+"</h2>")
 /*Soma com valores digitados pelo usuario */
 v1=prompt("Entre com o valor")
 v2=prompt("Entre com outro valor")
 /*As variaveis recebidas sao do tipo String e precisam ser convertidas para tipo númerico */
 soma =parseInt(v1)+parseInt(v2) 
 alert(soma)