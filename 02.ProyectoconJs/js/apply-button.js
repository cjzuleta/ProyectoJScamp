// Aplicar efecto al botón de aplicación


//opcion 1
// const boton = document.querySelectorAll('.btn');//1.se declara una constante boton que selecciona todos los elementos con la clase btn. se utiliza querySelectorAll() para seleccionar todos los elementos con la clase btn y se guarda en la constante boton. 
// boton.forEach(btn => {//2.se utiliza forEach() para iterar sobre cada elemento del array boton y se pasa una función de flecha que recibe un parámetro btn que representa cada elemento del array boton. 
//     btn.addEventListener("click", function() {//3.se agrega un evento click a cada elemento del array boton y se pasa una función anónima que se ejecuta cuando se hace click en el botón.
//         btn.textContent = "Aplicado";
//         btn.style.backgroundColor = "#4CAF50";
//         btn.style.color = "white";
//         btn.disabled = true;
//     });
// });

//opcion 2
// se cambia clase btn por id en empleo.html y se agrega clase a los botones button-apply-job hacemos ejemplo con un solo btn.
// const boton = document.querySelector('.button-apply-job');
// boton.addEventListener("click", function() {
//     boton.textContent = "Aplicado";
//     boton.classList.add("is-applied");
//     boton.disabled = true;
// });


//opcion 3
//si tenemos mil de botones y queremos que todos tengan el mismo efecto, podemos hacer lo siguiente: q en el contenedor padre .job-listings al hacer click en cualuier parte solo escuche cuando se haga click en el boton.
const jobListingsSection = document.querySelector('.job-listings');
jobListingsSection.addEventListener('click', function(event) {//1.se declara una constante jobListingsSection que selecciona el elemento con la clase job-listings. se utiliza querySelector() para seleccionar el primer elemento con la clase job-listings y se guarda en la constante jobListingsSection. luego se agrega un evento click al elemento jobListingsSection y se pasa una función anónima que recibe un parámetro event que representa el evento click.
    //console.log('click');
    const element = event.target;//2.se declara una constante element que selecciona el elemento que se hizo click. se utiliza event.target para seleccionar el elemento que se hizo click y se guarda en la constante element.en este caso el boton con la clase button-apply-job.
    if (element.classList.contains('button-apply-job')) {//3.se utiliza classList.contains() para verificar si el elemento que se hizo click tiene la clase button-apply-job. si es asi, se ejecuta el siguiente codigo.
        element.textContent = "Aplicado";
        element.classList.add("is-applied");
        element.disabled = true;
    }
});