/*
-----------------------------------------
Contenidos
-----------------------------------------
*/
const content_conf_ajustes=`
    <div class="conf">
      <i class="add" onclick="openTap(this, 'Add')" ontouchstart="openTap(this, 'Add')"></i>
      <i class="drag" ondragstart="iniciarArrastre(event)" draggable="true"></i>
    </div>
    <div class="ajustes">
      <i class="configuracion" onclick="abrirConfig(this)" ontouchstart="abrirConfig(this)"></i>
      <div class="configura">
        <div onclick="openTap(this, 'Editar')" ontouchstart="openTap(this, 'Editar')"><i class="edit"></i> Editar</div>
        <div onclick="openTap(this, 'Contenido')" ontouchstart="openTap(this, 'Contenido')"><i class="conte"></i> Contenido</div>
        <div onclick="delContent(this)" ontouchstart="delContent(this)"><i class="del"></i> Borrar</div>
      </div>
    </div>`,

content_titulo=`<div class="columna">
  <div class="content titulo" data-info='{"tipo": "titulo", "nivel": "1"}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <div class="titulo"></div>
      <h1 contenteditable="true" onmouseup="actualizarBotonesFormato()" onkeyup="UpdateTitulos()">Titulo</h1>
    </div>
  </div>
</div>`,

content_texto=`<div class="columna">
  <div class="content texto" data-info='{"tipo": "texto"}'>
    `+content_conf_ajustes+`
    <div class="contenido" contenteditable="true">
      Texto
    </div>
  </div>
</div>`,

content_desplegable=`<div class="columna">
  <div class="content desplegable" data-info='{"tipo": "desplegable"}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <div class="titulo">
        <i class="arrow" onclick="desplegar(this)" ontouchstart="desplegar(this)"></i>
        <div contenteditable="true" onmouseup="actualizarBotonesFormato()">Desplegable</div>
      </div>
      <div class="desplegado" style="max-height: 0px; overflow: hidden;">
        <div class="seccion">
          `+content_texto+`
        </div>
      </div>
    </div>
  </div>
</div>`,

content_tabla=`<div class="columna">
  <div class="content tabla" data-info='{"tipo": "tabla"}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <!-- Contenido aquí -->
      <table><tbody>
        <tr>
        <th contenteditable="true" onmouseup="actualizarBotonesFormato()">Titulo 1</th>
        <th contenteditable="true" onmouseup="actualizarBotonesFormato()">Titulo 2</th>
        </tr>
        <tr>
        <td contenteditable="true" onmouseup="actualizarBotonesFormato()">Texto</td>
        <td contenteditable="true" onmouseup="actualizarBotonesFormato()">Texto</td>
        </tr>
      </tbody></table>
    </div>
  </div>
</div>`,

content_iframe=`<div class="columna">
  <div class="content iframe" data-info='{"tipo": "iframe", "contenido": "", "loading": "", "allowfullscreen":false, "allow-scripts":false, "allow-same-origin":false, "allow-popups":false, "allow-presentation":false, "allow-modals":false}'>
    `+content_conf_ajustes+`
    <div class="contenido" onmouseup="actualizarBotonesFormato()">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')" ontouchstart="openTap(this, 'Contenido')">
        <div class="icon"></div>
        <p>Iframe</p>
      </div>
    </div>
  </div>
</div>`,

content_imagen=`<div class="columna">
  <div class="content imagen" data-info='{"tipo": "imagen", "contenido": ""}'>
    `+content_conf_ajustes+`
    <div class="contenido" onmouseup="actualizarBotonesFormato()">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')" ontouchstart="openTap(this, 'Contenido')">
        <div class="icon"></div>
        <p>Imagen</p>
      </div>
    </div>
  </div>
</div>`,

content_audio=`<div class="columna">
  <div class="content audio" data-info='{"tipo": "audio", "contenido": ""}'>
    `+content_conf_ajustes+`
    <div class="contenido" onmouseup="actualizarBotonesFormato()">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')" ontouchstart="openTap(this, 'Contenido')">
        <div class="icon"></div>
        <p>Audio</p>
      </div>
    </div>
  </div>
</div>`,

content_video=`<div class="columna">
  <div class="content video" data-info='{"tipo": "video", "contenido": ""}'>
    `+content_conf_ajustes+`
    <div class="contenido" onmouseup="actualizarBotonesFormato()">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')" ontouchstart="openTap(this, 'Contenido')">
        <div class="icon"></div>
        <p>Video</p>
      </div>
    </div>
  </div>
</div>`,

content_code=`<div class="columna">
  <div class="content code" data-info='{"tipo": "code", "lenguaje": "HTML"}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <!-- Contenido aquí -->
      <div class="Codigo">
        <div class="titulo">Código HTML</div>
        <div class="copy"><button type="button" onclick="CopyCode(this)">Copiar</button></div>
<pre><code class="HTML" contenteditable="true" onkeydown="manejarTab(event, this)" onmouseup="actualizarBotonesFormato()" onfocus="limpiarContenido0(this)" onblur="limpiarContenido0(this); hljs.highlightAll();">&lt;a class="download" id="link1" href="#" download="success.txt"&gt;
  &lt;div class="text"&gt;&lt;span&gt;Download&lt;/span&gt;&lt;/div&gt;
  &lt;div class="icon"&gt;&lt;/div&gt;
&lt;/a&gt;</code></pre>
        <div class="leyenda" contenteditable="true" onmouseup="actualizarBotonesFormato()" onblur="limpiarContenido0(this)">
        Respuesta
        </div>
      </div>
    </div>
  </div>
</div>`,

content_custom=`<div class="columna">
  <div class="content custom" data-info='{"tipo": "custom"}'>
    `+content_conf_ajustes+`
    <div class="contenido" onclick="openTap(this, 'Contenido')" ontouchstart="openTap(this, 'Contenido')">
      <!-- Contenido aquí -->
      &lt;/&gt;
    </div>
  </div>
</div>`



/*
-----------------------------------------
Cambiar menu lateral
-----------------------------------------
*/
function toggleMenu() {
  if (window.innerWidth > 900) {
    document.getElementById('menu-lateral').classList.toggle('active');
  } else {
    let menuLateral = document.getElementById('menu-lateral');
    menuLateral.classList.toggle('mob-active');
    
    if (menuLateral.classList.contains('mob-active')) {
      window.addEventListener('resize', handleResize);
    } else {
      window.removeEventListener('resize', handleResize);
    }
  }
}
// Evento (Que el ancho del navegador sea mayor a 900px)
function handleResize() {
  let menuLateral = document.getElementById('menu-lateral');
  if (window.innerWidth > 900) {
    menuLateral.classList.add('active');
    menuLateral.classList.remove('mob-active');
    window.removeEventListener('resize', handleResize);
  }
}



/*
-----------------------------------------
Modo edición
-----------------------------------------
*/
function ModeEditar() {
  document.body.classList.remove('View');
  document.body.classList.add('Edit');
  document.querySelectorAll('[contenteditable]').forEach((elemento) => {elemento.setAttribute('contenteditable', 'true');});
}
function ModeView() {
  document.body.classList.remove('Edit');
  document.body.classList.add('View');
  document.querySelectorAll('[contenteditable]').forEach((elemento) => {elemento.setAttribute('contenteditable', 'false');});
}



/*
-----------------------------------------
Revision de contenedores
-----------------------------------------
*/
function testContenedor() {
  // Obtener el contenedor #conten
  const contenedor = document.querySelector("#conten");

  // Recorrer .columnas dentro de #conten, eliminarlas si no contienen .content
  contenedor.querySelectorAll(".columna").forEach((columna) => {
    if (!columna.querySelector(".content")) {
      columna.parentElement.classList.remove('columnas');
      columna.remove();
    }
  });
  
  // Recorrer .seccion dentro de #conten, eliminarlas si no contienen .columnas
  contenedor.querySelectorAll(".seccion").forEach((seccion) => {
    if (!seccion.querySelector(".columna")) {seccion.remove();}
  });

  // Si no hay ".seccion" en "#conten" o en ".content.desplegable .desplegado" añadir una
  if (contenedor.querySelectorAll(".seccion").length == 0) {
    contenedor.innerHTML = `<div class="seccion">`+content_texto+`<div class="seccion">`;
  } else {
    contenedor.querySelectorAll(".content.desplegable .desplegado").forEach((desplegado) => {
      if (desplegado.querySelectorAll(".seccion").length == 0) {
        desplegado.innerHTML = `<div class="seccion">`+content_texto+`<div class="seccion">`;
      }
    });
  }

  // Recorrer las columnas únicas
  document.querySelectorAll("#conten .seccion:not(.columnas) > .columna").forEach(columna => {
    if (columna.children.length > 1) {
      // Crear una variable para almacenar los nuevos elementos
      let nuevasSecciones = "";
      // Iterar sobre los hijos de la columna
      Array.from(columna.children).forEach(content => {
        // Construir el HTML para cada nuevo contenido
        nuevasSecciones += `<div class="seccion"><div class="columna">${content.outerHTML}</div></div>`;
      });
      // Añadir nuevas secciones debajo y borrar la sección anterior
      columna.parentNode.insertAdjacentHTML('afterend', nuevasSecciones);
      columna.parentNode.remove();
    }
  });

  // Revision de titulos
  UpdateTitulos();
}



/*
-----------------------------------------
Desplazar elementos
-----------------------------------------
*/
const contenedorPagina = document.querySelector(".cuerpo"); // Obtén el contenedor sobre el que se desplaza
let elementoArrastrado = null; // Inicializa la variable para el elemento arrastrado
let insertarArriba = false; // Bandera para indicar si se debe insertar arriba o abajo del elemento
let insertarConten = null; // Bandera para indicar si se debe insertar arriba o abajo del elemento

// Modifica la función para iniciar el arrastre
function iniciarArrastre(event) {
  // Obtén el contenedor que se está arrastrando
  elementoArrastrado = event.target.closest('.drag').closest('.content');
  // Configura la transferencia de datos con el contenido HTML del contenedor
  event.dataTransfer.setData('text/html', elementoArrastrado.outerHTML);
  // Establecer el "fantasma" para toda la sección
  event.dataTransfer.setDragImage(elementoArrastrado, 40, 15);
}

// Evento al arrastrar sobre el contenedor
contenedorPagina.addEventListener('dragover', (e) => {
  // Prevenir el comportamiento predeterminado
  e.preventDefault();
  // Obtener la content sobre la que se está arrastrando
  const seccionSobre = e.target.closest('.content');
  if (seccionSobre) {
    // Obtener las dimensiones del elemento sobre el que se está arrastrando
    const rect = seccionSobre.getBoundingClientRect();
    // Calcular si se debe insertar arriba o abajo del elemento
    insertarArriba = e.clientY - rect.top < rect.height / 2;
    // Aplicar clases de movimiento dependiendo de la posición
    if (insertarArriba) {
      seccionSobre.classList.remove('moveDOWN');
      seccionSobre.classList.add('moveUP');
    } else {
      seccionSobre.classList.remove('moveUP');
      seccionSobre.classList.add('moveDOWN');
    }
  } else {
    const contenSobre = document.querySelector("#conten");
    // Comprobar si esta por la altura maxima o minima del #conten
    const rect = contenSobre.getBoundingClientRect();
    // Aplicar clases de movimiento dependiendo de la posición
    if (e.clientY - 10 < rect.top) {
      contenSobre.classList.remove('moveDOWN');
      contenSobre.classList.add('moveUP');
      insertarConten="contenUP";
    } else if (e.clientY + 12 > rect.bottom) {
      contenSobre.classList.remove('moveUP');
      contenSobre.classList.add('moveDOWN');
      insertarConten="contenDOWN";
    } else {
      contenSobre.classList.remove('moveUP', 'moveDOWN');
      insertarConten=null;
    }
  }
});

// Evento al salir del área de arrastre
contenedorPagina.addEventListener('dragleave', () => {
  contenedorPagina.querySelectorAll('.moveUP, .moveDOWN').forEach((el) => {el.classList.remove('moveUP', 'moveDOWN');}); // Limpiar las clases de movimiento
});

// Evento al soltar el elemento arrastrado
contenedorPagina.addEventListener('drop', (e) => {
  // Prevenir el comportamiento predeterminado
  e.preventDefault();
  // Limpiar las clases de movimiento
  contenedorPagina.querySelectorAll('.moveUP, .moveDOWN').forEach((el) => {el.classList.remove('moveUP', 'moveDOWN');});

  // Verificar si hay un elemento arrastrado
  if (e.dataTransfer.types.includes('text/html')) {
    let codigoHTML = e.dataTransfer.getData('text/html');

    // Obtener el padre sobre el que se soltará el elemento
    const padre = e.target.closest('.content');
    if (padre) {
      const {parentNode} = padre; // Obtener el nodo padre
      codigoHTML = document.createRange().createContextualFragment(codigoHTML);

      // Insertar el elemento arrastrado arriba o abajo según la posición
      if (insertarArriba) {parentNode.insertBefore(codigoHTML, padre);}
      else {parentNode.insertBefore(codigoHTML, padre.nextSibling);}

    } else if (insertarConten=="contenUP" || insertarConten=="contenDOWN") {
      // Crear el contenedor con la estructura deseada
      const contenedorSeccion = document.createRange().createContextualFragment(`<div class="seccion"><div class="columna">${codigoHTML}</div></div>`);
      // Insertar el contenedor en la posición deseada
      if (insertarConten=="contenUP") {
        document.querySelector("#conten").insertBefore(contenedorSeccion, document.querySelector("#conten").firstChild);
      } else if (insertarConten=="contenDOWN") {
        document.querySelector("#conten").appendChild(contenedorSeccion);
      }
    }
  }
});

// Evento al finalizar el arrastre
contenedorPagina.addEventListener('dragend', () => {
  insertarConten = null; // Limpiar la variable de elemento arrastrado
  if (elementoArrastrado){elementoArrastrado.remove();} // Eliminar el elemento arrastrado si existe  
  elementoArrastrado = null; // Limpiar al finalizar el arrastre
  testContenedor(); // Función de comprobación
});



/*
-----------------------------------------
Desplegable de configuración de content
-----------------------------------------
*/
// Activa un evento para cerrar cuando se haga clic fuera del elemento
function cerrarConfig(event) {
  if (!event.target.closest('.openConfig')) {
    // Borra cualquiera que contenga esa clase
    document.querySelectorAll('.openConfig').forEach(el => el.classList.remove('openConfig'));
    // Desactiva el evento
    document.removeEventListener("click", cerrarConfig);
  }
}
function abrirConfig(elemento) {
  const configura = elemento.parentElement;          // El contenedor que recibe la clase
  const content   = configura.closest('.content');   // Su ancestro .content
  
  // Comprueba si no tiene la clase
  if (!configura.classList.contains("openConfig")) {
    // Borra cualquiera que tenga esa clase
    document.querySelectorAll('.openConfig').forEach(el => el.classList.remove('openConfig'));
    // Añade la clase
    configura.classList.add("openConfig");
    // Activa el evento
    content.addEventListener("mouseleave", cerrarConfig);
  } else {
    // Si ya tiene la clase, simplemente borra cualquiera que tenga esa clase
    configura.classList.remove("openConfig");
    // Desactiva el evento
    content.removeEventListener("mouseleave", cerrarConfig);
  }
}



/*
-----------------------------------------
Ventana emergente
-----------------------------------------
*/
let marcador = ""; // Añadir seleccion
function openTap(element, tipo) {
  document.querySelector("#menuTap").classList.add(tipo, "active");
  marcador = element.closest(".content"); // Declarar elemento

  // Cierra el menu de la seccion
  // Borra cualquiera que contenga esa clase
  document.querySelectorAll('.openConfig').forEach(function (elementoConClase) {
    elementoConClase.classList.remove('openConfig');
  });
  // Desactiva el evento
  document.removeEventListener("click", cerrarConfig);


  if (tipo === "Contenido") {
    // Lee su data-info
    const infoRaw = marcador.getAttribute("data-info");
    let info;
    try {info = JSON.parse(infoRaw);}
    catch (e) {console.error("Data-info inválido:", infoRaw); return;}

    // Formulario
    const form = document.querySelector("#menuTap > div.ContenidoTap > div.info form");

    // Ahora puedes usar info.tipo o info.contenido
    switch (info.tipo) {
      case "titulo":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de titulo";
        const titulo = marcador.querySelector(".contenido h1, .contenido h2, .contenido h3, .contenido h4, .contenido h5");

        // Creamos un array de 5 cadenas vacías y marcamos la posición adecuada
        const actives = Array(5).fill("");
        actives[parseInt(titulo.tagName[1], 10) - 1] = "checked";
        form.className = "form_titulo";
        form.innerHTML = `
          <label for="nivel">Elije el nivel:</label>
          <div id="selector-nivel">
            <input type="radio" name="nivel" id="rh1" value="h1" ${actives[0]}><label for="rh1">H1</label>
            <input type="radio" name="nivel" id="rh2" value="h2" ${actives[1]}><label for="rh2">H2</label>
            <input type="radio" name="nivel" id="rh3" value="h3" ${actives[2]}><label for="rh3">H3</label>
            <input type="radio" name="nivel" id="rh4" value="h4" ${actives[3]}><label for="rh4">H4</label>
            <input type="radio" name="nivel" id="rh5" value="h5" ${actives[4]}><label for="rh5">H5</label>
          </div>`;
        break;
      case "tabla":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de tabla";
        form.className = "form_tabla";
        form.innerHTML = `
          <label for="cols">
            <span>Nº Columnas: </span>
            <div class="numero">
              <label for="cols" class="decrement" onclick="decrementValue(this)"><i class="plus"></i></label>
              <input id="cols" name="cols" type="number" min="1" max="999" value="${marcador.querySelector('.contenido table')?.rows[0]?.cells.length || 0}">
              <label for="cols" class="increment" onclick="incrementValue(this)"><i class="minus"></i></label>
            </div>
          </label>
          <label for="rows">
            <span>Nº Filas: </span>
            <div class="numero">
              <label for="rows" class="decrement" onclick="decrementValue(this)"><i class="plus"></i></label>
              <input id="rows" name="rows" type="number" min="1" max="999" value="${marcador.querySelector('.contenido table')?.rows.length || 0}">
              <label for="rows" class="increment" onclick="incrementValue(this)"><i class="minus"></i></label>
            </div>
          </label>`;
        break;
      case "iframe":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de iframe";
        console.log("Tipo iframe:", info.contenido);
        form.className = "form_iframe";
        form.innerHTML = `
        <div>
          <label for="iframe-url">URL del iframe:</label>
          <input type="text" id="iframe-url" name="iframe-url" placeholder="https://ejemplo.com" value="${info.contenido}"/>
        </div>
        <div>
          <select id="loading-select" name="loading">
            <option value="" ${info.loading === "" ? "selected" : ""}>Sin atributo</option>
            <option value="lazy" ${info.loading === "lazy" ? "selected" : ""}>lazy</option>
            <option value="eager" ${info.loading === "eager" ? "selected" : ""}>eager</option>
          </select>
          <label for="loading-select">loading="..." – Carga diferida</label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="allowfullscreen" ${ info["allowfullscreen"] ? "checked" : "" } />
            allowfullscreen – Permite ver en pantalla completa
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="allow-scripts" ${ info["allow-scripts"] ? "checked" : "" } />
            allow-scripts – Permite la ejecución de scripts
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="allow-forms" ${ info["allow-forms"] ? "checked" : "" } />
            allow-forms – Permite el envío de formularios
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="allow-same-origin" ${ info["allow-same-origin"] ? "checked" : "" } />
            allow-same-origin – Trata el contenido como del mismo origen
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="allow-popups" ${ info["allow-popups"] ? "checked" : "" } />
            allow-popups – Permite abrir ventanas emergentes (popup)
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="allow-presentation" ${ info["allow-presentation"] ? "checked" : "" } />
            allow-presentation – Permite presentaciones (por ejemplo, en pantalla completa)
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="allow-modals" ${ info["allow-modals"] ? "checked" : "" } />
            allow-modals – Permite mostrar cuadros modales
          </label>
        </div>`;
        break;
      case "imagen":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de imagen";
        console.log("Tipo iframe:", info.contenido);
        form.className = "form_imagen form_multimedia";
        form.innerHTML = `
          <div>
            <label for="img-url">URL de la imagen</label>
            <input type="text" id="img-url" name="img-url" placeholder="https://ejemplo.com/img.jpg" value="" />
          </div>

          <div>
            <label for="img-ruta">Ruta relativa del archivo</label>
            <input type="text" id="img-ruta" name="img-ruta" placeholder="./carpeta/img.jpg" value="" />
          </div>

          <div>
            <p><strong>Base64</strong> (evita su uso intensivo para no saturar la memoria)</p>
            <label class="base64">
              <input type="file" id="archivo" name="archivo" accept="image/*" />
              <i class="upload64"></i>
              <span class="text">Subir archivo</span>
            </label>
            <textarea id="base64-textarea" name="base64" rows="4" placeholder="data:image/png;base64,..."></textarea>

          </div>`;
        break;
      case "audio":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de audio";
        console.log("Tipo iframe:", info.contenido);
        form.className = "form_audio form_multimedia";
        form.innerHTML = `
          <div>
            <label for="img-url">URL de la imagen</label>
            <input type="text" id="img-url" name="img-url" placeholder="https://ejemplo.com/img.jpg" value="" />
          </div>

          <div>
            <label for="img-ruta">Ruta relativa del archivo</label>
            <input type="text" id="img-ruta" name="img-ruta" placeholder="./carpeta/img.jpg" value="" />
          </div>

          <div>
            <p><strong>Base64</strong> (evita su uso intensivo para no saturar la memoria)</p>
            <label class="base64">
              <input type="file" id="archivo" name="archivo" accept="image/*" />
              <i class="upload64"></i>
              <span class="text">Subir archivo</span>
            </label>
            <textarea id="base64-textarea" name="base64" rows="4" placeholder="data:image/png;base64,..."></textarea>

          </div>`;
        break;
      case "video":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de video";
        console.log("Tipo iframe:", info.contenido);
        form.className = "form_video form_multimedia";
        form.innerHTML = `
          <div>
            <label for="img-url">URL de la imagen</label>
            <input type="text" id="img-url" name="img-url" placeholder="https://ejemplo.com/img.jpg" value="" />
          </div>

          <div>
            <label for="img-ruta">Ruta relativa del archivo</label>
            <input type="text" id="img-ruta" name="img-ruta" placeholder="./carpeta/img.jpg" value="" />
          </div>

          <div>
            <p><strong>Base64</strong> (evita su uso intensivo para no saturar la memoria)</p>
            <label class="base64">
              <input type="file" id="archivo" name="archivo" accept="image/*" />
              <i class="upload64"></i>
              <span class="text">Subir archivo</span>
            </label>
            <textarea id="base64-textarea" name="base64" rows="4" placeholder="data:image/png;base64,..."></textarea>

          </div>`;
        break;
      case "code":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de code";
        console.log("Tipo iframe:", info.contenido);
        form.className = "form_code";
        form.innerHTML = `
          <label for="lenguaje">Lenguaje de programación:</label>
          <div id="selector-lenguaje">
            <input type="text" id="lenguaje" name="lenguaje" placeholder="Escribe el lenguaje (ej. javascript)" autocomplete="off" onblur="validarLenguaje(this.value)" />
            <a href="https://highlightjs.readthedocs.io/en/latest/supported-languages.html" target="_blank" rel="noopener noreferrer" style="margin-left:8px; font-size:0.9em;">Ver lenguajes disponibles</a>
          </div>
        </div>`;
        break;
      case "custom":
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de custom";
        console.log("Tipo iframe:", info.contenido);
        form.className = "form_custom";
        form.innerHTML = `
        <div class="campo-custom">
          <label for="customCode">Código personalizado</label>
          <textarea id="customCode" name="customCode" rows="10" placeholder="Introduce aquí tu código...">&lt;/&gt;</textarea>
        </div>`;
        break;
      default:
        document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración no encontrada";
        form.className = "";
        form.innerHTML = "No se reconoce el tipo del elemento";
        break;
    }
    form.innerHTML += `
      <div class="accion">
      <button class="" type="button" onclick="closeTap(this)">Cancelar</button>
      <button class="" type="button" onclick="AccionContenidoTap(event); closeTap(this)">Aplicar</button>
      </div>`;
  }
}
function closeTap(element) {
  element.closest("#menuTap").className = "";
  marcador = ""; // Desdeclarar elemento
}



/*
-----------------------------------------
Funciones de contenido
-----------------------------------------
*/
// Cambiar titulo
function AccionContenidoTap(event) {
  const form = event.target.closest('form'); // El formulario que lanzó el evento
  const data = new FormData(form); // Objeto con los datos del formulario

  // Cambiar contenido de marcador, el data-info
  // Lee su data-info
  const infoRaw = marcador.getAttribute("data-info");
  let info;
  try {info = JSON.parse(infoRaw);}
  catch (e) {console.error("Data-info inválido:", infoRaw); return;}

  // Ahora puedes usar info.tipo o info.contenido
  switch (info.tipo) {
    case "titulo":
      const nivel = data.get("nivel"); // Obtener el valor del campo "nivel"

      console.log("Nivel seleccionado:", nivel);
      console.log("Elemento marcador:", marcador);
    
      // Cambiar contenido en data-info

      // Cambiar contenido

      UpdateTitulos(); // Actualiza el menu de titulos
      break;
    case "tabla":
      break;
    case "iframe":
      break;
    case "imagen":
      break;
    case "audio":
      break;
    case "video":
      break;
    case "code":
      break;
    case "custom":
      break;
    case "custom":
      break;
    default:
      break;
  }  
}

/* Funcionalidad botones para input numerico */
function decrementValue(button) {
  const input = button.nextElementSibling;
  if (parseInt(input.value) > parseInt(input.min)) {
    input.value = parseInt(input.value) - 1;
  }
}
function incrementValue(button) {
  const input = button.previousElementSibling;
  if (input.value === '') {
    input.value = parseInt(input.min);
  } else if (parseInt(input.value) < parseInt(input.max)) {
    input.value = parseInt(input.value) + 1;
  }
}



/*
-----------------------------------------
Añadir content
-----------------------------------------
*/
function addContent(ContTipo) {
  switch (ContTipo) {
    case "col11":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion columnas columnas11">`+content_texto+content_texto+`</div>`);
      break;
    case "col21":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion columnas columnas21">`+content_texto+content_texto+`</div>`);
      break;
    case "col12":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion columnas columnas12">`+content_texto+content_texto+`</div>`);
      break;
    case "col111":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion columnas columnas111">`+content_texto+content_texto+content_texto+`</div>`);
      break;
    case "col112":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion columnas columnas112">`+content_texto+content_texto+content_texto+`</div>`);
      break;
    case "col121":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion columnas columnas121">`+content_texto+content_texto+content_texto+`</div>`);
      break;
    case "col211":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion columnas columnas211">`+content_texto+content_texto+content_texto+`</div>`);
      break;
    case "titulo":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_titulo+`</div>`);
      UpdateTitulos();
      break;
    case "texto":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_texto+`</div>`);
      break;
    case "desplegable":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_desplegable+`</div>`);
      break;
    case "tabla":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_tabla+`</div>`);
      break;
    case "iframe":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_iframe+`</div>`);
      break;
    case "imagen":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_imagen+`</div>`);
      break;
    case "audio":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_audio+`</div>`);
      break;
    case "video":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_video+`</div>`);
      break;
    case "codigo":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_code+`</div>`);
      hljs.highlightAll();
      break;
    case "custom":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_custom+`</div>`);
      break;
  }
  closeTap(document.querySelector("#menuTap"));
}



/*
-----------------------------------------
Borrar content
-----------------------------------------
*/
function delContent(element) {
  // Borrar elemento padre .content
  element.closest(".content").remove();
  // Función comprobación
  testContenedor();
}



/*
-----------------------------------------
Borrar content
-----------------------------------------
*/
function delContent(element) {
  // Borrar elemento padre .content
  element.closest(".content").remove();
  // Función comprobación
  testContenedor();
}



/*
-----------------------------------------
Limpiar content
-----------------------------------------
*/
function limpiarContenido0(editor) {
  // Obtén el contenido del editor
  var contenido = editor.innerHTML;
  // Elimina cualquier etiqueta HTML que no sea de formato de línea
  contenido = contenido.replace(/<(?!br\s*\/?)[^>]+>/g, '');
  // Establece el contenido limpio en el editor
  editor.innerHTML = contenido;
}



/*
-----------------------------------------
Elemento desplegable
-----------------------------------------
*/
function desplegar(element) {
  // Selecciona el .titulo
  const titulo = element.parentElement;
  // Añadir o quitar la clase "active"
  titulo.classList.toggle("active");
  // Selecciona el .desplegado
  const desplegable = titulo.parentElement.querySelector(".desplegado");

  if (titulo.classList.contains('active')) {
    desplegable.style.maxHeight = desplegable.scrollHeight + 'px';
    setTimeout(() => {
      desplegable.style.overflow = 'visible';
      desplegable.style.maxHeight = 'max-content';
    }, 500); // Retraso de 0.5 segundos
  } else {
    desplegable.style.maxHeight = desplegable.scrollHeight + 'px';
    desplegable.style.overflow = 'hidden';
    setTimeout(() => {
      desplegable.style.maxHeight = 0;
    }, 1); // Retraso de 0.001 segundos
  }
}



/*
-----------------------------------------
Actualizar titulos
-----------------------------------------
*/
function UpdateTitulos() {
  document.getElementById("indice").innerHTML = "";
  document.querySelectorAll("#conten .content.titulo .contenido > :not(div)").forEach(function(elemento, indice) {
    elemento.parentElement.querySelector("div").id = elemento.tagName+"_"+indice;
    document.querySelector("#indice").innerHTML += `<a href="#`+elemento.tagName+`_`+indice+`" class="`+elemento.tagName+`">`+elemento.textContent+`</a>`;
  });
}
// Ejecuta UpdateTitulos() cuando el DOM haya sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {UpdateTitulos();});



/*
-----------------------------------------
Editor de texto
-----------------------------------------
*/
// Evento que detecta la selección (Cambia el estilo de .menuopciones según estado)
function actualizarBotonesFormato() {
  // Negro
  document.querySelector('.menuEdicion #negro').classList.toggle('activo', document.queryCommandState('bold'));
  // Cursiva
  document.querySelector('.menuEdicion #cursiva').classList.toggle('activo', document.queryCommandState('italic'));
  // Tachar
  document.querySelector('.menuEdicion #tachar').classList.toggle('activo', document.queryCommandState('strikeThrough'));
  // Subrayar
  document.querySelector('.menuEdicion #subrayar').classList.toggle('activo', document.queryCommandState('underline'));
  // Superíndice
  document.querySelector('.menuEdicion #superindice').classList.toggle('activo', document.queryCommandState('superscript'));
  // Subíndice
  document.querySelector('.menuEdicion #subindice').classList.toggle('activo', document.queryCommandState('subscript'));
  // Alinear a la izquierda
  document.querySelector('.menuEdicion #izquierda').classList.toggle('activo', document.queryCommandState('justifyLeft'));
  // Alinear al centro
  document.querySelector('.menuEdicion #centro').classList.toggle('activo', document.queryCommandState('justifyCenter'));
  // Alinear a la derecha
  document.querySelector('.menuEdicion #derecha').classList.toggle('activo', document.queryCommandState('justifyRight'));
  // Justificar texto
  document.querySelector('.menuEdicion #justificar').classList.toggle('activo', document.queryCommandState('justifyFull'));
  // Lista con viñeta
  document.querySelector('.menuEdicion #lista-viñeta').classList.toggle('activo', document.queryCommandState('insertUnorderedList'));
  // Lista con numerada
  document.querySelector('.menuEdicion #lista-numerada').classList.toggle('activo', document.queryCommandState('insertOrderedList'));
  // Enlace
  document.querySelector('.menuEdicion #enlaces').classList.toggle('activo', window.getSelection().anchorNode.parentElement.tagName === "A");
  // Color de texto
  document.querySelector('.menuEdicion #color-texto').style.background = document.queryCommandValue('foreColor');
  // Resaltar texto
  document.querySelector('.menuEdicion #color-resaltar').style.background = document.queryCommandValue('backColor');
}

// Detectar posición selección en content
function aplicarFormato(formato) {
  document.execCommand(formato, false, null);
  actualizarBotonesFormato();
}
function cambiarColor(formato, color) {
  document.execCommand(formato, false, color);
  actualizarBotonesFormato();
}
function insertarEnlace() {
  let selection = window.getSelection();
  let existingLink = selection.anchorNode.parentElement.tagName === "A" ? selection.anchorNode.parentElement : null;
  if (existingLink) {
    if (confirm("¿Quieres eliminar el enlace?")) {document.execCommand("unlink", false, null);}
  } else {
    let url = prompt("Por favor, introduce la URL del enlace:", "http://");
    if (url) {document.execCommand("createLink", false, url);}
  }
  actualizarBotonesFormato();
}



/*
-----------------------------------------
Añadir y elimiar tabs
-----------------------------------------
*/
function manejarTab(event, element) {
  if (event.key === "Tab" && !event.ctrlKey && !event.altKey) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del Tab
    let seleccion = window.getSelection();

    // Mayus+Tab (Quitar espacios de la primera linea)
    if (event.key === "Tab" && event.shiftKey) {
      
      let inicio = 0;
      const rango = seleccion.getRangeAt(0);
      let nuevoContenido = "";
      let NewRang = document.createRange();
      let NewRangoStart, NewRangoEnd, countSpace = 0;
      
      // Recorrer lineas
      document.activeElement.textContent.split('\n').forEach((linea) => {
        const fin = inicio + linea.length;
        linea=linea.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        // Si parte de la línea está seleccionada
        if ((rango.startOffset <= inicio && inicio <= rango.endOffset) || (inicio <= rango.startOffset && rango.startOffset <= fin) || (rango.startOffset >= inicio && rango.endOffset <= fin) || (inicio >= rango.startOffset && fin <= rango.endOffset)) {
          // Condicional si primera linea es `  `
          if (linea.substring(0, 2) == `  `) {
            nuevoContenido += linea.substring(2)+'\n';
            countSpace -= 2;
          // Revizar espacios contar y borrar
          } else {
            nuevoContenido += linea.replace(/^\s+/, '')+'\n';
            countSpace -= linea.length - linea.replace(/^\s+/, '').length;
          }
          if (!NewRangoStart) {NewRangoStart=inicio;}
          NewRangoEnd=fin+countSpace;
        } else {
          // Conservar las líneas que no cumplen la condición sin modificaciones
          nuevoContenido += linea+'\n';
        }
        inicio = fin + 1;
      });

      // Establecer el nuevo contenido en el elemento
      element.innerHTML = nuevoContenido.slice(0, -1);

      // Establecer el inicio y fin del nuevo rango
      NewRang.setStart(element.firstChild, NewRangoStart);
      NewRang.setEnd(element.firstChild, NewRangoEnd);
      // Limpiar la selección actual antes de agregar el nuevo rango
      seleccion.removeAllRanges();
      // Agregar el nuevo rango a la selección actual
      seleccion.addRange(NewRang);

    } else if (event.key === "Tab") {
      // Verificar si hay varias líneas seleccionadas
      if (!seleccion.isCollapsed ) {

        let inicio = 0;
        const rango = seleccion.getRangeAt(0);
        let nuevoContenido = "";
        let NewRang = document.createRange();
        let NewRangoStart, NewRangoEnd, countSpace = 0;
        
        // Recorrer lineas
        document.activeElement.textContent.split('\n').forEach((linea) => {
          const fin = inicio + linea.length;
          linea=linea.replace(/</g, '&lt;').replace(/>/g, '&gt;')
          // Si parte de la línea está seleccionada
          if ((rango.startOffset <= inicio && inicio <= rango.endOffset) || (inicio <= rango.startOffset && rango.startOffset <= fin) || (rango.startOffset >= inicio && rango.endOffset <= fin) || (inicio >= rango.startOffset && fin <= rango.endOffset)) {
            // Añadir espacio al principio de la línea que cumple la condición
            nuevoContenido += `  `+linea+'\n';
            countSpace += 2;
            if (countSpace == 2) {NewRangoStart=inicio;}
            NewRangoEnd=fin+countSpace;
          } else {
            // Conservar las líneas que no cumplen la condición sin modificaciones
            nuevoContenido += linea+'\n';
          }
          inicio = fin + 1;
        });

        // Establecer el nuevo contenido en el elemento
        element.innerHTML = nuevoContenido.slice(0, -1);

        // Establecer el inicio y fin del nuevo rango
        NewRang.setStart(element.firstChild, NewRangoStart);
        NewRang.setEnd(element.firstChild, NewRangoEnd);
        // Limpiar la selección actual antes de agregar el nuevo rango
        seleccion.removeAllRanges();
        // Agregar el nuevo rango a la selección actual
        seleccion.addRange(NewRang);

      } else {
        // Si no hay varias líneas seleccionadas, simplemente agregar 4 espacios
        document.execCommand('insertHTML', false, '  ');
      }
    }
  }
}