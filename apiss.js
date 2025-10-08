//definir la funcion 

/*function saludar(nombre){
    alert('hola ${nombre}')
    return 'hola $ {nombre} & $ {apellido}'
}
 function calculo (n1,n2){
 return n*1 n2
 }*/
  let key = "https://api.openf1.org/v1/car_data?driver_number=55&session_key=9159&speed%3E=315"
 


 boton.onclick = function () {
    fetch('https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png')
    .then(res => res.json())    
    .then(productos => {
            let articulo = document.querySelector('.productos')

            for (let index = 0; index < 3; index++) {
                articulo.innerHTML = `<h2>${producto.title}</h2>
<img src= "${producto.image}">
<p>${producto.description}</p>`
            }
        })
}