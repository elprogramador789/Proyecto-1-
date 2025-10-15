const pantalla = document.getElementById('pantalla');

function agregar(valor) {
  pantalla.value += valor;
}

function limpiar() {
  pantalla.value = '';
}

function borrarUltimo() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    // Reemplaza 'x' por '*', por si acaso
    const expresion = pantalla.value.replace(/x/g, '*');
    const resultado = eval(expresion);

    if (isNaN(resultado)) {
      pantalla.value = 'Error';
    } else {
      // Mostrar enteros o decimales según corresponda
      pantalla.value = resultado % 1 === 0 ? resultado : resultado.toFixed(2);
    }
  } catch {
    pantalla.value = 'Error';
  }
}
