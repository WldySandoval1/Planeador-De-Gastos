function datosResultado() {
    var presupuesto = parseFloat(document.getElementById("presupuesto").value);

    var dia = parseInt(document.getElementById("dias").value);

    var comida = parseFloat(document.getElementById("alimentos").value);
    var totalA = dia * comida;

    var tran = parseFloat(document.getElementById("transporte").value);
    var totalT = dia * tran;

    var SaldoDisponible = (presupuesto) - (totalA + totalT);

    var saldoDiario = SaldoDisponible / dia;
    document.getElementById("elSaldoDiarioResultado").innerHTML = new Intl.NumberFormat('es-MX').format(saldoDiario);
    console.log(saldoDiario);

}
function mostrarIngresoAhorro() {
    document.getElementById("sec_ahorro").style.display = 'flex';
}

function cargarDatosResultado() {
    datosResultado();
    mostrarIngresoAhorro();
}

function operacionesCalculo() {
    document.getElementById("sec_ahorro").style.paddingBottom = "0";
    document.getElementById("sec_ahorro").style.borderRadius = "20px 20px 0 0";
    document.getElementById("sec_ahorro").style.margin = "0 auto";

    var presupuesto = parseFloat(document.getElementById("presupuesto").value);

    var dia = parseInt(document.getElementById("dias").value);

    var comida = parseFloat(document.getElementById("alimentos").value);
    var totalA = dia * comida;


    var tran = parseFloat(document.getElementById("transporte").value);
    var totalT = dia * tran;

    var SaldoDisponible = (presupuesto) - (totalA + totalT);

    var saldoDiario = SaldoDisponible / dia;

    var ahorro = parseFloat(document.getElementById("ahorroDia").value);

    if (!ahorro) {
        swal('Oops!', 'Ingresa un dato', 'error');
        document.getElementById("ahorrFinal").style.display = 'none';
    } else if (saldoDiario < ahorro) {
        swal('Oops!', 'Tus valor a ahorrar supera tu saldo diponible', 'error');
        document.getElementById("ahorrFinal").style.display = 'none';
    } else {
        document.getElementById("ahorrFinal").style.display = 'flex';
    }


    var nuevoValorDiario = saldoDiario - ahorro;
    document.getElementById("elNuevoValor").innerHTML = new Intl.NumberFormat('es-MX').format(nuevoValorDiario);
    console.log(nuevoValorDiario);

    var ahorroXDias = ahorro * dia;
    document.getElementById("ahorroTotal").innerHTML = new Intl.NumberFormat('es-MX').format(ahorroXDias);

    var ahorroMensual = ahorro * 30;
    document.getElementById("ahorroMensual").innerHTML = new Intl.NumberFormat('es-MX').format(ahorroMensual);
}
