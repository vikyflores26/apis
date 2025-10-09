//definir la funcion 

/*function saludar(nombre){
    alert('hola ${nombre}')
    return 'hola $ {nombre} & $ {apellido}'
}
 function calculo (n1,n2){
 return n*1 n2
 }*/
  function mostrarPilotos() {
  document.getElementById("resultado").innerHTML = "<p>Cargando pilotos...</p>";

  fetch("https://api.openf1.org/v1/drivers?session_key=latest")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      texto = "<h3 class='mb-4'>Pilotos actuales</h3><div class='row justify-content-center'>";

      for (i = 0; i < 10; i++) {
        piloto = datos[i];

        nombre = piloto.full_name ? piloto.full_name : "Desconocido";
        numero = piloto.driver_number ? piloto.driver_number : "-";
        bandera = piloto.country_code
          ? "https://flagsapi.com/" + piloto.country_code + "/flat/64.png"
          : "";
        foto = piloto.headshot_url ? piloto.headshot_url : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

        texto +=
          "<div class='col-md-3 col-sm-6 mb-3'>" +
          "<div class='card bg-dark text-white border-light h-100'>" +
          "<img src='" + foto + "' class='card-img-top' alt='Foto del piloto'>" +
          "<div class='card-body'>" +
          "<h5 class='card-title'>" + nombre + "</h5>" +
          "<p class='card-text'>N° " + numero + "</p>" +
          (bandera ? "<img src='" + bandera + "' alt='Bandera' width='40'>" : "") +
          "</div></div></div>";
      }

      texto += "</div>";
      document.getElementById("resultado").innerHTML = texto;
    })
    .catch(function (error) {
      document.getElementById("resultado").innerHTML =
        "<p>Error al obtener los datos de los pilotos.</p>";
    });
}

function mostrarCarreras() {
  document.getElementById("resultado").innerHTML = "<p>Cargando carreras...</p>";

  fetch("https://api.openf1.org/v1/meetings?year=2024")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      texto = "<h3 class='mb-4'>Carreras del 2024</h3><div class='row justify-content-center'>";

      for (i = 0; i < 10; i++) {
        carrera = datos[i];

        texto +=
          "<div class='col-md-4 col-sm-6 mb-3'>" +
          "<div class='card bg-secondary text-white border-light p-3'>" +
          "<h5>" + carrera.meeting_name + "</h5>" +
          "<p>" + carrera.country_name + "</p>" +
          "</div></div>";
      }

      texto += "</div>";
      document.getElementById("resultado").innerHTML = texto;
    })
    .catch(function (error) {
      document.getElementById("resultado").innerHTML =
        "<p>Error al obtener los datos de las carreras.</p>";
    });
}
