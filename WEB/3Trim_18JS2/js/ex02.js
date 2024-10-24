var nome,n1,n2,n3,media,freq
nome=prompt("digite seu nome")
n1=parseFloat(prompt("digite a nota do primeiro trimestre "))
n2=parseFloat(prompt("digite a nota do segundo trimestre "))
n3=parseFloat(prompt("digite a nota do terceiro trimestre "))
freq=parseFloat(prompt("digite sua frequencia percentual nas aula "))
media=(n1+n2+n3)/3
if(media>=7 && freq>=75)
{
    alert(nome+" sua media é de "+media+" e sua frequencia está adequada, você está aprovado! ;) ")
}
if(media>=7 && freq<75)
{
    alert(nome+" sua media é de "+media+" mas sua frequencia está abaixo do esperado, você terá que realizar um exame!")
}
else
{
    alert(nome+" sua media é de "+media+" você está reprovado! :(")
    
}