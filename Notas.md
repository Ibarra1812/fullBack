PARTE 1
usamos express para el manejo de respuestas y solicitudes HTTP, y para la solicitudes POST tenemos que usar el parse-json que es para tener el request.body que es para la solicitud se pueda cambiar a un objeto js para despues poder mandarlo al servidor
Despues un protocolo para HTTP es que para todas las solicitudes menos POST, no tiene que haber efectos secundarios.
Luego usamos MIDWARE para obtener un manejo sobre las solicitudes y las respuestas, ya que es una capa en medio que nos permite mejor gestion de todo. MIDWARE son funciones que podemos realizar que estan entre medio de las solicitudes y las respuestas.
Nodemon luego es una libreria que se usa para desarrollo nos permite que cada vez que se actualiza un archivo se actualice tambien el proyecto corriendo, y se renderize.
Luego vimos lo que es REST en pocas palabras que las cosas singulares, como las notas en el caso de nuestra aplicación, se llaman recursos en el pensamiento REST. Cada recurso tiene una URL asociada que es la dirección única del recurso.
PARTE 2
La política de mismo origen es un mecanismo de seguridad implementado por los navegadores para prevenir el secuestro de sesiones, entre otras vulnerabilidades de seguridad.
Política de mismo origen: Es una restricción estricta del navegador para bloquear accesos entre orígenes diferentes por defecto.
CORS: Es un mecanismo que permite a los servidores autorizar accesos desde otros orígenes de manera controlada.
npm install cors
Luego lo que hacemos tambien es un SPA, donde unificamos el front con el back donde la direccion de solicitudes se va ver unificada en 1 sola el localhost:3001/api/persons, donde esta union se realiza mediante el npm run build 
app.use(express.static('dist'))
y gracias al midware static dist, que dice al back que toda request que reciba de afuera, verifique si en dist esta la respuesta para mandarselo a ellos
y tambien gracias a esto tambien tenemos que cambiar la direccion de frontend en la parte de servicios y cambiar la direccion de AXIOS y darle una relativa para poder guiarse bien, y luego modificar la configuracion de vite y agregar un proxy para declarar la direccion que tienen que tener para el servidor, osea la base de datos y cargar los datos que hagan falta, porque va esta el frontend pero vacio sin datos.
PARTE 3 Y 4
1.Aca lo que hicismo en la parte 3 como parte de la configuracion del back con el front en una pseudo produccion fue el de hacer en el front un 
npm run build
Como para hacer una version mas optimizada del front para que el back lo lea directamente dentro de la carpeta dist
luego tambien tenemos el para optimizar el viaje de carpetas de dist
tenemos en package.json unos scirpts para hacer los build y los pasajes de carpetas de forma automatica
luego otro comando como para hacer commits y push en git

2.Luego otro paso importante fue el de configurar las rutas relativas de front y back y unirlas ya que una iniciaba en el puerto 5337 y otro en 3001 y esto hace que haya errores en el get de datos o http request en si, esto lo solucionamos con el ingreso de una configuracion de url en vite.config y tambien cambiando a una url relativa en services/Persons.js

3.luego tambien agregamos unas dependencias de desarrollo que es nodemon que es para que se actualize el servidor cada vez que se cambia los datos de algun archivo del proyecto

4.tambien usamos morgan para la generacion de mensajes por medio de midware asi vemos que datos vienen y van por las http request

5. Tambien agarramos express para la parte de solicitudes HTTP 

6. Configuramos lo que es tambine el depurador de Visual code que se utiliza el launch.json que es para inicializar el depurador para determinado lenguaje

7. Creamos un cluster en mongoDB para la conexion de persistencia con la aplicacion, teniendo en cuenta los usuarios y contrasena dentro de .env para poder hacer la conexion.
Instalando como controladores Mongoose y no MongoDB oficial de node
Modificamos lo que es el push de datos por parte del esquema esto se hace modificando con el metodo toJson que hace que convierte a todos los datos que mandamos de objeto a string para asi asegurando que se van a borrar atributos que no queremos como __v de mongo que es la version que fue agregada y la generacion de id automatico que tiene el mongoDB.
Usamos tambien findById y findByAndDelete y next como manejador de errores, next es un midware, este esta como entrada para todas las funciones de peticion HTTP que hay para la aplicacion porque sino no se podria invocar next con error.

8. Agregamos una nueva libreria dotenv para el manejo de variables de entorno
9. Regex

10. Genéricamente, lint o linter es cualquier herramienta que detecta y marca errores en los lenguajes de programación, incluidos los errores de estilo. El término comportamiento lint-like a veces se aplica al proceso de marcar el uso de lenguaje sospechoso. Las herramientas de tipo lint generalmente realizan análisis estáticos del código fuente.
eslint:recommended añade un conjunto de reglas recomendadas al proyecto. Además, se han añadido reglas para la indentación, saltos de línea, guiones y puntos y comas. Estas cuatro reglas están todas definidas en el plugin de estilos de Eslint.
luego en package.json esta un comando para aplicar eslint a todos los archivos del proyecto
npm run lint


luego como midware tambien usamos un manejador de errores, uno para errores de solicitudes de url, y otro para errores de sistema, esto nos vendra bien cuando tengamos, o queramos poner un sistema de detector de errores
lo definen 4 variables de entrada, error, request, response, next
y luego para las rutas desconocidas solo request, response, next