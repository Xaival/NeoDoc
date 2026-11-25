# NeoDoc

**NeoDoc** es un editor de documentos interactivos que funciona en el navegador. Permite combinar texto, tablas, ecuaciones, imágenes, audio, vídeo y código en páginas adaptables a distintos tamaños de pantalla. Cada edición incluye un documento de ejemplo que se puede explorar y modificar.

## Ediciones

| Archivo | Cómo se abre | Dónde se guardan los cambios |
| --- | --- | --- |
| [NeoDoc.html](./Proyecto/NeoDoc.html) | Directamente en el navegador, sin instalación ni servidor. | En un archivo HTML que puedes volver a abrir, mover o compartir. |
| [NeoDoc.php](./Proyecto/NeoDoc.php) | Desde la URL de un servidor con PHP. La consulta es pública para quienes pueden acceder a esa URL y la edición requiere credenciales. | En el mismo archivo PHP, con guardado manual o automático. |

También están disponibles las ediciones minificadas [NeoDoc-min.html](./Proyecto/NeoDoc-min.html) y [NeoDoc-min.php](./Proyecto/NeoDoc-min.php).

## Empezar con NeoDoc.html

1. Abre [NeoDoc.html](./Proyecto/NeoDoc.html) en GitHub y descarga el archivo.
2. Abre el archivo en tu navegador y selecciona **Editar** en el menú lateral.
3. Añade o modifica el contenido. Usa **Vista** para consultar el resultado.
4. Selecciona **Guardar**. Si el navegador admite el selector de archivos, podrás elegir el destino. En los demás casos se descargará una copia HTML.
5. Abre el HTML que acabas de guardar para seguir trabajando con esa versión.

El archivo guarda el documento, el editor y el tema activo. Puedes usarlo sin conexión cuando sus recursos estén incrustados o disponibles como archivos locales. Si usas rutas relativas, conserva la estructura de carpetas al mover el documento. Los recursos externos necesitan que su origen esté accesible.

El historial se conserva en el navegador y caduca tras 30 días de inactividad. Si dos pestañas entran en conflicto, NeoDoc puede conservar un borrador independiente en la pestaña afectada y ofrecer su exportación a JSON. Usa **Guardar** para llevar los cambios al archivo HTML.

## Empezar con NeoDoc.php

### Requisitos

- PHP 8.1 o posterior con la extensión **DOM** habilitada.
- Permisos para que PHP pueda escribir en la carpeta de NeoDoc, actualizar el archivo y usar el directorio temporal del sistema.
- Un navegador con cookies habilitadas para mantener la sesión de edición.

NeoDoc guarda el contenido dentro del propio PHP y utiliza archivos auxiliares para el historial y el control de acceso. No requiere una base de datos.

### Configuración y prueba local

1. Descarga [NeoDoc.php](./Proyecto/NeoDoc.php) y guárdalo en una carpeta de trabajo.
2. Abre el archivo con un editor de texto y cambia `NEODOC_USUARIO` y `NEODOC_CONTRASENA` al principio del PHP.
3. Desde esa carpeta, ejecuta el servidor de desarrollo de PHP.

   ```sh
   php -S 127.0.0.1:8000 -t . NeoDoc.php
   ```

4. Abre [http://127.0.0.1:8000/NeoDoc.php](http://127.0.0.1:8000/NeoDoc.php). Selecciona **Editar** e introduce las credenciales que configuraste.
5. Haz un cambio, pulsa **Guardar** y vuelve a abrir la página para ver el documento actualizado.

Para publicarlo, coloca el archivo en un servidor web que ejecute PHP y accede a él por HTTPS. Cualquier persona con acceso a la URL puede ver el documento. Si quieres limitar quién puede consultarlo, configura también el acceso en el servidor web.

### Guardado, historial y conflictos

- **Guardado manual.** El botón **Guardar** actualiza el documento en el servidor. Al volver a abrir la URL se muestra la última versión guardada.
- **Guardado automático.** En **Configuración**, activa **Guardar cambios automáticamente**. NeoDoc guarda tras una breve pausa en la edición y muestra el estado del guardado.
- **Historial.** Con una sesión autorizada y el historial activado, las revisiones se guardan en un archivo auxiliar del servidor. El historial permite consultar y recuperar revisiones. **Guardar** y el guardado automático actualizan la página que ven los lectores.
- **Conflictos.** Si el documento cambió en el servidor desde que abriste la página, NeoDoc rechaza el guardado para preservar la versión más reciente. Exporta tu trabajo a JSON antes de recargar y revisa qué cambios quieres incorporar.
- **Límites.** El servidor admite hasta 64 MiB por guardado del documento y hasta 8 MiB para el historial. Los límites de tu alojamiento pueden ser inferiores.

El PHP admite bloques personalizados con HTML y CSS. El servidor valida el documento al guardar y puede rechazar elementos con código activo o controles que NeoDoc no admite.

## Funciones del editor

- **Distribución adaptable.** Secciones de una, dos o tres columnas con diferentes proporciones. Los desplegables admiten bloques anidados.
- **Edición por bloques.** Crea, duplica, elimina o reordena contenido mediante arrastre. Selecciona varios bloques con un marco y utiliza los atajos para copiar, cortar, pegar, deshacer y rehacer.
- **Navegación.** Los títulos generan el índice del menú lateral. Alterna entre **Editar** y **Vista** mientras trabajas.
- **Apariencia.** Temas claro y oscuro, colores, transparencias, tipografía y CSS adicional. Cada tabla tiene opciones de diseño para ambos temas.
- **Revisiones.** Consulta el registro de cambios y restaura versiones conservando las revisiones posteriores. Puedes desactivar el registro y limpiar el historial desde el editor.

### Tipos de bloque

| Bloque | Funciones |
| --- | --- |
| **Título** | Encabezados de distintos niveles con índice automático. |
| **Texto** | Formato enriquecido, enlaces, listas y alineación. |
| **Desplegable** | Secciones expandibles con otros bloques dentro. |
| **Tabla** | Celdas editables, ajuste automático o manual de dimensiones, reordenación de filas y columnas, cabeceras, bordes y colores alternos. |
| **Ecuación** | Editor visual con fracciones, radicales, índices, operadores y símbolos. |
| **Iframe** | Inserción de páginas o recursos web con opciones de tamaño y permisos. |
| **Imagen** | URL, ruta relativa o archivo incrustado. Puede funcionar como enlace o abrirse en un visor con zoom, navegación, pantalla completa y descarga. |
| **Multimedia** | Reproducción de audio y vídeo desde una URL, una ruta relativa o un archivo incrustado. |
| **Código** | Selección de lenguaje, resaltado de sintaxis, leyenda opcional y copia al portapapeles. |
| **Personalizado** | Bloques de HTML y CSS que se pueden guardar y reutilizar como plantillas. |

## Importar y exportar JSON

En modo **Editar**, usa **Exportar** para generar un JSON con el título, el contenido y las plantillas personalizadas. Usa **Importar** en cualquiera de las dos ediciones para cargar ese contenido conservando los estilos generales del documento de destino. La importación reemplaza el contenido abierto, por lo que puedes exportarlo primero si quieres conservar una copia.

Para llevar un documento de PHP a HTML, expórtalo a JSON, impórtalo en `NeoDoc.html` y guarda el HTML resultante. El intercambio JSON conserva el contenido y las plantillas. El historial y la configuración visual general pertenecen a cada documento.

## Licencia

NeoDoc se distribuye bajo la **Licencia NeoDoc**, basada en MIT y con condiciones específicas para el uso comercial. Consulta [LICENCIA.txt](./LICENCIA.txt) para ver los términos completos.
