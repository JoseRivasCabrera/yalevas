document.addEventListener("DOMContentLoaded", function () {

  const productoID = localStorage.getItem('productoID');

  if (productoID) {
    cargarDetallesProducto(productoID);
    
  } else {
    alert("No se encontró un Producto.");
  }
});

function cargarDetallesProducto(id) {
  fetch('https://joserivascabrera.github.io/apitest/db.json')
    .then(response => response.json())
    .then(data => {

      let productoEncontrado = data.articulo.find(producto => producto.id === id);

      if (productoEncontrado) {

        const boxProducto = document.getElementById('caja__producto');

        const contenidoarticulo = `<div class="encabezado__de--articulo">

        <a href="index.html" class='bx bx-chevron-left flecha__retornar'></a>


        <div class="elemenos__de--encabezado">

          <div class="caja__nombre--producto">
            <h3 class="nombre__del--producto">${productoEncontrado.nombre}</h3>
          </div>

          <div class="estrellas__de--calificacion">
            <i class='bx bxs-star' style='color:#feca05'></i>
            <i class='bx bxs-star' style='color:#feca05'></i>
            <i class='bx bxs-star' style='color:#feca05'></i>
            <i class='bx bxs-star' style='color:#feca05'></i>
            <i class='bx bx-star' style='color:#feca05'></i>
          </div>

          
        </div>

      </div>

      <div class="contenedor__de--imagenes">

        <a class="imagenes--primarias" id="IMG1"">
          <img class="imagen--primaria" 
            src="${productoEncontrado.imagen1}"
            alt="">
        </a>

        <div class="imagenes--secundarias">
        <a onclick="cambiarImagenes()">
          <img class="imagen--secundaria" id="IMG2"
            src="${productoEncontrado.imagen2}"
            alt="">
        </a>
        <a onclick="cambiarImagenes()">
          <img class="imagen--secundaria" id="IMG3"
            src="${productoEncontrado.imagen3}"
            alt="">
        </a>
        <a onclick="cambiarImagenes()">
          <img class="imagen--secundaria" id="IMG4"
            src="${productoEncontrado.imagen4}"
            alt="">
        </a>
          
        </div>

      </div>

      <div class="precios">
        <h3 class="precio__con-descuento">${'¢' + productoEncontrado.precioNeto}</h3>
        <h3 class="precio__sin--descuento">${'¢' + productoEncontrado.precioDescuento}</h3>
        <div class="contenedor__de--id">
        <p class="Id-producto"><span class="no-copiar">ID:</span>${productoEncontrado.id}</p>
        </div>
        
      </div>

      <div class="descripciones">
      <p class="descripcion">${productoEncontrado.descripcion}</p>
      </div>`

        boxProducto.innerHTML = contenidoarticulo;


      } else {
        alert("No se encontró un producto con el ID proporcionado.");
      }
    }).catch(error => console.error('Error al cargar el JSON:', error));
}

const cambiarImagenes = () => {

  const ImagenSeleccionada = event.target;
  const productoID = localStorage.getItem('productoID');

  const srcImagen = ImagenSeleccionada.src;

  const espacioImagen1 = document.getElementById("IMG1");

  const cambioImg = `<a class="imagenes--primarias" id="IMG1" >
  <img class="imagen--primaria"
    src="${srcImagen}"
    alt="">
   
  </a>`;

  espacioImagen1.innerHTML = cambioImg;

};
