document.addEventListener("DOMContentLoaded", function () {
 
  const productoID = localStorage.getItem('productoID');

  if (productoID) {
    console.log("ID del producto en la página 'producto.html': " + productoID);

    cargarDetallesProducto(productoID);
  } else {
    console.log("No se encontró un ID en el localStorage.");
  }
});

function cargarDetallesProducto(id) {
  fetch('https://joserivascabrera.github.io/apitest/db.json')
    .then(response => response.json())
    .then(data => {
      // Buscar el producto con el ID correspondiente
      var productoEncontrado = data.articulo.find(producto => producto.id === id);

      if (productoEncontrado) {
        console.log("Detalles del producto encontrado:", productoEncontrado);

        // Puedes utilizar los detalles del producto como necesites en esta página

        // Ejemplo: Mostrar el nombre del producto en un elemento HTML con id="nombreProducto"
        document.getElementById('caja__producto').innerText = productoEncontrado.nombre;

        // Otros elementos del producto pueden manejarse de manera similar

      } else {
        console.log("No se encontró un producto con el ID proporcionado.");
      }
    }).catch(error => console.error('Error al cargar el JSON:', error));
  }

  // ya estoy obteniendo los datos segun el id que se selecciona en el index