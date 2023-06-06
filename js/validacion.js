export function validar(inpputtt) {
    const tipoDeInput = inpputtt.dataset.tipo; 
    //console.log(inpputtt.parentElement); 
    if (inpputtt.validity.valid) {
        inpputtt.parentElement.classList.remove("input-container--invalid");
        inpputtt.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        inpputtt.parentElement.classList.add("input-container--invalid");
        inpputtt.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, inpputtt);
    }

};

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];
const mensajesDeError = {
    numero: {
        valueMissing: "Ingresa sólo números"
    }
};

function mostrarMensajeDeError(tipoDeInputsito, entradota) {
    let mensaje = "";
    tipoDeError.forEach((error) => {
        if (entradota.validity[error]) {
            //console.log(tipoDeInputsito, error);
            //console.log(entradota.validity[error]);
            //console.log(mensajesDeError[tipoDeInputsito][error]);
            mensaje = mensajesDeError[tipoDeInputsito][error];
        }
    });
    return mensaje;
};