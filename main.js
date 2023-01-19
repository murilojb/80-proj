lista=[]
function enviar(){
    var mostrar=[]
    for (var i = 1; i <=4; i++) {
        var n1=document.getElementById("n"+i).value
lista.push(n1)
        
    }
    var tamanho=lista.length
    for (var m = 0; m <=tamanho; m++) {

mostrar.push("<h4> nome:"+lista[m]+"</h4>")
        
    } 
    document.getElementById("mostrar").innerHTML=mostrar 
}