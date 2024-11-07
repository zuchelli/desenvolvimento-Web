/*var a=[4, 8, 3, 5, 9]
alert(a)
alert(a[3])
a[0]=7
alert(a)*/
/*Percorrendo array com laço de repetição 
var i 
for(i=0;i<a.length;i++)
{
    document.write("<h2>"+a[i]+"</h2>")
}*/
/*
lista=["Gervronelson", "Estrada A", 1880, 80.5, true]
alert(lista)

for(var i=0; i<lista.length;i++)
{
    document.write("<h2>"+lista[i]+"</h2>")
}
//Adicionar elemento na Array
lista.push("84500-000")
alert(lista)
//Remover o ultimo da lista 
lista.pop()
alert(lista)
//remover elemento no primeiro item da lista
lista.shift()
alert(lista)
//adicionar elemento no primeiro item da lista
lista.unshift("Gervrásio")*/
/*Faca um programa que seja possivel inserir frutas em uma lista item a item atraves de uma caixa de dialogo 
a inserção deve encerrar quando o usuario digitar fim, deve ser apresentada a lista no doc html */ 
/* VERSÃO 1
var i,fruta,lista=[]
do{
    fruta=prompt("Digite a fruta")
    if(fruta!="fim"){
        lista.push(fruta)
    }
}while(fruta!="fim")
 document.write(lista)
*/
/*VERSÃO 2
var i,fruta,lista=[]
do{
    fruta=prompt("Digite a fruta")
     lista.push(fruta)

}while(fruta!="fim")
lista.pop()
 document.write(lista)
 */
 var i,fruta,lista=[]
 do{
     fruta=prompt("Digite a fruta")
      lista.push(fruta)
 }while(fruta!=null)
  lista.pop()
  document.write(lista)