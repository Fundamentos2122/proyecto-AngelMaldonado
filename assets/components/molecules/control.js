/******************************************
 *  Author : @AngelMaldonado   
 *  Created On : Mon May 30 2022
 *  File : control.js
 *******************************************/

const control_numerico = document.getElementById('control-numerico');

window.addEventListener('load', () => {
    if (control_numerico)
        m_control__numerico__actualiza_botones();
});

function m_control__numerico__actualiza(boton) {
    let operacion = boton.classList;
    let min = control_numerico.getAttribute('min');
    let max = control_numerico.getAttribute('max');
    let step = control_numerico.getAttribute('step');
    let valor = control_numerico.value;

    let calc_step = operacion.contains('-mas') ? (step * 1) : (step * -1);
    let nuevo_valor = parseInt(valor) + calc_step;

    if (nuevo_valor >= min && nuevo_valor <= max) {
        control_numerico.value = nuevo_valor;
        m_control__numerico__actualiza_botones();
    }

}

function m_control__numerico__actualiza_botones() {
    let boton_mas = document.querySelector('.a-icono__contenedor.-mas').children[0];
    let boton_menos = document.querySelector('.a-icono__contenedor.-menos').children[0];
    let valor = control_numerico.value;

    if (valor == control_numerico.getAttribute('min')) {
        boton_menos.classList.remove('-activo');
        boton_menos.classList.add('-deshabilitado');
    } else {
        boton_menos.classList.remove('-deshabilitado');
        boton_menos.classList.add('-activo');
    }
    if (valor == control_numerico.getAttribute('max')) {
        boton_mas.classList.remove('-activo');
        boton_mas.classList.add('-deshabilitado');
    } else {
        boton_mas.classList.remove('-deshabilitado');
        boton_mas.classList.add('-activo');
    }
}