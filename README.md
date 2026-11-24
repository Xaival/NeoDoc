# NeoDoc

**NeoDoc** es un editor de documentos enriquecidos, modular y portable en un único archivo HTML. Permite crear documentos interactivos y adaptables a distintos tamaños de pantalla sin instalar aplicaciones ni mantener un servidor.

> ✅ Proyecto terminado y listo para su uso.

---

## 🔧 Funcionalidades

### 🧩 Distribución del contenido

Organiza los bloques en secciones de una, dos o tres columnas:

| Distribución | Descripción |
| --- | --- |
| Simple | Una sola columna |
| `col11` | Dos columnas iguales |
| `col21` | Dos columnas, izquierda más ancha |
| `col12` | Dos columnas, derecha más ancha |
| `col111` | Tres columnas iguales |
| `col112` | Tres columnas, derecha más ancha |
| `col121` | Tres columnas, central más ancha |
| `col211` | Tres columnas, izquierda más ancha |

### 📝 Tipos de contenido

- **Título:** niveles de encabezado e índice de navegación automático.
- **Texto:** edición enriquecida, formato, listas, enlaces y alineación.
- **Desplegable:** secciones expandibles con bloques de contenido anidados.
- **Tabla:** edición de celdas, dimensionado automático o manual, arrastre y reorganización de filas y columnas, cabeceras, bordes y colores alternos configurables.
- **Ecuación:** editor matemático con fracciones, radicales, índices, operadores y símbolos.
- **Iframe:** incorporación de páginas y recursos web con opciones de tamaño y permisos.
- **Imagen:** archivos mediante URL, ruta relativa o incrustación; enlace o visualizador con zoom, desplazamiento y descarga.
- **Multimedia:** reproducción de audio y vídeo mediante recursos externos, locales o incrustados.
- **Código:** resaltado de sintaxis, selección de lenguaje, leyenda opcional y copia al portapapeles.
- **Personalizado:** bloques HTML y CSS propios, reutilizables mediante plantillas guardadas.

### ✏️ Edición y organización

- Modos Vista y Edición.
- Creación, duplicación, eliminación y desplazamiento de contenidos mediante arrastre.
- Selección múltiple por marco, con desplazamiento automático de la página.
- Copiar, cortar, pegar, deshacer y rehacer mediante atajos de teclado.
- Configuración individual de los bloques y plantillas personalizadas reutilizables.

### 🕒 Historial de cambios

- Registro de creaciones, modificaciones, movimientos, eliminaciones y restauraciones.
- Restauración de versiones sin perder el historial posterior.
- Conservación del estado inicial del archivo.
- Almacenamiento local en el navegador, con puntos de guardado espaciados progresivamente para limitar el espacio ocupado.
- Limpieza de datos históricos tras 30 días de inactividad, cuando NeoDoc comprueba el almacenamiento disponible.
- Posibilidad de desactivar o borrar manualmente el historial.
- Indicador de cambios pendientes de guardar en el archivo HTML.

### 🎨 Apariencia y configuración

- Temas claro y oscuro.
- Personalización visual de colores, transparencias y tipografía.
- CSS adicional para diseños avanzados.
- Diseño adaptable y controles de edición integrados.
- Configuración del aspecto de cada tabla para ambos temas.

### 💾 Guardado y portabilidad

- Descarga del documento completo en un único HTML con el nombre de la página y el tema activo.
- Importación y exportación JSON del título, contenido y plantillas, sin alterar los estilos personalizados del documento de destino.
- Fuente Electrolize y resaltado de sintaxis integrados en el HTML.
- Carga y descarga dinámica de recursos multimedia fuera del área visible para reducir el consumo de recursos.

---

## 📁 Uso

1. Abre [`NeoDoc.html`](./NeoDoc.html) directamente en un navegador compatible.
2. Activa el modo Edición para crear o modificar contenido.
3. Utiliza la opción Guardar para descargar una copia HTML con tus cambios.
4. Abre el archivo descargado para continuar trabajando sobre esa versión.

No se requiere instalación, servidor ni conexión a Internet para las funciones integradas. Los recursos enlazados desde Internet sí requieren conexión y pueden estar sujetos a restricciones del sitio de origen o del navegador, especialmente los vídeos de YouTube cuando el documento se abre como archivo local.

El historial guardado en el navegador no sustituye al guardado del archivo HTML.

## 🧪 Documento de pruebas

[`NeoDoc-Pruebas.html`](./NeoDoc-Pruebas.html) incluye ejemplos de todos los tipos de contenido y distribuciones disponibles. Permite explorar las funciones del editor sin modificar el documento principal.

---

## 📌 Estado del proyecto

NeoDoc ha completado su desarrollo funcional, revisión de código, optimización y pruebas de estabilidad, rendimiento y diseño responsivo. Se distribuye como una versión terminada, sin tareas de desarrollo pendientes conocidas.

## 📜 Licencia

Este proyecto se distribuye bajo la **Licencia NeoDoc**.
Consulta el archivo [LICENCIA.txt](./LICENCIA.txt) para más detalles.
