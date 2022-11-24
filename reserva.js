const formulario = document.querySelector("#formulario");


const fecha = document.querySelector("#fecha");
const nombre = document.querySelector("#userName");



const respuesta = document.getElementById("respuesta");

const mensajeExito = () => {
    respuesta.classList.remove("d-none")
}



formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const contador = Number(document.querySelector("#numero").value)
    const paqueteFull = document.querySelector("#inlineCheckbox1").checked
    const paquetePlus = document.querySelector("#inlineCheckbox2").checked
    const paqueteBase = document.querySelector("#inlineCheckbox3").checked

    respuesta.classList.add("d-none");
    let precio = 0;
    let paqueteGeneral = ""

    if (paqueteFull == true){
        precio = precio + (20000 * contador);
        paqueteGeneral = "Full"
    }

    if (paquetePlus == true){
        precio = precio + (15000 * contador);
        paqueteGeneral = "Plus"
    }

    if (paqueteBase == true){
        precio = precio + (12000 * contador);
        paqueteGeneral = "Base"
    }

    mensajeExito()

    respuesta.textContent = `Gracias por reservar el  paquete ${paqueteGeneral}, el precio final de la estadía es de:  $ ${precio} `
    

    



})



    

