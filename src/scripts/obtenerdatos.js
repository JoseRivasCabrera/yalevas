











// const crearArticulo = () => {
//   event.preventDefault();
//   const formName = document.getElementById('name').value;
//   const imagen = document.getElementById('file-input').value;
//   const categorie = document.getElementById('categorie').value;
//   const key = document.getElementById('key').value;
//   const discountValue = document.getElementById('discount').value;
//   const pricevalue = parseFloat(document.getElementById('the_price').value);
//   const formNumbSales = document.getElementById('sales').value;


//   if ((formName != '') && (categorie != '') && (pricevalue != '') && (formNumbSales != '') && (imagen != '')) {

//     const valordolar = 550;

//     const cajaArticulos = document.getElementById('caja__articulos-matriz');

//     const crearCajaArticulo = document.createElement('a');
//     crearCajaArticulo.classList.add('caja-articulo');
//     cajaArticulos.appendChild(crearCajaArticulo);

//     const cajaImagenArticulo = document.createElement('div')
//     cajaImagenArticulo.classList.add('caja__img-articulo');
//     crearCajaArticulo.appendChild(cajaImagenArticulo);

//     const imagenArticulo = document.getElementById('file-input');
//     const imgArticulo = document.createElement('img');
//     imgArticulo.classList.add('img-articulo');
//     cajaImagenArticulo.appendChild(imgArticulo);
//     const archivo = imagenArticulo.files[0];
//     if (archivo) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         imgArticulo.src = e.target.result;
//       }
//       reader.readAsDataURL(archivo);
//     }

//     const contentArticle = document.createElement('div');
//     crearCajaArticulo.appendChild(contentArticle);
//     contentArticle.classList.add('contenido-articulo');

//     const boxCategories = document.createElement('div');
//     boxCategories.classList.add('caja__de-categorias');
//     contentArticle.appendChild(boxCategories);

//     const categorieName = document.createElement('div');
//     categorieName.classList.add('caja__nombre-categoria');
//     boxCategories.appendChild(categorieName);

//     const categorietext = document.createElement('P');
//     categorietext.classList.add('nombre__de-categoria');
//     categorieName.appendChild(categorietext);
//     categorietext.textContent = categorie;

//     const numbSalesArticle = document.createElement('div');
//     numbSalesArticle.classList.add('caja__numero-ventas');
//     boxCategories.appendChild(numbSalesArticle);
//     const numbSales = document.createElement('P');
//     numbSales.classList.add('numero-ventas');
//     numbSalesArticle.appendChild(numbSales);

//     if (formNumbSales != '') {
//       numbSales.textContent = formNumbSales + ' ventas';
//     }

//     const nameArticle = document.createElement('h2');
//     nameArticle.classList.add('nombre__de-articulo');
//     contentArticle.appendChild(nameArticle);
//     if (formName != '') {
//       nameArticle.textContent = formName;
//     }

//     const valuesArticle = document.createElement('div');
//     valuesArticle.classList.add('valores__de-articulo');
//     contentArticle.appendChild(valuesArticle);

//     const articlepricediscount = document.createElement('div');
//     articlepricediscount.classList.add('caja__precio-descuento');
//     valuesArticle.appendChild(articlepricediscount);

//     const pricediscount = document.createElement('p');
//     pricediscount.classList.add('precio-descuento');
//     articlepricediscount.appendChild(pricediscount);

//     const articlePrice = document.createElement('div');
//     articlePrice.classList.add('caja__precio-neto');
//     valuesArticle.appendChild(articlePrice);

//     const price = document.createElement('p');
//     price.classList.add('precio');
//     articlePrice.appendChild(price);

//     const articleDiscount = document.createElement('div');
//     articleDiscount.classList.add('caja__numero-descuento');
//     valuesArticle.appendChild(articleDiscount);

//     const discount = document.createElement('p');
//     discount.classList.add('descuento');
//     articleDiscount.appendChild(discount);

//     const iconocolon = document.createElement('span');
//     iconocolon.classList.add('icon-colones');
//     articlepricediscount.appendChild(iconocolon);
//     iconocolon.textContent = '¢';

//     const iconocolon2 = document.createElement('span');
//     iconocolon2.classList.add('icon-colones');
//     articlePrice.appendChild(iconocolon2);
//     iconocolon2.textContent = '¢';


//     if (discountValue != '' && discountValue != 0) {

//       const precioneto = (pricevalue * 2) * valordolar;
//       price.textContent = precioneto;

//       const calcdescuento = parseInt((discountValue / 100) * precioneto);

//       const preciodescuento = precioneto - calcdescuento;
//       pricediscount.textContent = preciodescuento;

//       discount.textContent = '-' + discountValue + '%';

//     } else {
//       discount.textContent = '';
//       const precioneto = (pricevalue * 2) * valordolar;
//       price.textContent = precioneto;
//       pricediscount.textContent = precioneto;
//     }

//     const boxid = document.createElement('div');
//     boxid.classList.add('caja__de-id');
//     contentArticle.appendChild(boxid);

//     const textid = document.createElement('h3');
//     textid.classList.add('id');
//     boxid.appendChild(textid);
//     textid.textContent = 'ID: ' + key;

//     document.getElementById('categorie').value = '';
//     document.getElementById('sales').value = '';
//     document.getElementById('name').value = '';
//     document.getElementById('key').value = '';
//     document.getElementById('the_price').value = '';
//     document.getElementById('discount').value = '';
//     document.getElementById('file-input').value = '';

//   } else {
//     alert('espacios vacios')
//   }

// }