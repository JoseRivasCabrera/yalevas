const crearArticuloMatriz = (nombreCategoria, numbVentas, nombre, precioDescuento, precioNeto, descuento, id) => {
    const cajaArticulo = document.createElement('a');
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
        <h3 class="id">${"ID:" + id }</h3>
      </div>`
  
      cajaArticulo.innerHTML = contenido;
       return cajaArticulo;
  }
  
  const cajaMatriz = document.getElementById('caja__articulos-matriz');
  
  const http = new XMLHttpRequest();

  http.open('GET', 'https://joserivascabrera.github.io/apitest/db.json');
  
  http.send();
  
  http.onload = () => {
    try {
      const responseData = JSON.parse(http.response);
      const data = responseData.articulo;
  
      Array.from(data).forEach( articulo => {
        const nuevoArticulo = crearArticuloMatriz(articulo.nombreCategoria, articulo.numbVentas, articulo.nombre, articulo.precioDescuento, articulo.precioNeto, articulo.descuento, articulo.id);
        cajaMatriz.appendChild(nuevoArticulo);
        
      });
    } catch (error) {
    alert('Ocurrio un error al llamar el Json');
  }
};


// const crearArticulo = () => {
//     event.preventDefault();
    
//     const cajaArticulosMatriz = document.getElementById('caja__articulos-matriz');
  
  
//     cajaArticulosMatriz.innerHTML = '';
  
//     const Articulo = ` <a class="caja-articulo">
  
//     <div class="caja__img-articulo" id="">
//       <img class="img-articulo" id="archivoImg" src="src/imagenes/img-articulos/mochila.jpg"
//         alt="imagen de producto">
//     </div>
  
//     <div class="contenido-articulo" id="">
  
//       <div class="caja__de-categorias">
  
//         <div class="caja__nombre-categoria" id="">
//           <p class="nombre__de-categoria">Mochila infantil</p>
//         </div>
  
//         <div class="caja__numero-ventas">
//           <p class="numero-ventas">9 ventas</p>
//         </div>
  
//       </div>
  
//       <h2 class="nombre__de-articulo" id="">Bella mochila de sirena</h2>
  
//       <div class="valores__de-articulo">
  
//         <div class="caja__precio-descuento">
//           <p class="precio-descuento">¢15.450</p>
//         </div>
  
//         <div class="caja__precio-neto">
//           <p class="precio">¢19.450</p>
//         </div>
  
//         <div class="caja__numero-descuento">
//           <p class="descuento">-15%</p>
//         </div>
  
//       </div>
  
//       <div class="caja__de-id">
//         <h3 class="id">Id: BYOS0010</h3>
//       </div>
  
  
//     </div>
  
//   </a>`
  
//     var numeroDeElementos = 22;
  
//     let cantidadElementos = '';
  
//     for (let i = 0; i < numeroDeElementos; i++) {
//       cantidadElementos += Articulo;
//     };
  
//     cajaArticulosMatriz.innerHTML = cantidadElementos;
//   };