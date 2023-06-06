const reload = document.getElementById('volver_empezar');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});