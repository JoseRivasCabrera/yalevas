const crearArticuloIndex = (imagen1, nombre, numbVentas, id, precioNeto, precioDescuento) => {
  const articuloIndex = document.createElement('a');
  articuloIndex.href = '#';
  articuloIndex.id = id;
  articuloIndex.classList.add('caja-articulo')
  const contenido = `<div class="caja_imagen-articulo" id="caja_imagen-articulo">
        <img class="imagen-articulo" id="imagen-articulo" src="${imagen1}"  alt="imagen de producto">
       </div>
      
       <div class="descripciones">
         <p class="nombre-txt" >${nombre}</p>
        <p class="no-vendidos">${numbVentas + " ventas"}</p>
         <p class="precio-txt">${"¢" + precioNeto}</p>
       </div>`

  articuloIndex.innerHTML = contenido;
  
  articuloIndex.addEventListener('click', () => {
    const idDelElemento = articuloIndex.id;
    cargarProducto(idDelElemento);
  });

  return articuloIndex;
}

const contenedorArticulos = document.getElementById('contenedor-articulos');

{
  // const http = new XMLHttpRequest();

  // http.open('GET', 'http://localhost:3000/articulo');

  // http.send();

  // http.onload = () => {
  //   try {
  //     const data = JSON.parse(http.response);
  //     data.forEach(articulo => {
  //       const nuevoArticulo = crearArticuloIndex(articulo.nombreCategoria, articulo.numbVentas, articulo.nombre, articulo.precioDescuento, articulo.precioNeto, articulo.descuento, articulo.id);
  //       contenedorArticulos.appendChild(nuevoArticulo);
  //     })
  //   } catch (error) {
  //     alert('Ocurrio un error al traer los datos');
  //   }
  // };
}

const cargarProducto = (id) => {
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      
        let encontrado = false;

        for (var i = 0; i < data.articulo.length; i++) {
            if (data.articulo[i].id === id) {
                encontrado = true;
                break;
            }
        }

        if (encontrado) {
            
            window.location.href = 'producto.html';
            localStorage.setItem('productoID', id);
            
        } else {
            alert("El ID no está presente en el JSON." + id);
         
        }
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
    
};


{
  //  traer los datos de github
   const http = new XMLHttpRequest();

   http.open('GET', 'https://joserivascabrera.github.io/apitest/db.json');

   http.send();

   http.onload = () => {
     try {
       const responseData = JSON.parse(http.response);
       
       const data = responseData.articulo;
       
       Array.from(data).forEach(articulo => {
         const nuevoArticulo = crearArticuloIndex(articulo.imagen1, articulo.nombre, articulo.numbVentas,  articulo.id, articulo.precioNeto, articulo.imagen2, articulo.imagen3, articulo.imagen4, articulo.descripcion,  articulo.precioDescuento);
         contenedorArticulos.appendChild(nuevoArticulo);
       });
     } catch (error) {
       console.error('Error al procesar el JSON:', error);
       alert('Ocurrio un error al traer los datos');
     }
   };

}

{
  // const insertar = () => {
  //     const contenedorArticulos = document.getElementById('contenedor-articulos');

  //     contenedorArticulos.innerHTML = '';

  //     const boxArticulo = `<a class="caja-articulo" href="#">
  //   <div class="caja_imagen-articulo" id="caja_imagen-articulo">
  //     <img class="imagen-articulo" id="imagen-articulo" src="src/imagenes/img-articulos/mochila.jpg"  alt="imagen de producto">
  //   </div>

  //   <div class="descripciones">
  //     <p class="nombre-txt" >Bella mochila infantil</p>
  //     <p class="no-vendidos">16 Vendidos recientemente</p>
  //     <p class="precio-txt">¢16.955</p>
  //   </div>

  //   </a>`

  //     var numeroDeElementos = 10;

  //     let cantidadElementos = '';

  //     for (let i = 0; i < numeroDeElementos; i++) {
  //       cantidadElementos += boxArticulo;
  //     };

  //     contenedorArticulos.innerHTML = cantidadElementos;
  //   }

  //   insertar();
}
