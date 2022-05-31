/******************************************
 *  Author : Angel de Jesus Maldonado Juarez   
 *  Created On : Mon May 23 2022
 *  File : script.js
 *******************************************/
cargaScript('/assets/css/molecules/control.js');

function cargaScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    head.appendChild(script);
}