// ls -l: te muestra toda la informacion del archivo en bites, cuando fue creado peso etc

// ls -lh: Listar archivos para ver su peso de una manera mas mas legible (lectura humana)

// ls -a: Listar archivos ocultos

// pwd: te muestra la ruta en la que te encuentras (print working directory)

// file <nombre del archivo>: te muestra el tipo de archivo que es

// ls -la: te muestra todos los archivos incluyendo los ocultos

// ls -lS: te muestra los archivos ordenados por peso

// ls -lr: te muestra los archivos en orden inverso

// tree: te muestra los archivos en forma de arbol

// tree -L <numero>: te muestra los archivos en forma de arbol con el numero de niveles que le indiques

// mkdir <nombre de la carpeta>: te crea una carpeta

// touch <nombre del archivo>: te crea un archivo

// cp <nombre del archivo que quieres copiar> <nombre del archivo nuevo>: te copia un archivo

// mv <nombre del archivo que quieres mover> .. : te mueve un archivo

// mv <nombre del archivo que quieres cambiar el nombre> <nuebo nombre>: te cambia el nombre de un archivo

// rm <nombre del archivo>: te elimina un archivo

// rm -i <nombre de la carpeta>: te elimina una carpeta pero te pregunta si estas seguro

// rm -ri <nombre de la carpeta>: te elimina una carpeta y todo lo que esta dentro de ella, te pregunta si estas seguro

// head <nombre del archivo>: te muestra las primeras 10 lineas de un archivo

// head -n <numero de lineas> <nombre del archivo>: te muestra las lineas que le indiques de un archivo pero de arriba hacia abajo

// tail <nombre del archivo>: te muestra las ultimas 10 lineas de un archivo

// tail -n <numero de lineas> <nombre del archivo>: te muestra las lineas que le indiques de un archivo pero de abajo hacia arriba

// less <nombre del archivo>: te muestra el contenido de un archivo:
// se escribes / seguido de la palabra que quieras buscar
// se escribes n para ir a la siguiente coincidencia

// xdg-open <nombre del archivo>: te abre el archivo con el programa que lo abre por defecto

// nautillus .: te abre el explorador de archivos en la ruta en la que te encuentras

// type <nombre del comando>: te muestra el tipo de comando que es

// alias <nombre del alias>="<comando>": te crea un alias para un comando

// man <nombre del comando>: te muestra el manual de un comando

// info <nombre del comando>: te muestra la informacion de un comando mas resumida que el manual

// ls*.txt || ls*.<nombre del la extencion del archivo>: te muestra todos los archivos que terminen en .txt || <nombre del la extencion del archivo>

// ls <nombre del archivo>.*: te muestra todos los archivos que empiecen con <nombre del archivo>

// ls <nombre del archivo>??: te muestra todos los archivos que empiecen con <nombre del archivo> y tengan 2 caracteres mas o si pones mas signos de interrogacion te muestra mas caracteres deacuerso a los signos de interrogacion que pongas

// ls [[:upper:]]*: te muestra todos los archivos que empiecen con una letra mayuscula

// ls [[:lower:]]*: te muestra todos los archivos que empiecen con una letra minuscula

// ls [ad]*: te muestra todos los archivos que empiecen con a o d

// ls <nombre del archivo> > <nombre del archivo nuevo>: te crea un archivo nuevo con el contenido del archivo que le indiques por ejemplo: ls Downloads > archivos.txt te crea un archivo llamado archivos.txt con el contenido de la carpeta Downloads (cuando usamos el operador > se sobreescribe el archivo si ya existe, si queremos agregar contenido a un archivo usamos >>)

// ls <nombre de un comando erroneo> > <nombre del archivo nuevo>: te crea un archivo nuevo con el contenido del error que te da el comando que le indiques por ejemplo: ls <nombre de un comando erroneo> > error.txt te crea un archivo llamado error.txt con el contenido del error que te da el comando que le indiques (si ponemos el 2> en vez del > nos crea un archivo con el error pero no nos muestra el error en la terminal)

// ls <nombre de un comando erroneo> > <nombre del archivo nuevo> 2>&1: te crea un archivo nuevo con el contenido del error que te da el comando que le indiques por ejemplo: ls <nombre de un comando erroneo> > error.txt 2>&1 te crea un archivo llamado error.txt con el contenido del error que te da el comando que le indiques y nos muestra el error en la terminal

// echo "texto": te muestra el texto que le indiques

// cat <nombre del archivo> <nombre del archivo>: te muestra el contenido de los archivos que le indiques

// mkdir <nombre de la carpeta> && touch <nombre del archivo>: te crea una carpeta y un archivo (&& sirve para ejecutar varios comandos en una sola linea si el primero se ejecuta correctamente)

// which <nombre del programa>: te muestra la ruta del programa que le indiques

// find <ruta> -name <nombre del archivo>: te muestra la ruta del archivo que le indiques

// grep <palabra a buscar> <nombre del archivo>: te muestra las lineas que contengan la palabra que le indiques

// grep -i <palabra a buscar> <nombre del archivo>: te muestra las lineas que contengan la palabra que le indiques sin importar si esta en mayusculas o minusculas

// grep -c <palabra a buscar> <nombre del archivo>: te muestra el numero de lineas que contengan la palabra que le indiques

// grep -ci <palabra a buscar> <nombre del archivo>: te muestra el numero de lineas que contengan la palabra que le indiques sin importar si esta en mayusculas o minusculas

// grep -vi <palabra a buscar> <nombre del archivo>: te muestra las lineas que no contengan la palabra que le indiques sin importar si esta en mayusculas o minusculas

// curl <url> > <nombre del archivo>: te crea un archivo con el contenido de la url que le indiques por ejemplo: curl https://www.google.com > google.html te crea un archivo llamado google.html con el contenido de la pagina de google

// wget <url>: te descarga el contenido de la url que le indiques por ejemplo: wget https://www.google.com te descarga el contenido de la pagina de google luego escribes cat index.html y te muestra el contenido de la pagina de google
