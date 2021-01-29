# localStorage en JavaScript:

### ¿Qué es la API de almacenamiento web?

La _API de almacenamiento web_ es un conjunto de mecanismos que permiten a los navegadores almacenar pares clave / valor. Está diseñado para ser mucho más intuitivo que usar cookies.

Los pares clave / valor representan objetos de almacenamiento, que son similares a los objetos, excepto que permanecen intactos durante la carga de la página y siempre son cadenas. Puede acceder a estos valores como un objeto o utilizando el método (más sobre esto más adelante)<span style="color:blue">.getItem()</span>

### ¿Cuál es la diferencia entre <span style="color:red">sessionStorage</span> y <span style="color:red">localStorage</span>?

La API de almacenamiento web consta de dos mecanismos: sessionStoragey localStorage. Ambos sessionStoragey localStoragemantienen un área de almacenamiento separada para cada origen disponible durante la duración de la sesión de búsqueda.

La principal diferencia entre sessionStoragey localStoragees que sessionStoragesolo mantiene un área de almacenamiento mientras el navegador está abierto (incluso cuando la página se recarga o se restaura) mientras localStoragecontinúa almacenando datos después de que se cierra el navegador. En otras palabras, mientras que los datos almacenados en sessionStoragese borran cuando se cierra la página, los datos almacenados en localStorageno caducan.

En este tutorial, nos centraremos en cómo usar localStorageJavaScript.

### ¿Qué hay <span style="color:blue">localStorage</span> en JavaScript?
localStoragees una propiedad que permite a los sitios y aplicaciones de JavaScript guardar pares clave / valor en un navegador web sin fecha de vencimiento. Esto significa que los datos almacenados en el navegador persistirán incluso después de que se cierre la ventana del navegador.

Para un repaso visual sobre cómo usar localStorageJavaScript, consulte el video tutorial a continuación:

### ¿Dónde se <span style="color:blue">localStorage</span> almacena?

En Google Chrome, los datos de almacenamiento web se guardan en un archivo SQLite en una subcarpeta en el perfil del usuario. La subcarpeta se encuentra en en máquinas con Windows y en macOS.\AppData\Local\Google\Chrome\User Data\Default\Local Storage~/Library/Application Support/Google/Chrome/Default/Local Storage

Firefox guarda los objetos de almacenamiento en un archivo SQLite llamado , que también se encuentra en la carpeta del perfil del usuario.webappsstore.sqlite

### ¿Qué es ? <span style="color:blue">Window.localStorage</span>

El localStoragemecanismo está disponible a través de la propiedad. es parte de la interfaz en JavaScript, que representa una ventana que contiene un documento DOM.Window.localStorageWindow.localStorageWindow

La Windowinterfaz presenta una amplia gama de funciones, constructores, objetos y espacios de nombres. es una propiedad de solo lectura que devuelve una referencia al objeto de almacenamiento local utilizado para almacenar datos al que solo puede acceder el origen que lo creó.Window.localStorage

### ¿Cómo localStorage funciona?

Para usar localStorageen sus aplicaciones web, hay cinco métodos para elegir:

1. <span style="color:blue">setItem()</span>: Agregue clave y valor a localStorage
2. <span style="color:blue">getItem()</span>: Así es como obtienes artículos de localStorage
3. <span style="color:blue">removeItem()</span>: Eliminar un elemento por clave de localStorage
4. <span style="color:blue">clear()</span>: Limpiar todo localStorage
5. <span style="color:blue">key()</span>: Pasó un número para recuperar la clave de un localStorage

### <span style="color:blue">setItem()</span>: Cómo almacenar valores en localStorage

Tal como su nombre lo indica, este método le permite almacenar valores en el <span style="color:blue">localStorage</span> objeto.

Toma dos parámetros: una clave y un valor. Se puede hacer referencia a la clave más adelante para obtener el valor que se le atribuye.

`ventana . localStorage . setItem ( 'nombre' , 'Obaseki Nosa' ); `

Donde nameestá la clave y es el valor. También tenga en cuenta que solo se pueden almacenar cadenas.Obaseki NosalocalStorage

Para almacenar matrices u objetos, tendría que convertirlos en cadenas.

Para hacer esto, usamos el método antes de pasar a .JSON.stringify()setItem()

`const person = { nombre : "Obaseki Nosa" , ubicación : "Lagos" , }`

`ventana . localStorage . setItem ( 'usuario' , JSON . stringify ( persona )); `

### getItem(): Cómo obtener artículos de localStorage

Para obtener elementos de localStorage, use el método. le permite acceder a los datos almacenados en el objeto del navegador .getItem()getItem()localStorage

getItem()acepta solo un parámetro, que es key, y devuelve el valuecomo una cadena.

Para recuperar una clave de usuario:

`ventana . localStorage . getItem ( 'usuario' );`

Esto devuelve una cadena con un valor como:

`"{" Nombre ":" Obaseki Nosa "," ubicación ":" Lagos "}"`

Para usar este valor, tendría que convertirlo nuevamente en un objeto.

Para ello, utilizamos el método, que convierte una cadena JSON en un objeto JavaScript.JSON.parse()

`JSON . analizar ( ventana . almacenamiento local . getItem ( 'usuario' ));`

### removeItem(): Cómo eliminar localStoragesesiones

Para eliminar sesiones de almacenamiento local, use el método.removeItem()

Cuando se le pasa un nombre de clave, el método elimina esa clave del almacenamiento si existe. Si no hay ningún elemento asociado con la clave dada, este método no hará nada.removeItem()

`ventana . localStorage . removeItem ( 'nombre' );`

### clear(): Cómo eliminar todos los elementos en localStorage

Utilice el método para eliminar todos los elementos en .clear()localStorage

Este método, cuando se invoca, borra todo el almacenamiento de todos los registros de ese dominio. No recibe ningún parámetro.

`ventana . localStorage . claro ();`

### key(): Cómo obtener el nombre de una clave localStorage

El método es útil en situaciones en las que necesita recorrer las claves y le permite pasar un número o índice para recuperar el nombre de la clave.key()localStorage

`var KeyName = ventana . localStorage . clave ( índice ); `

### localStorage soporte de navegador

localStoragecomo tipo de almacenamiento web es una especificación HTML5. Es compatible con los principales navegadores, incluido IE8. Para asegurarse de que el navegador lo admita localStorage, puede verificar utilizando el siguiente fragmento:

`if ( typeof ( Storage ) ! == "undefined" ) { // Código para localStorage } else { // No hay soporte de almacenamiento web. }`

### localStorage limitaciones

Tan fácil como es usarlo localStorage, también es fácil hacer un mal uso. Las siguientes son limitaciones y también formas de NO usar localStorage:

- No almacene información confidencial del usuario en localStorage
- No sustituye a una base de datos basada en servidor, ya que la información solo se almacena en el navegador.
- localStorage está limitado a 5 MB en todos los navegadores principales
  localStorage es bastante inseguro ya que no tiene ningún tipo de protección de datos y se puede acceder mediante cualquier código en su página web
- localStorage es síncrona, lo que significa que cada operación llamada solo se ejecutará una tras otra

Con estos, hemos sido armados con el poder de localStoragenuestras aplicaciones web.
