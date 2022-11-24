const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userApellido = document.getElementById("userApellido");
const userTelefono = document.getElementById("userTelefono");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertApellido = document.getElementById("alertApellido");
const alertTelefono = document.getElementById("alertTelefono");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserTelefono = /^[0,9]{10}*/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
        
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    // validar nombre
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classlist.add("is-invalid")

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // validar apellido
    if (!regUserApellido.test(userApellido.value) || !userApellido.value.trim()) {
        userApellido.classlist.add("is-invalid")

        errores.push({
            tipo: alertApellido,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userApellido.classList.remove("is-invalid");
        userApellido.classList.add("is-valid");
        alertApellido.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

     // validar telefono
     if (!regUserTelefono.test(userTelefono.value) || !userTelefono.value.trim()) {
        userTelefono.classList.add("is-invalid");

        errores.push({
            tipo: alertTelefono,
            msg: "Escriba un número de telefono valido",
        });
    } else {
        userTelefono.classList.remove("is-invalid");
        userTelefono.classList.add("is-valid");
        alertTelefono.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});




///precios y mensaje

const contador = document.getElementById("numero")
const paquete1 = document.getElementById("inlineRadio1")
const paquete2 = document.getElementById("inlineRadio2")
const paquete3 = document.getElementById("inlineRadio3")

const formularioReserva = document.getElementById("formReserva")

const mensajeExito = () =>{
    respuesta.classList.remove('d-none')
}

/* crear el evento */
formularioReserva.addEventListener("submit", (e)=> {
    e.preventDefault();
    respuesta.classList.add('d-none');
    let precio = 0;
    let paqueteGeneral = " ";
    fecha = fecha.value;
    contador = contador;


    if (paquete1.checked == true){ 
        precio = precio + (29000 * contador)
        paqueteGeneral = "Full";
     } 
    
    if (paquete2.checked == true){
        precio =precio +(19000*contador)
        paqueteGeneral = "Plus";
         }
    if (paquete3.checked == true){
        precio = precio +(15000*contador)
        paqueteGeneral = "Básico";
         }

    mensajeExito();
    
    respuesta.textContent = `Gracias! Reservaste el dia ${fecha},  ${contador} paquetes ${paqueteGeneral}, 
    Precio final: $ ${precio}.
    Nos vemos, para vivir una experiencia inolvidable`
})