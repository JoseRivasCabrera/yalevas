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
      // Buscar el producto con el ID correspondiente
      let productoEncontrado = data.articulo.find(producto => producto.id === id);

      if (productoEncontrado) {
      
        const boxProducto = document.getElementById('caja__producto');
        const contenidoarticulo = `<div class="encabezado__de--articulo">

        <a href="index.html" class='bx bx-chevron-left flecha__retornar'></a>


        <div class="elemenos__de--encabezado">

          <div class="caja__nombre--producto">
            <h3 class="nombre__del--producto">"${productoEncontrado.nombre}"</h3>
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

        <div class="imagenes--primarias">
          <img class="imagen--primaria"
            src="${productoEncontrado.imagen1}"
            alt="">
        </div>

        <div class="imagenes--secundarias">
          <img class="imagen--secundaria"
            src="${productoEncontrado.imagen2}"
            alt="">
          <img class="imagen--secundaria"
            src="${productoEncontrado.imagen3}"
            alt="">
          <img class="imagen--secundaria"
            src="${productoEncontrado.imagen4}"
            alt="">
        </div>

      </div>

      <div class="precios">
        <h3 class="precio__con-descuento">¢16.500</h3>
        <h3 class="precio__sin--descuento">${productoEncontrado.precioNeto}"</h3>
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

  // ya estoy obteniendo los datos segun el id que se selecciona en el index
