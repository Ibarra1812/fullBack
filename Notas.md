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