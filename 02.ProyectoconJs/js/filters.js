// Filtros de búsqueda OPCION MIA

//seleccionamos el elemento select con id category y le agregamos un evento change para que cuando cambie el valor del select, se ejecute la función que imprime en consola el valor seleccionado.

// const filter = document.querySelector("#category");
// const mensaje = document.querySelector(".valor-seleccionado"); //agregamos una constante mensaje que selecciona el elemento span con clase valor-seleccionado para mostrar el valor seleccionado en el select.

// filter.addEventListener("change", function () {
//   //console.log(filter.value);
//   const jobs = document.querySelectorAll(".job-card"); //agregamos una constante jobs que selecciona todos los elementos con clase job-card para poder mostrar u ocultar los elementos que contengan el valor seleccionado en el select.
//   const selectedValue = filter.value.toLowerCase(); //agregamos una constante selectedValue que guarda el valor seleccionado del select.
//   if (selectedValue) {
//     //si el valor seleccionado no es vacio, se muestra el valor seleccionado en el span con clase valor-seleccionado.
//     mensaje.textContent = `Has seleccionado: ${selectedValue}`;
//   } else {
//     mensaje.textContent = "";
//   }

//     const jobCards = document.querySelectorAll(".job-card");
//   jobCards.forEach((card) => {
//     const cardText = card.textContent.toLowerCase();
//     if (cardText.includes(filter.value)) {
//       card.style.display = "flex";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });

//************************************************* */

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

//Buscador por palabras clave
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function () {
  //console.log(searchInput.value);
  //mostrar elemento por busqueda opcion 1
  //ahora seleccionamos todos los elementos con clase job-card y los recorremos con forEach para mostrar u ocultar los elementos que contengan el valor seleccionado en el select.
  const searchValue = searchInput.value.toLowerCase();
  const jobCards = document.querySelectorAll(".job-card");
  jobCards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    if (cardText.includes(searchValue)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});


//otra opcion explicada es con el atributo data, q nos permite con modalidad traer la info de la card q necesitamos

const filter = document.querySelector('#filter-location');
const mensaje = document.querySelector('.valor-seleccionado');


filter.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-card');
    const selectedValue = filter.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = '';
    }

    jobs.forEach(job => {
        //opcion 1 para filtrar las card con dataset
        //console.log(job.dataset.modalidad);
        // const modalidad = job.dataset.modalidad;
        // if (selectedValue === '' || selectedValue === modalidad) {
        //     job.style.display = 'flex'; 
        // } else {
        //     job.style.display = 'none';
        // }

        //Opcion2 mas corto y con clases, se agrega en style en la clase de job-card la clase is-hidden, q se activa al seleccionar el atributo de modalidad, lo compara y activa con toogle 
        const modalidad = job.getAttribute('data-modalidad')
        const isShown = selectedValue === '' || selectedValue === modalidad
        job.classList.toggle('is-hidden', isShown === false)
    })
});

// extraer la info en las cards con el archivo JSON
//elemento donde se van a cargar las cards
const container = document.querySelector('.job-listings');

//console.log('antes del fetch')
fetch("./data.json")//consulto la pagina
    .then((response) => {
        return response.json();//me trae los datos de ella en formato json
    })
    .then((jobs) => (
        //console.log('Tengo los resultados')
        //console.log(jobs)
        //LOGICA PARA RECORRER EL JSON Y CREARLO COMO HTML eneste caso para crear las cards
        jobs.forEach(job =>{
            const article = document.createElement('article');//se crea elemento

            //luegos sus atributos
            article.className = 'job-card';

            article.dataset.modalidad = job.data.modalidad;
            article.dataset.nivel = job.data.nivel;
            article.dataset.technology = job.data.technology;

            //Luego su contenido
            article.innerHTML = `<div>
            <h3>${job.titulo}</h3>
            <p>${job.empresa} | ${job.ubicacion}</p>
            <p>${job.descripcion}</p>
            
          </div>
          <button class="button-apply-job" id="btn">Aplicar</button>`

          container.appendChild(article);
        })
    ))
//console.log('despues del fetch')



