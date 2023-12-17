const crearArticuloIndex = (nombreCategoria, numbVentas, nombre, precioDescuento, precioNeto, descuento, id) => {
    const articuloIndex = document.createElement('a');
    articuloIndex.href= '#';
    articuloIndex.classList.add('caja-articulo')
    const contenido = `<div class="caja_imagen-articulo" id="caja_imagen-articulo">
        <img class="imagen-articulo" id="imagen-articulo" src="src/imagenes/img-articulos/mochila.jpg"  alt="imagen de producto">
       </div>
      
       <div class="descripciones">
         <p class="nombre-txt" >Bella mochila infantil</p>
        <p class="no-vendidos">16 Vendidos recientemente</p>
         <p class="precio-txt">¢16.955</p>
       </div>`
  
    articuloIndex.innerHTML = contenido;
       return articuloIndex;
  }
  
  const cajaMatriz = document.getElementById('contenedor-articulos');
  
  const http = new XMLHttpRequest();
  
  http.open('GET', 'http://localhost:3000/articulo');
  
  http.send();
  
  http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach( articulo => {
      const nuevoArticulo = crearArticuloIndex(articulo.nombreCategoria, articulo.numbVentas, articulo.nombre, articulo.precioDescuento, articulo.precioNeto, articulo.descuento, articulo.id);
      cajaMatriz.appendChild(nuevoArticulo);
    });
  };








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