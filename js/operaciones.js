function datos() {
    var presupuesto = parseFloat(document.getElementById("presupuesto").value);
    document.getElementById("elPresupuesto").innerHTML = new Intl.NumberFormat('es-MX').format(presupuesto);
    //console.log(presupuesto);

    var dia = parseInt(document.getElementById("dias").value);
    // console.log(dia)
    document.getElementById("losDias").innerHTML = dia;

    if (dia == 1) {
        document.getElementById("diaTex").innerHTML = "Dia";
    }

    var comida = parseFloat(document.getElementById("alimentos").value);
    var totalA = dia * comida;
    //console.log(totalA);
    document.getElementById("comidita").innerHTML = new Intl.NumberFormat('es-MX').format(totalA);

    var tran = parseFloat(document.getElementById("transporte").value);
    var totalT = dia * tran;
    //console.log(totalT);
    document.getElementById("transporting").innerHTML = new Intl.NumberFormat('es-MX').format(totalT);

    var SaldoDisponible = (presupuesto) - (totalA + totalT);
    document.getElementById("salDisponible").innerHTML = new Intl.NumberFormat('es-MX').format(SaldoDisponible);
    document.getElementById("elSaldo").innerHTML = new Intl.NumberFormat('es-MX').format(SaldoDisponible);

    var saldoDiario = SaldoDisponible / dia;
    document.getElementById("elSaldoDiarion").innerHTML = new Intl.NumberFormat('es-MX').format(saldoDiario);

}
function mostrarResultado() {
    document.getElementById("resulta").style.display = 'block';
}
function cargarDatos() {
    datos();
    mostrarResultado();
    printCharts();
}


Chart.defaults.color = '#fff'
const renderModelsChart = (dia, comida) => {
    var presupuesto = parseFloat(document.getElementById("presupuesto").value);
    //console.log(presupuesto)

    var dia = parseInt(document.getElementById("dias").value);

    var comida = parseFloat(document.getElementById("alimentos").value);
    var totalA = dia * comida;
    //console.log(totalA);

    var tran = parseFloat(document.getElementById("transporte").value);
    var totalT = dia * tran;

    var SaldoDisponible = (presupuesto) - (totalA + totalT);

    if (!dia || !presupuesto || !comida || !tran) {
        swal('Oops!', 'Ingresa todos los datos del formulario', 'error');
        document.getElementById("resulta").style.display = 'none';

    } else if (SaldoDisponible <= 0) {
        swal('Oops!', 'Tus gastos superan tu presupuesto', 'error');
        document.getElementById("resulta").style.display = 'none';

    } else {
        const data = {
            labels: ['Alimentacion', 'Transporte', 'Disponible'],
            datasets: [{
                data: [totalA, totalT, SaldoDisponible],
                borderColor: ["#EBA207", "#00B9FF", "#08CC00"],
                backgroundColor: ["#EBA207", "#00B9FF", "#08CC00"]
            }]
        }
        const options = {
            plugins: {
                legend: { position: "none" }
            }
        }
        //console.log("hola", data);
        new Chart('modelsChart', { type: 'doughnut', data, options });

    }

}

const printCharts = () => {
    renderModelsChart()
}
