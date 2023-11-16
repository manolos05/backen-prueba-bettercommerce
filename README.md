# Prueba técnica full stack junior Better Commerce Chile

Este arhivo corresponde al Backend como solución a la prueba tecnica para Better creado adonis API.

1. En cuanto algunas características, se realizaron los 4 endpoint, para esto se diseñaron las tablas para la base de datos las cuales se encuentran en local
2. Son 4 tablas Flavors, Productos, Regiones y Comunas
3. En la carpeta database se encuentran las migraciones de estas tablas y la composicion de sus columnas que conforman la base de datos del proyecto.
4. Dentro de la carpeta data en el root principal se encuentran los archivos CSV los cuales fueron ingresados en la base de dato.
5. En la carpeta APP se encuentran los modelos y controladores con algunas validaciones. 
6. dentro de la carpeta START se encuentran las routes


## Instrucciones

Para ejecutar el proyecto:

1. Instala las dependencias con `npm install`.
2. Instalar adonis con `npm i -g @adonisjs/cli`.
3. Instalar la base de datos en este caso `npm i --save sqlite3`.
4. Crear app key con el comando `adonis key:generate`
5. realizar las migraciones con `adonis migration:run`.
6. Ejecuta el proyecto con `adonis serve --dev`.
7. El puerto del navegador para ver el proyecto en el navegador es el http://127.0.0.1:3333/


Saludos
Manuel Salazar
+56949664444
manusalh@gmail.com



