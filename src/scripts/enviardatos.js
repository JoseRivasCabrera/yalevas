const insertar = () => {
  const contenedorArticulos = document.getElementById('contenedor-articulos');

  contenedorArticulos.innerHTML = '';
  
  const boxArticulo = `<a class="caja-articulo" href="#">
<div class="caja_imagen-articulo" id="caja_imagen-articulo">
  <img class="imagen-articulo" id="imagen-articulo" src="src/imagenes/img-articulos/mochila.jpg"  alt="imagen de producto">
</div>

<div class="descripciones">
  <p class="nombre-txt" >Bella mochila infantil</p>
  <p class="no-vendidos">16 Vendidos recientemente</p>
  <p class="precio-txt">¢16.955</p>
</div>

</a>`

  var numeroDeElementos = 20;

  let cantidadElementos = '';

  for (let i = 0; i < numeroDeElementos; i++) {
    cantidadElementos += boxArticulo;
  };

  contenedorArticulos.innerHTML = cantidadElementos;
}

insertar();