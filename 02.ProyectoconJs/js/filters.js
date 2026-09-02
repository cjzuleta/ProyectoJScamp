// Filtros de búsqueda

//seleccionamos el elemento select con id category y le agregamos un evento change para que cuando cambie el valor del select, se ejecute la función que imprime en consola el valor seleccionado.

const filter = document.querySelector('#category');
const mensaje = document.querySelector('.valor-seleccionado');//agregamos una constante mensaje que selecciona el elemento span con clase valor-seleccionado para mostrar el valor seleccionado en el select.

filter.addEventListener('change', function() {
  //console.log(filter.value);
  const selectedValue = filter.value;//agregamos una constante selectedValue que guarda el valor seleccionado del select.
  if (selectedValue) {//si el valor seleccionado no es vacio, se muestra el valor seleccionado en el span con clase valor-seleccionado.
    mensaje.textContent = `Has seleccionado: ${selectedValue}`;
  }else {
    mensaje.textContent = '';
  }
});


//estos codigos no funcionarian por q solo nos traeria el utlimo valor seleccionado osea no trae varios filtros.
// const filter2 = document.querySelector('#location');
// filter2.addEventListener('change', function() {
//   const selectedValue = filter2.value;
//     if (selectedValue) {
//     mensaje.textContent = `Has seleccionado: ${selectedValue}`;
//     }else {
//     mensaje.textContent = '';
//   }
// });
// const filter3 = document.querySelector('#type');
// const filter4 = document.querySelector('#experience');
