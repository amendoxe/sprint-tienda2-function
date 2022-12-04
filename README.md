# sprint-tienda2-function

- [sprint-tienda2-function](#sprint-tienda2-function)
  - [Introducción](#introducción)
  - [Temas que se se aplicaron](#temas-que-se-se-aplicaron)
  - [Por mejorar](#por-mejorar)


Sprint 3 de los desafios de Alura Challenge One Front-end

## Introducción
Es una página de e-comerce la cual simula la comunicación con un API para obtener la lista de productos que se tienen en la tienda.

imagen de la tienda

en la parte de los productos tenemos el link para ver todos, en esa página se cargan todos los productos que se encuentran en nuestro API (db.json)

Si deseamos entrar a modificar nuestra lista de productos debemos regresar a nuestra página de inicio y dar click en el botón login. Para entrar usa los datos:

mail: _something@hotmail.com_

password: _anotherO2_

Esto nos lleva a una página que muestra todos nuestros productos y además nos permite agregar productos, editarlos ó eliminarlos.

## Temas que se se aplicaron
El proyecto fue realizado con vanilla HTML, CSS y JavaScript
El sitio es responsivo, utilizando flexbox y los tipos de media

Para simular el servidor:
- revisamos version con: node -v
- utilizaremos json-server npm, se intstala con el comando: `npm install -g json-server`
- verificamos la instalación de json-server con: `json-server`
- para utilizar json-server  `--watch db.json`         (donde db.json es el archivo donde simularemos el API)

- nos regresa una URL que es la dirección con la que tendremos acceso a la información de db.json  ([http://localhost:3000/producto](http://localhost:3000/producto))

Gracias a la simulación del server podemos poner en práctica el CRUD
Obtenemos nuestra base de datos con fetch y utilizamos el código en nuestro client-controller.js para desplegarlo
para agregar utilizamos agrega-controller.js
y para actualizar utilizamos actualizar-controller.js
## Por mejorar
A la hora de crear un producto subir la imagen sería algo bueno
La función de la barra de búsqueda no era muy buena y decidí removerla por el momento
falta añadir una página utilizando el link de ver producto para mostrar la información de dicho producto
