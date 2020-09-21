/*
 * Alumno/a: 
 * Fecha:
 
 
 RETO 4: INTERACCIÓN
 ^^^^^^^^^^^^^^^^^^^
 
 4.14 MOBILE MOVE
 ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
 Cuando interactuamos con el móvil añadiremos esta línea al HTML (las características para escalar el contenido son personalizables):

 <head>
	<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
 </head>

 En nuestro caso también vamos a añadir un CSS para que el contenido no tenga márgenes, con el siguiente código:

 html, body {
    overflow: hidden;
    margin: 0;
    padding: 0;
 }

 Modifica el siguiente código para dibujar un quad de forma y color aleatorio cada vez que muevas el móvil.

 COMENTARIO: Para poder testear que funciona correctamente, tendrás que subir el archivo a internet (mediante FTP) 
 y una vez subido abrir el index.html en el navegador con la dirección web correspondiente.


 */

/*
var v1x = 38;
var v1y = 30;
var v2x = 80;
var v2y = 20;
var v3x = 70;
var v3y = 60;
var v4x = 30;
var v4y = 70;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  quad(v1x, v1y, v2x, v2y, v3x, v3y, v4x, v4y);
}

// The device moved!
function deviceMoved() {

}
*/





//SOLUCIÓN



var v1x = 38;
var v1y = 30;
var v2x = 80;
var v2y = 20;
var v3x = 70;
var v3y = 60;
var v4x = 30;
var v4y = 70;
var r = 70;
var g = 70;
var b = 70;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noStroke();
  fill(r,g,b)
  quad(v1x, v1y, v2x, v2y, v3x, v3y, v4x, v4y);
}

// The device moved!
function deviceShaken() {
  v1x = random(windowWidth);
  v1y = random(windowHeight);
  v2x = random(windowWidth);
  v2y = random(windowHeight);
  v3x = random(windowWidth);
  v3y = random(windowHeight);
  v4x = random(windowWidth);
  v4y = random(windowHeight);

  r = random(255);
  g = random(255);
  b = random(255);
}




