//definir la funcion 

/*function saludar(nombre){
    alert('hola ${nombre}')
    return 'hola $ {nombre} & $ {apellido}'
}
 function calculo (n1,n2){
 return n*1 n2
 }*/

fetch ("https://openf1.org/9159")
.then(res => res. json())
•then (productos => {
//Escribo Lo que quiero que muestre la pagina
Let articulo = document. querySelector(.productos)

for ( let index = o; index < 3; index++){
     articulo. innertHTML += <div> 
    <h2>${producto[index].title}</h2
    <img src="${producto[index].image}">
    <p>{producto[index].decription}
}
