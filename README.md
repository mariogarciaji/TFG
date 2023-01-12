# A-Pedales
Proyecto Universitario para la creación de una página web en donde muestra las ubicaciones de las estaciones de carga de las bicicletas en la zona centro de Madrid

Los pasos a seguir para implementar este repositorio son los siguientes

1- Debemos de tener instalado Node-JS y MongoDB.

2- Creamos un nuevo proyecto que llamaremos 'apedales' En consola, en nuestro directorio escribiremos: express --view=ejs apedales

3- Ponemos este repositorio en la carpeta creada llamada apedales

4- Escribiremos los siguientes comandos: cd apedales && npm install

- npm install instalará todas las siguientes dependencias del archivo 'package-lock.json'

"dependencies": {
        "axios": "^1.2.2",
        "bcryptjs": "^2.4.3",
        "connect-flash": "^0.1.1",
        "connect-mongo": "^3.2.0",
        "cookie-parser": "~1.4.4",
        "debug": "~2.6.9",
        "ejs": "~2.6.1",
        "express": "~4.16.1",
        "express-session": "^1.17.3",
        "http-errors": "~1.6.3",
        "leaflet": "^1.9.3",
        "mapbox-gl": "^2.12.0",
        "mongoose": "^6.7.2",
        "morgan": "~1.9.1",
        "nodemon": "^2.0.20",
        "object-to-xml": "^2.0.0",
        "passport": "^0.6.0",
        "passport-local": "^1.0.0",
        "request": "^2.88.2"
      }
      
5.-Ahora al dirigirnos en el navegador web al localhost:3000 nos tendria que salir la página web.
