# Proyecto de el Equipo 3 para la materia TC2007B

### Equipo: 
- Luis Rodolfo Bojorquez Pineda A01250513
- Silvana Dorita Ruiz Olivarría A01252346
- Jorge Esteban Cardenas Esquer A00232305
- Jorge Leopoldo Jiménez Velásquez A01253696 

### Socio Formador: Sinecta

### Nuestro modulo se encarga de lo siguiente:
- Recibir datos de la pagina de Sinecta para mostrarlos en el mapa como recorridos.
- Mostrar marcadores con puntos importantes del recorrido con notas e imagenes.
- Validar los recorridos con un boton que permitira validar o rechazar al igual que escribir notas.


## Prerequisitos
- NodeJs >= 19.20.0
- npm >= 8.15.0

## Como instalar las dependencias del proyecto
Dentro del folder del proyecto introducir el siguiente comando en la terminal:
```sh
npm install
```

## Como correr el proyecto
Se instala primero la terminal de angular
```sh
npm install -g @angular/cli
```

Dentro del folder del proyecto introducir los siguientes comandos en la terminal:
```sh
ng build
ng serve
```

## Tecnologías y librerías usadas
### Leaflet
Usamos leaflet ya que es una libreria gratis y open source para poder visualizar los mapas que son gran parte de nuestro modulo. Además es una de las herramientas mas usadas para esta situación

### Axios
Se utilizó esta librería para las llamadas a las APIs porque es el estandar usado en una gran cantidad de páginas web para el mismo propósito y por lo tanto es muy confiable

### Angular
Elegimos este framework para desarrollar el proyecto ya que a nuestro entendimiento es el mismo que usa nuestro socioformador y porque queríamos hacer lo más facil posible el poder integrar neustra parte con la aplicación de sinecta

### GeoJson
Usamos este ya que es un estandar muy usado con la esperanza que al usarlo no tenga muchas diferencias en como se guardan los datos entre nuestro proyecto y el de sinecta

## Plan a futuro
Nosotros esperamos que este proyecto le pueda ser útil al socioformador y que pueda implementarlo dentro de su servicio web, además que puedan mejorar nuestro proyecto para que llegue a tener todas las funcionalidades que queríamos que tenga al inicio del desarrollo
Nosotros esperamos que este proyecto le pueda ser útil al socioformador y que pueda implementarlo dentro de su servicio web, además que puedan mejorar nuestro proyecto para que llegue a tener todas las funcionalidades que queríamos que tenga al inicio del desarrollo. Particularmente, una funcionalidad que podría agregarse en el futuro es la validación que las coordenadas de los recorridos se encuentren dentro del predio. Para ello, se investigó y se encontró un plugin para Leaflet, Leaflet.PointInPolygon, que realiza una validación similar con marcadores.

Además, en cuanto a seguridad se propone el añadir una sanitización de input en la caja de comentarios en la que escribe algo la persona al validar el recorrido. Actualmente, este es vulnerable a una inyección de código, el cual puede ser malicioso. Esta vulnerabilidad es conocida como Remote Code Execution (RCE), la cual es una vulnerabilidad en las aplicaciones web donde un atacante descubre una falla en la validación de input y esta permite que realicen una inyección de código, el cual es después ejecutado por la aplicación. Esto puede llevar a que se lean, añadan, modifiquen o borren archivos, cambien acceso a privilegios, cambien configuraciones, etc.
