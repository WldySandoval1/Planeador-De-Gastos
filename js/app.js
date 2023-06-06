import { validar } from "./validacion.js";

const todasLasEntradas = document.querySelectorAll("input");

todasLasEntradas.forEach((entradita) => {
    entradita.addEventListener('blur',(entradita) => {
        validar(entradita.target);
    });
});

