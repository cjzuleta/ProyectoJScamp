//WEBCOMPONENT son nativos no necesita framework Codigo para poder colocar avatar cuando se inicia sesion.
class DevjobsLogin extends HTMLElement {//1.se crea clase que hereda de HTMLElement para poder crear un componente web personalizado.
  constructor() {//2.constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase. y luego se llama al constructor de la clase padre con super() para que se ejecute el constructor de HTMLElement y se pueda crear un componente web personalizado.
    super(); // 3.llamar al constructor de HTMLElement
    this.attachShadow({ mode: "open" });//8.se crea un shadow DOM para encapsular el estilo y la estructura del componente web personalizado. osea que el estilo y la estructura del componente web personalizado no afectaran al resto de la pagina. y se puede acceder al shadow DOM desde el exterior del componente web personalizado.
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;//11.se crea la url del avatar con el metodo createUrl() y se retorna la url del avatar. se utiliza template literals para poder insertar variables en la url.
}

//6.se escribe cositas de logica para poder renderizar el avatar en el componente web personalizado. se crea metodo render() que se encarga de renderizar el avatar en el componente web personalizado. se obtiene el atributo service, username y size del componente web personalizado. si no se especifica un valor para estos atributos, se asignan valores por defecto. luego se crea la url del avatar con el metodo createUrl() y se renderiza el avatar en el shadow DOM del componente web personalizado.
render() {
    //10.se obtiene el atributo service, username y size del componente web personalizado creado en empleo.html, si no se especifica un valor para estos atributos, se asignan valores por defecto.este caso git y cjzuleta y 40 respectivamente. se utiliza el operador de coalescencia nula (??) para asignar valores por defecto en caso de que los atributos no estén presentes.
    const service = this.getAttribute("service") ?? 'github';
    const username = this.getAttribute("username") ?? 'cjzuleta';
    const size = this.getAttribute("size") ?? '40';

    //12.se crea la url del avatar con el metodo createUrl() y se renderiza el avatar en el shadow DOM del componente web personalizado.
    const url = this.createUrl(service, username);


    //9.se llama a this.shadowRoot.innerHTML para renderizar el avatar en el shadow DOM del componente web personalizado. se utiliza template literals para poder insertar variables en el HTML. se crea un estilo para el avatar y se renderiza el avatar en el shadow DOM del componente web personalizado.
    this.shadowRoot.innerHTML = `
        <style>
            img {
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
            }
        </style>
        <img src="${url}" alt="Avatar" class="avatar"/>
    `;  //13.se renderiza el avatar en el shadow DOM del componente web personalizado. se utiliza template literals para poder insertar variables en el HTML. se crea un estilo para el avatar y se renderiza el avatar en el shadow DOM del componente web personalizado.
}
 connectedCallback() {//7.connectedCallback() es un metodo que se ejecuta cuando el componente web personalizado es agregado al DOM. y este pueda servisualizado, se llama al metodo render() para renderizar el avatar en el componente web personalizado.
    this.render();
  }

}

//4.antes de poder usar el componente web personalizado y la logica anterior, se debe registrar con customElements.define() y darle un nombre único. En este caso, se registra como "devjobs-login". este se crea manualmente en el html con 
// 5.<devjobs-login></devjobs-login> y se puede usar en cualquier parte del proyecto.
customElements.define("devjobs-login", DevjobsLogin);