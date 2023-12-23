const crearArticuloMatriz = (nombreCategoria, numbVentas, nombre, precioDescuento, precioNeto, descuento, id) => {
  const cajaArticulo = document.createElement('a');
  cajaArticulo.id = id;
  cajaArticulo.classList.add('caja-articulo')
  const contenido = `
    <div class="caja__img-articulo" id="">
      <img class="img-articulo" id="archivoImg" src="src/imagenes/img-articulos/mochila.jpg"
        alt="imagen de producto">
    </div>
  
    <div class="contenido-articulo" id="">
  
      <div class="caja__de-categorias">
  
        <div class="caja__nombre-categoria" id="">
          <p class="nombre__de-categoria">${nombreCategoria}</p>
        </div>
  
        <div class="caja__numero-ventas">
          <p class="numero-ventas">${numbVentas + " ventas"}</p>
        </div>
  
      </div>
  
      <h2 class="nombre__de-articulo" id="">${nombre}</h2>
  
      <div class="valores__de-articulo">
  
        <div class="caja__precio-descuento">
          <p class="precio-descuento">${"¢" + precioDescuento}</p>
        </div>
  
        <div class="caja__precio-neto">
          <p class="precio">${"¢" + precioNeto}</p>
        </div>
  
        <div class="caja__numero-descuento">
          <p class="descuento">-${descuento}%</p>
        </div>
  
      </div>
  
      <div class="caja__de-id">
        <h3 class="id">${"ID:" + id}</h3>
      </div>`
  cajaArticulo.innerHTML = contenido;
  cajaArticulo.addEventListener('click', function () {
    const idDelElemento = this.id;
    console.log("ID del elemento clickeado: " + idDelElemento);
  });

  return cajaArticulo;
}


const cajaMatriz = document.getElementById('caja__articulos-matriz');

{
  //Traer datos del local host

  // const http = new XMLHttpRequest();

  // http.open('GET', 'http://localhost:3000/articulo');

  // http.send();

  // http.onload = () => {
  //   try {
  //     const data = JSON.parse(http.response);
  //     data.forEach( articulo => {
  //       const nuevoArticulo = crearArticuloMatriz(articulo.nombreCategoria, articulo.numbVentas, articulo.nombre, articulo.precioDescuento, articulo.precioNeto, articulo.descuento, articulo.id);
  //       cajaMatriz.appendChild(nuevoArticulo);
  //     })
  //   } catch (error) {
  //     alert('Ocurrio un error al traer los datos');
  //   }
  // };
}




{
  //Traer datos de github

   const http = new XMLHttpRequest();

   http.open('GET', 'https://joserivascabrera.github.io/apitest/db.json');

   http.send();

   http.onload = () => {
     try {
       const responseData = JSON.parse(http.response);
       console.log('JSON Response:', responseData);
       const data = responseData.articulo;
       console.log('JSON Response:', data);
       Array.from(data).forEach(articulo => {
         const nuevoArticulo = crearArticuloMatriz(articulo.nombreCategoria, articulo.numbVentas, articulo.nombre, articulo.precioDescuento, articulo.precioNeto, articulo.descuento, articulo.id);
         cajaMatriz.appendChild(nuevoArticulo);
       });
     } catch (error) {
       console.error('Error al procesar el JSON:', error);
       alert('Ocurrio un error al traer los datos');
     }
   };
}
