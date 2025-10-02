/*
-----------------------------------------
Contenidos
-----------------------------------------
*/
const content_conf_ajustes=`
    <div class="conf">
      <i class="add" onclick="openTap(this, 'Add')"></i>
      <i class="drag" ondragstart="iniciarArrastre(event)" draggable="true"></i>
    </div>
    <div class="ajustes">
      <i class="configuracion" onclick="abrirConfig(this)"></i>
      <div class="configura">
        <div onclick="openTap(this, 'Editar')"><i class="edit"></i> Editar</div>
        <div onclick="openTap(this, 'Contenido')"><i class="conte"></i> Contenido</div>
        <div onclick="duplicarContenido(this)"><i class="dup"></i> Duplicar</div>
        <div onclick="delContent(this)"><i class="del"></i> Borrar</div>
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
        <i class="arrow" onclick="desplegar(this)"></i>
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

content_ecuacion=`<div class="columna">
  <div class="content ecuacion" data-info='{"tipo": "ecuacion"}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <div class="math"><span contenteditable="true"></span></div>
      <div id="panel-elementos"></div>
    </div>
  </div>
</div>`,

content_iframe=`<div class="columna">
  <div class="content iframe" data-info='{"tipo": "iframe", "contenido": "", "loading": "", "allowfullscreen":false, "allow-scripts":false, "allow-same-origin":false, "allow-popups":false, "allow-presentation":false, "allow-modals":false}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')">
        <div class="icon"></div>
        <p>Iframe</p>
      </div>
    </div>
  </div>
</div>`,

content_imagen=`<div class="columna">
  <div class="content imagen" data-info='{"tipo": "imagen", "contenido": ""}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')">
        <div class="icon"></div>
        <p>Imagen</p>
      </div>
    </div>
  </div>
</div>`,

content_audio=`<div class="columna">
  <div class="content audio" data-info='{"tipo": "audio", "contenido": ""}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')">
        <div class="icon"></div>
        <p>Audio</p>
      </div>
    </div>
  </div>
</div>`,

content_video=`<div class="columna">
  <div class="content video" data-info='{"tipo": "video", "contenido": ""}'>
    `+content_conf_ajustes+`
    <div class="contenido">
      <!-- Contenido aquí -->
      <div class="preview" onclick="openTap(this, 'Contenido')">
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
<pre><code class="HTML" contenteditable="true" onkeydown="manejarTab(event, this)" onfocus="limpiarContenido0(this)" onblur="limpiarContenido0(this); hljs.highlightElement(this);">&lt;a class="download" id="link1" href="#" download="success.txt"&gt;
  &lt;div class="text"&gt;&lt;span&gt;Download&lt;/span&gt;&lt;/div&gt;
  &lt;div class="icon"&gt;&lt;/div&gt;
&lt;/a&gt;</code></pre>
        <div class="leyenda" contenteditable="true" onblur="limpiarContenido0(this)">
        Respuesta
        </div>
      </div>
    </div>
  </div>
</div>`,

content_custom=`<div class="columna">
  <div class="content custom" data-info='{"tipo": "custom"}'>
    `+content_conf_ajustes+`
    <div class="contenido" onclick="openTap(this, 'Contenido')">
<style>
  #conten .seccion .content.custom .contenido {padding: 20px}
  .content.custom .contenido .preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .content.custom .contenido .preview .icon {
      width: 50px;
      height: 70px;
      opacity: .65;
      margin-bottom: 10px;
      filter: var(--color-icon);
      background-repeat: no-repeat;
      background-position: top left;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpolygon points='256 0 256 128 384 128 256 0'/%3E%3Cpath d='M224,128V0H64C28.7,0,0,28.7,0,64v384c0,35.3,28.7,64,64,64h256c35.3,0,64-28.7,64-64V160h-128c-17.7,0-32-14.3-32-32ZM143.41,395.81c5.25,5.25,5.25,13.77,0,19.02h0c-5.25,5.25-13.77,5.25-19.02,0l-68.65-68.65c-2.8-2.8-4.09-6.52-3.91-10.19-.18-3.66,1.11-7.39,3.91-10.19l68.65-68.65c5.25-5.25,13.77-5.25,19.02,0h0c5.25,5.25,5.25,13.77,0,19.02l-59.81,59.81,59.81,59.81ZM234.26,241.3l-58.73,197.09c-2.12,7.12-9.61,11.17-16.73,9.05-7.12-2.12-11.17-9.61-9.05-16.73l58.73-197.09c2.12-7.12,9.61-11.17,16.73-9.05,7.12,2.12,11.17,9.61,9.05,16.73ZM328.26,325.81c2.8,2.8,4.09,6.52,3.91,10.19.18,3.66-1.11,7.39-3.91,10.19l-68.65,68.65c-5.25,5.25-13.77,5.25-19.02,0h0c-5.25-5.25-5.25-13.77,0-19.02l59.81-59.81-59.81-59.81c-5.25-5.25-5.25-13.77,0-19.02h0c5.25-5.25,13.77-5.25,19.02,0l68.65,68.65Z'/%3E%3C/svg%3E");
  }
</style>
<div class="preview">
  <div class="icon"></div>
  <p>Contenido personalizado</p>
</div>
    </div>
    </div>
  </div>
</div>`

const languages = [{value: '1c', label: '1C'}, {value: '4d', label: '4D'}, {value: 'sap-abap', label: 'ABAP'}, {value: 'abnf', label: 'ABNF'}, {value: 'accesslog', label: 'Accesslogs'}, {value: 'ada', label: 'Ada'}, {value: 'apex', label: 'Apex'}, {value: 'arduino', label: 'Arduino(C++w/Arduinolibs)'}, {value: 'armasm', label: 'ARMassembler'}, {value: 'avrasm', label: 'AVRassembler'}, {value: 'actionscript', label: 'ActionScript'}, {value: 'alan', label: 'AlanIF'}, {value: 'ln', label: 'Alan'}, {value: 'angelscript', label: 'AngelScript'}, {value: 'apache', label: 'Apache'}, {value: 'applescript', label: 'AppleScript'}, {value: 'arcade', label: 'Arcade'}, {value: 'asciidoc', label: 'AsciiDoc'}, {value: 'aspectj', label: 'AspectJ'}, {value: 'autohotkey', label: 'AutoHotkey'}, {value: 'autoit', label: 'AutoIt'}, {value: 'awk', label: 'Awk'}, {value: 'ballerina', label: 'Ballerina'}, {value: 'bash', label: 'Bash'}, {value: 'basic', label: 'Basic'}, {value: 'bbcode', label: 'BBCode'}, {value: 'blade', label: 'Blade(Laravel)'}, {value: 'bnf', label: 'BNF'}, {value: 'bqn', label: 'BQN'}, {value: 'brainfuck', label: 'Brainfuck'}, {value: 'csharp', label: 'C#'}, {value: 'c', label: 'C'}, {value: 'cpp', label: 'C++'}, {value: 'cal', label: 'C/AL'}, {value: 'c3', label: 'C3'}, {value: 'cos', label: 'CacheObjectScript'}, {value: 'candid', label: 'Candid'}, {value: 'cmake', label: 'CMake'}, {value: 'cobol', label: 'COBOL'}, {value: 'coq', label: 'Coq'}, {value: 'csp', label: 'CSP'}, {value: 'css', label: 'CSS'}, {value: 'capnproto', label: 'Cap’nProto'}, {value: 'chaos', label: 'Chaos'}, {value: 'chapel', label: 'Chapel'}, {value: 'cisco', label: 'CiscoCLI'}, {value: 'clojure', label: 'Clojure'}, {value: 'coffeescript', label: 'CoffeeScript'}, {value: 'cpc', label: 'CpcdosC+'}, {value: 'crmsh', label: 'Crmsh'}, {value: 'crystal', label: 'Crystal'}, {value: 'curl', label: 'cURL'}, {value: 'cypher', label: 'Cypher(Neo4j)'}, {value: 'd', label: 'D'}, {value: 'dafny', label: 'Dafny'}, {value: 'dart', label: 'Dart'}, {value: 'dpr', label: 'Delphi'}, {value: 'diff', label: 'Diff'}, {value: 'django', label: 'Django'}, {value: 'dns', label: 'DNSZonefile'}, {value: 'dockerfile', label: 'Dockerfile'}, {value: 'dos', label: 'DOS'}, {value: 'dsconfig', label: 'dsconfig'}, {value: 'dts', label: 'DTS(DeviceTree)'}, {value: 'dust', label: 'Dust'}, {value: 'dylan', label: 'Dylan'}, {value: 'ebnf', label: 'EBNF'}, {value: 'elixir', label: 'Elixir'}, {value: 'elm', label: 'Elm'}, {value: 'erlang', label: 'Erlang'}, {value: 'excel', label: 'Excel'}, {value: 'extempore', label: 'Extempore'}, {value: 'fsharp', label: 'F#'}, {value: 'fix', label: 'FIX'}, {value: 'flix', label: 'Flix'}, {value: 'fortran', label: 'Fortran'}, {value: 'func', label: 'FunC'}, {value: 'gcode', label: 'G-Code'}, {value: 'gams', label: 'Gams'}, {value: 'gauss', label: 'GAUSS'}, {value: 'godot', label: 'GDScript'}, {value: 'gherkin', label: 'Gherkin'}, {value: 'hbs', label: 'GlimmerandEmberJS'}, {value: 'gn', label: 'GNforNinja'}, {value: 'go', label: 'Go'}, {value: 'gf', label: 'GrammaticalFramework'}, {value: 'golo', label: 'Golo'}, {value: 'gradle', label: 'Gradle'}, {value: 'graphql', label: 'GraphQL'}, {value: 'groovy', label: 'Groovy'}, {value: 'gsql', label: 'GSQL'}, {value: 'xml', label: 'HTML, XML'}, {value: 'http', label: 'HTTP'}, {value: 'haml', label: 'Haml'}, {value: 'handlebars', label: 'Handlebars'}, {value: 'haskell', label: 'Haskell'}, {value: 'haxe', label: 'Haxe'}, {value: 'hlsl', label: 'High-levelshaderlanguage'}, {value: 'hy', label: 'Hy'}, {value: 'ini', label: 'Ini, TOML'}, {value: 'inform7', label: 'Inform7'}, {value: 'irpf90', label: 'IRPF90'}, {value: 'iptables', label: 'Iptables'}, {value: 'json', label: 'JSON'}, {value: 'java', label: 'Java'}, {value: 'javascript', label: 'JavaScript'}, {value: 'jolie', label: 'Jolie'}, {value: 'julia', label: 'Julia'}, {value: 'julia-repl', label: 'JuliaREPL'}, {value: 'kotlin', label: 'Kotlin'}, {value: 'tex', label: 'LaTeX'}, {value: 'leaf', label: 'Leaf'}, {value: 'lean', label: 'Lean'}, {value: 'lasso', label: 'Lasso'}, {value: 'less', label: 'Less'}, {value: 'ldif', label: 'LDIF'}, {value: 'lisp', label: 'Lisp'}, {value: 'livecodeserver', label: 'LiveCodeServer'}, {value: 'livescript', label: 'LiveScript'}, {value: 'lookml', label: 'LookML'}, {value: 'lua', label: 'Lua'}, {value: 'macaulay2', label: 'Macaulay2'}, {value: 'makefile', label: 'Makefile'}, {value: 'markdown', label: 'Markdown'}, {value: 'mathematica', label: 'Mathematica'}, {value: 'matlab', label: 'Matlab'}, {value: 'maxima', label: 'Maxima'}, {value: 'mel', label: 'MayaEmbeddedLanguage'}, {value: 'mercury', label: 'Mercury'}, {value: 'mips', label: 'MIPSAssembler'}, {value: 'mint', label: 'Mint'}, {value: 'mirc', label: 'mIRCScriptingLanguage'}, {value: 'mizar', label: 'Mizar'}, {value: 'mkb', label: 'MKB'}, {value: 'mlir', label: 'MLIR'}, {value: 'mojolicious', label: 'Mojolicious'}, {value: 'monkey', label: 'Monkey'}, {value: 'moonscript', label: 'Moonscript'}, {value: 'motoko', label: 'Motoko'}, {value: 'n1ql', label: 'N1QL'}, {value: 'nsis', label: 'NSIS'}, {value: 'never', label: 'Never'}, {value: 'nginx', label: 'Nginx'}, {value: 'nim', label: 'Nim'}, {value: 'nix', label: 'Nix'}, {value: 'oak', label: 'Oak'}, {value: 'ocl', label: 'ObjectConstraintLanguage'}, {value: 'ocaml', label: 'OCaml'}, {value: 'objectivec', label: 'ObjectiveC'}, {value: 'glsl', label: 'OpenGLShadingLanguage'}, {value: 'openscad', label: 'OpenSCAD'}, {value: 'ruleslanguage', label: 'OracleRulesLanguage'}, {value: 'oxygene', label: 'Oxygene'}, {value: 'pf', label: 'PF'}, {value: 'php', label: 'PHP'}, {value: 'papyrus', label: 'Papyrus'}, {value: 'parser3', label: 'Parser3'}, {value: 'perl', label: 'Perl'}, {value: 'pine', label: 'PineScript'}, {value: 'plaintext', label: 'Plaintext'}, {value: 'pony', label: 'Pony'}, {value: 'pgsql', label: 'PostgreSQL&PL/pgSQL'}, {value: 'powershell', label: 'PowerShell'}, {value: 'processing', label: 'Processing'}, {value: 'prolog', label: 'Prolog'}, {value: 'properties', label: 'Properties'}, {value: 'proto', label: 'ProtocolBuffers'}, {value: 'puppet', label: 'Puppet'}, {value: 'python', label: 'Python'}, {value: 'profile', label: 'Pythonprofilerresults'}, {value: 'python-repl', label: 'PythonREPL'}, {value: 'qsharp', label: 'Q#'}, {value: 'k', label: 'Q'}, {value: 'qml', label: 'QML'}, {value: 'r', label: 'R'}, {value: 'cshtml', label: 'RazorCSHTML'}, {value: 'reasonml', label: 'ReasonML'}, {value: 'redbol', label: 'Rebol&Red'}, {value: 'rib', label: 'RenderManRIB'}, {value: 'rsl', label: 'RenderManRSL'}, {value: 'risc', label: 'RiScript'}, {value: 'riscv', label: 'RISC-VAssembly'}, {value: 'graph', label: 'Roboconf'}, {value: 'robot', label: 'RobotFramework'}, {value: 'rpm-specfile', label: 'RPMspecfiles'}, {value: 'ruby', label: 'Ruby'}, {value: 'rust', label: 'Rust'}, {value: 'rvt', label: 'RVTScript'}, {value: 'SAS', label: 'SAS'}, {value: 'scss', label: 'SCSS'}, {value: 'sql', label: 'SQL'}, {value: 'p21', label: 'STEPPart21'}, {value: 'scala', label: 'Scala'}, {value: 'scheme', label: 'Scheme'}, {value: 'scilab', label: 'Scilab'}, {value: 'sfz', label: 'SFZ'}, {value: 'shexc', label: 'ShapeExpressions'}, {value: 'shell', label: 'Shell'}, {value: 'smali', label: 'Smali'}, {value: 'smalltalk', label: 'Smalltalk'}, {value: 'sml', label: 'SML'}, {value: 'solidity', label: 'Solidity'}, {value: 'spl', label: 'SplunkSPL'}, {value: 'stan', label: 'Stan'}, {value: 'stata', label: 'Stata'}, {value: 'iecst', label: 'StructuredText'}, {value: 'stylus', label: 'Stylus'}, {value: 'subunit', label: 'SubUnit'}, {value: 'supercollider', label: 'Supercollider'}, {value: 'svelte', label: 'Svelte'}, {value: 'swift', label: 'Swift'}, {value: 'tcl', label: 'Tcl'}, {value: 'terraform', label: 'Terraform(HCL)'}, {value: 'tap', label: 'TestAnythingProtocol'}, {value: 'thrift', label: 'Thrift'}, {value: 'toit', label: 'Toit'}, {value: 'tp', label: 'TP'}, {value: 'tsql', label: 'Transact-SQL'}, {value: 'twig', label: 'Twig'}, {value: 'typescript', label: 'TypeScript'}, {value: 'unicorn-rails-log', label: 'UnicornRailslog'}, {value: 'vbnet', label: 'VB.Net'}, {value: 'vba', label: 'VBA'}, {value: 'vbscript', label: 'VBScript'}, {value: 'vhdl', label: 'VHDL'}, {value: 'vala', label: 'Vala'}, {value: 'verilog', label: 'Verilog'}, {value: 'vim', label: 'VimScript'}, {value: 'xsharp', label: 'X#'}, {value: 'axapta', label: 'X++'}, {value: 'x86asm', label: 'x86Assembly'}, {value: 'x86asmatt', label: 'x86Assembly(AT&T)'}, {value: 'xl', label: 'XL'}, {value: 'xquery', label: 'XQuery'}, {value: 'yml', label: 'YAML'}, {value: 'zenscript', label: 'ZenScript'}, {value: 'zephir', label: 'Zephir'}];
          


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
async function SaveHTML() {
  await (await (
    await window.showSaveFilePicker({
      suggestedName:(window.location.href.split('/').pop().split('.html')[0] || 'index') + '.html',
      types: [{
        description: 'HTML File',
        accept: { 'text/html': ['.html'] }
      }]
    })
  ).createWritable()).write('<!DOCTYPE html>\n' + document.documentElement.outerHTML)
  .then(w => w.close());
}
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
  // Solo mientras este en modo edicion
  if (document.body.classList.contains('Edit')) {
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
  
  // Función para cerrar al hacer clic fuera
  function clickFuera(e) {
    if (!configura.contains(e.target)) {
      configura.classList.remove("openConfig");
      content.removeEventListener("mouseleave", cerrarConfig);
      document.removeEventListener("click", clickFuera);
    }
  }
  
  // Comprueba si no tiene ya la clase para cuando se pulsa de nuevo
  if (!configura.classList.contains("openConfig")) {
    document.querySelectorAll('.openConfig').forEach(el => el.classList.remove('openConfig')); // Borra cualquiera que tenga esa clase
    configura.classList.add("openConfig"); // Añade la clase
    content.addEventListener("mouseleave", cerrarConfig); // Activa el evento
    document.addEventListener("click", clickFuera);
  } else {
    // Si ya tiene la clase, simplemente borra cualquiera que tenga esa clase
    configura.classList.remove("openConfig"); // Quita la clase
    content.removeEventListener("mouseleave", cerrarConfig); // Desactiva el evento
  }
}



/*
-----------------------------------------
Ventana emergente
-----------------------------------------
*/
let marcador = ""; // Añadir selección
function openTap(element, tipo) {
  // Solo en modo edicion
  if (document.body.classList.contains('Edit')) {

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
        case "titulo":{
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
        }
        case "tabla": {
          document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de tabla";
          form.className = "form_tabla";
          form.innerHTML = `
            <label for="cols">
              <span>Nº Columnas: </span>
              <div class="numero">
                <label for="cols" class="decrement" onclick="decrementValue(this)"><i class="plus"></i></label>
                <input id="cols" name="cols" type="number" min="1" max="999" oninput="validarMinimo(this)" value="${marcador.querySelector('.contenido table')?.rows[0]?.cells.length || 0}">
                <label for="cols" class="increment" onclick="incrementValue(this)"><i class="minus"></i></label>
              </div>
            </label>
            <label for="rows">
              <span>Nº Filas: </span>
              <div class="numero">
                <label for="rows" class="decrement" onclick="decrementValue(this)"><i class="plus"></i></label>
                <input id="rows" name="rows" type="number" min="1" max="999" oninput="validarMinimo(this)" value="${marcador.querySelector('.contenido table')?.rows.length || 0}">
                <label for="rows" class="increment" onclick="incrementValue(this)"><i class="minus"></i></label>
              </div>
            </label>`;
          break;
        }
        case "iframe": {
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
          <div><label><input type="checkbox" name="allowfullscreen" ${ info["allowfullscreen"] ? "checked" : "" } /> allowfullscreen – Permite ver en pantalla completa</label></div>
          <div><label><input type="checkbox" name="allow-scripts" ${ info["allow-scripts"] ? "checked" : "" } /> scripts – Permite la ejecución de scripts</label></div>
          <div><label><input type="checkbox" name="allow-forms" ${ info["allow-forms"] ? "checked" : "" } /> forms – Permite el envío de formularios</label></div>
          <div><label><input type="checkbox" name="allow-same-origin" ${ info["allow-same-origin"] ? "checked" : "" } /> same-origin – Trata el contenido como del mismo origen</label></div>
          <div><label><input type="checkbox" name="allow-popups" ${ info["allow-popups"] ? "checked" : "" } /> popups – Permite abrir ventanas emergentes (popup)</label></div>
          <div><label><input type="checkbox" name="allow-presentation" ${ info["allow-presentation"] ? "checked" : "" } /> presentation – Permite presentaciones (por ejemplo, en pantalla completa)</label></div>
          <div><label><input type="checkbox" name="allow-modals" ${ info["allow-modals"] ? "checked" : "" } /> modals – Permite mostrar cuadros modales</label></div>`;
          break;
        }
        case "imagen": {
          document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de imagen";
          form.className = "form_imagen form_multimedia";
          form.addEventListener("input", formularioModificado);
          form.addEventListener("change", formularioModificado);
          form.innerHTML = `
            <div>
              <label for="img-url">URL del archivo</label>
              <input type="text" id="img-url" name="img-url" placeholder="https://ejemplo.com/img.jpg" value="${info.contenido === "url" ? marcador.querySelector('.contenido img')?.getAttribute('src') || "" : ""}" />
            </div>

            <div>
              <label for="img-ruta">Ruta relativa del archivo</label>
              <input type="text" id="img-ruta" name="img-ruta" placeholder="./carpeta/img.jpg" value="${info.contenido === "ruta" ? marcador.querySelector('.contenido img')?.getAttribute('src') || "" : ""}" />
            </div>

            <div>
              <p>Base64 (No recomendable)</p>
              <div class="control">
                <label class="base64">
                  <input type="file" id="archivo" name="archivo" accept="image/*" onchange="convertirABase64(this)" />
                  <i class="upload64"></i>
                  <span class="text">Subir archivo</span>
                </label>
                <label id="clearForm" style="display: none" onclick="limpiarCampos()">
                  <span class="text">Limpiar</span>
                </label>
              </div>
              <textarea id="base64-textarea" name="base64" rows="4" oninput="verificarPesoBase64(this)" placeholder="data:image/png;base64,...">${info.contenido === "base64" ? marcador.querySelector('.contenido img')?.getAttribute('src') || "" : ""}</textarea>
              <p id="alertaPeso" style="display: none">Superior a 5MB, se recomienda usar otro método.</p>
            </div>`;
          break;
        }
        case "audio": {
          document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de audio";
          form.className = "form_audio form_multimedia";
          form.addEventListener("input", formularioModificado);
          form.addEventListener("change", formularioModificado);
          form.innerHTML = `
            <div>
              <label for="audio-url">URL del audio</label>
              <input type="text" id="audio-url" name="audio-url" placeholder="https://ejemplo.com/audio.mp3" value="${info.contenido === "url" ? marcador.querySelector('.contenido source')?.getAttribute('src') || "" : ""}" />
            </div>

            <div>
              <label for="audio-ruta">Ruta relativa del audio</label>
              <input type="text" id="audio-ruta" name="audio-ruta" placeholder="./carpeta/audio.mp3" value="${info.contenido === "ruta" ? marcador.querySelector('.contenido source')?.getAttribute('src') || "" : ""}" />
            </div>

            <div>
              <p>Base64 (No recomendable)</p>
              <div class="control">
                <label class="base64">
                  <input type="file" id="archivo" name="archivo" accept="audio/*" onchange="convertirABase64(this)" />
                  <i class="upload64"></i>
                  <span class="text">Subir archivo</span>
                </label>
                <label id="clearForm" style="display: none" onclick="limpiarCampos()">
                  <span class="text">Limpiar</span>
                </label>
              </div>
              <textarea id="base64-textarea" name="base64" rows="4" placeholder="data:audio/mp3;base64,...">${info.contenido === "base64" ? marcador.querySelector('.contenido source')?.getAttribute('src') || "" : ""}</textarea>
              <p id="alertaPeso" style="display: none">Superior a 5MB, se recomienda usar otro método.</p>
            </div>`;
          break;
        }
        case "video": {
          document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de video";
          form.className = "form_video form_multimedia";
          form.addEventListener("input", formularioModificado);
          form.addEventListener("change", formularioModificado);
          form.innerHTML = `
            <div>
              <label for="video-url">URL del vídeo</label>
              <input type="text" id="video-url" name="video-url" placeholder="https://ejemplo.com/video.mp4" value="${info.contenido === "url" ? marcador.querySelector('.contenido source')?.getAttribute('src') || "" : ""}" />
            </div>

            <div>
              <label for="video-ruta">Ruta relativa del vídeo</label>
              <input type="text" id="video-ruta" name="video-ruta" placeholder="./carpeta/video.mp4" value="${info.contenido === "ruta" ? marcador.querySelector('.contenido source')?.getAttribute('src') || "" : ""}" />
            </div>

            <div>
              <p>Base64 (No recomendable)</p>
              <div class="control">
                <label class="base64">
                  <input type="file" id="archivo" name="archivo" accept="video/*" onchange="convertirABase64(this)" />
                  <i class="upload64"></i>
                  <span class="text">Subir archivo</span>
                </label>
                <label id="clearForm" style="display: none" onclick="limpiarCampos()">
                  <span class="text">Limpiar</span>
                </label>
              </div>
              <textarea id="base64-textarea" name="base64" rows="4" placeholder="data:video/mp4;base64,...">${info.contenido === "base64" ? marcador.querySelector('.contenido source')?.getAttribute('src') || "" : ""}</textarea>
              <p id="alertaPeso" style="display: none">Superior a 5MB, se recomienda usar otro método.</p>
            </div>`;
          break;
        }
        case "code": {
          document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de code";
          form.className = "form_code";

          const lenguajeSeleccionado = info.lenguaje;
          const opcionesHTML = languages.map(lang => {
            const isChecked = lang.value === lenguajeSeleccionado ? 'checked' : '';
            return `<label><input type="radio" name="language" value="${lang.value}" ${isChecked}>${lang.label}</label>`;
          }).join('');
          const defaultLanguageObject = languages.find(lang => lang.value === lenguajeSeleccionado);
          const defaultLabelText = defaultLanguageObject ? defaultLanguageObject.label : 'HTML, XML';

          form.innerHTML = `
            <label for="lenguaje">Lenguaje de programación:</label>
            <a href="https://highlightjs.readthedocs.io/en/latest/supported-languages.html" target="_blank">Ver lenguajes disponibles</a>
              <div class="view" onclick="toggleDropdown(this)">
                <label for="toggle-menu" class="dropdown-toggle">${defaultLabelText}</label>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
              </div>
              <div class="dropdown-menu">
                <input type="text" placeholder="Buscar..." onkeyup="filterDropdown(this)">
                <div class="radio-options" onchange="selectOptionDelegated(event)">
                  ${opcionesHTML}
                </div>
              </div>
            </div>`;
          break;
        }
        case "custom": {
          document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración de custom";
          form.className = "form_custom";
          form.innerHTML = `
          <div class="campo-custom">
            <label for="customCode">Código personalizado</label>
            <textarea id="customCode" name="customCode" placeholder="Introduce aquí tu código...">${marcador.querySelector('.contenido').innerHTML}</textarea>
          </div>`;
          break;
        }
        default: {
          document.querySelector("#menuTap > div.ContenidoTap > div.barraTitulo > p").textContent = "Configuración no encontrada";
          form.className = "";
          form.innerHTML = "No se reconoce el tipo del elemento";
          break;
        }
      }
      form.innerHTML += `
        <div class="accion">
        <button class="" type="button" onclick="closeTap(this)">Cancelar</button>
        <button class="" type="button" onclick="AccionContenidoTap(this, event)">Aplicar</button>
        </div>`;
    } else if (tipo === "Configuracion") {
      document.getElementById("CustomStyleEdit").value = document.getElementById("CustomStyle").innerHTML;
    }
  }
}
function closeTap(element) {
  element.closest("#menuTap").className = "";
  marcador = ""; // Desdeclarar elemento
  form.removeEventListener("input", formularioModificado);
  form.removeEventListener("change", formularioModificado);
}

/* Funcionalidad botones para input numérico de tabla */
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
function validarMinimo(input) {
  if (parseInt(input.value) < 1 || isNaN(input.value)) {
    input.value = 1;
  }
}

/* Avisa de inserción multiple (URL, Ruta y base64) de multimedia no permitida */
function formularioModificado() {
  const url = document.querySelector('.form_multimedia input[id$="-url"]');
  const ruta = document.querySelector('.form_multimedia input[id$="-ruta"]');
  const base64 = document.getElementById("base64-textarea");
  if (!url || !ruta || !archivo || !base64) return;
  if (url.value.trim() !== "") {
    ruta.style.color = "red";
    base64.style.color = "red";
  } else if (ruta.value.trim() !== "") {
    base64.style.color = "red";
    ruta.style.color = "";
  } else {
    ruta.style.color = "";
    base64.style.color = "";
  }
}
// Pasar archivo a base64
function convertirABase64(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    if (file.size > 26214400) {
      alert("El archivo supera los 25 MB. Selecciona uno más pequeño o referencialo.");
      input.value = ""; // Limpia el campo
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const textarea = document.getElementById('base64-textarea');
      textarea.value = e.target.result;
      verificarPesoBase64(textarea);
      input.value = "";  // Aquí vacías el input file tras copiar
    };
    reader.readAsDataURL(file);
  }
}
// Revizar peso de archivo
function verificarPesoBase64(textarea) {
  document.getElementById('alertaPeso').style.display = Math.ceil(textarea.value.length * 3 / 4) > 5242880 ? 'block' : 'none';
  document.getElementById('clearForm').style.display = textarea.value.trim() ? 'flex' : 'none';
}
// Borrar contenidos
function limpiarCampos() {
  document.getElementById('base64-textarea').value = "";
  const alerta = document.getElementById('alertaPeso');
  if (alerta) alerta.style.display = 'none';
  document.getElementById('clearForm').style.display = 'none';
}



/* Desplegable para seleccion de lenguje de programacion */
function toggleDropdown(viewElement) {
  if (viewElement.classList.contains('active')) {
    closeDropdown(viewElement);
  } else {
	viewElement.classList.add('active');
	function outsideClickListener(e) {if (!viewElement.contains(e.target) && !viewElement.nextElementSibling.contains(e.target)) {closeDropdown(viewElement);}}
    viewElement.parentElement._outsideClick = outsideClickListener;
	document.addEventListener('click', outsideClickListener);
  }
}
function closeDropdown(viewElement) {
  const container = viewElement.parentElement;
  const input = viewElement.nextElementSibling.querySelector('input[type="text"]');
  viewElement.classList.remove('active');
  input.value = '';
  filterDropdown(input);
  if (container._outsideClick) {
    document.removeEventListener('click', container._outsideClick);
    container._outsideClick = null;
  }
}
function selectOptionDelegated(event) {
  const target = event.target;
  if (target.checked) {
    const view = target.closest('.dropdown-menu').previousElementSibling;
    view.querySelector('.dropdown-toggle').textContent = target.parentElement.textContent.trim();
    closeDropdown(view);
  }
}
function filterDropdown(input) {
  input.nextElementSibling.querySelectorAll('label').forEach(label => {
    label.style.display = label.textContent.toLowerCase().includes(input.value.toLowerCase()) ? '' : 'none';
  });
}





/*
-----------------------------------------
Funciones de contenido
-----------------------------------------
*/
// Cambiar titulo
function AccionContenidoTap(boton, event) {
  const contenidoDiv = marcador.querySelector(".contenido");
  const form = event.target.closest('form'); // El formulario que lanzó el evento
  const data = new FormData(form); // Objeto con los datos del formulario

  // Lee su data-info
  let info;
  try {info = JSON.parse(marcador.getAttribute("data-info"));}
  catch (e) {console.error("Data-info inválido:", marcador.getAttribute("data-info")); return;}

  // Ahora puedes usar info.tipo o info.contenido
  switch (info.tipo) {
    case "titulo": {
      const nivel = data.get("nivel"); // Obtener el valor del campo "nivel"
      const encabezadoActual = contenidoDiv.querySelector("h1, h2, h3, h4, h5, h6");

      // Actualizar data-info (solo número)
      info.nivel = nivel.replace("h", "");
      marcador.setAttribute("data-info", JSON.stringify(info));

      // Crear nuevo encabezado
      const texto = encabezadoActual.textContent;
      const nuevoEncabezado = document.createElement(nivel);
      nuevoEncabezado.contentEditable = "true";
      nuevoEncabezado.onmouseup = actualizarBotonesFormato;
      nuevoEncabezado.onkeyup = UpdateTitulos;
      nuevoEncabezado.textContent = texto;
      contenidoDiv.replaceChild(nuevoEncabezado, encabezadoActual);

      UpdateTitulos();
      break;
    }
    case "tabla": {
      const cols = data.get("cols"); // Obtener numero de columnas
      const rows = data.get("rows"); // Obtener numero de filas
      const tbody = contenidoDiv.querySelector("table tbody");

      // Ajustar filas
      while (tbody.rows.length < rows) {
        const fila = tbody.insertRow();
        for (let c = 0; c < cols; c++) {
          const celda = fila.insertCell();
          celda.contentEditable = "true";
          celda.onmouseup = actualizarBotonesFormato;
        }
      }
      while (tbody.rows.length > rows) tbody.deleteRow(-1);

      // Ajustar columnas
      for (const fila of tbody.rows) {
        while (fila.cells.length < cols) {
          const celda = fila.insertCell();
          celda.contentEditable = "true";
          celda.onmouseup = actualizarBotonesFormato;
        }
        while (fila.cells.length > cols) fila.deleteCell(-1);
      }
      break;
    }
    case "iframe": {
      const url = data.get("iframe-url")?.trim();
      if (!url) {
        info.contenido = "";
        contenidoDiv.innerHTML = `<div class="preview" onclick="openTap(this, 'Contenido')"><div class="icon"></div><p>Iframe</p></div>`;
      } else {
        try { new URL(url); } catch { alert("La URL proporcionada no es válida."); return; }
        info.contenido = url;
        ["loading", "allowfullscreen", "allow-scripts", "allow-forms", "allow-same-origin", "allow-popups", "allow-presentation", "allow-modals"].forEach(k => info[k] = data.get(k) === "true" ? true : data.get(k) || "");
        const iframe = document.createElement("iframe");
        iframe.src = url;
        if (info.loading) iframe.loading = info.loading;
        if (info.allowfullscreen) iframe.setAttribute("allowfullscreen", "");
        const permisos = [info["allow-scripts"] && "scripts", info["allow-forms"] && "forms", info["allow-same-origin"] && "same-origin", info["allow-popups"] && "popups", info["allow-presentation"] && "presentation", info["allow-modals"] && "modals"].filter(Boolean).join("; ");
        if (permisos) iframe.setAttribute("allow", permisos);
        contenidoDiv.innerHTML = ""; contenidoDiv.appendChild(iframe);
      }
      marcador.setAttribute("data-info", JSON.stringify(info));
      break;
    }
    case "imagen": {
      const tipo = ["url", "ruta", "base64"].find(t => data.get("img-" + t));
      info.contenido = tipo || "";
      marcador.setAttribute("data-info", JSON.stringify(info));
      contenidoDiv.innerHTML = tipo
        ? `<img src="${tipo === "base64" ? data.get("base64") : data.get("img-" + tipo)}">`
        : `<div class="preview" onclick="openTap(this,'Contenido')"><div class="icon"></div><p>Imagen</p></div>`;
      break;
    }
    case "audio": {
      const tipo = ["url", "ruta", "base64"].find(t => data.get("audio-" + t));
      info.contenido = tipo || "";
      marcador.setAttribute("data-info", JSON.stringify(info));
      contenidoDiv.innerHTML = tipo
        ? `<audio controls><source src="${tipo === "base64" ? data.get("base64") : data.get("audio-" + tipo)}" type="audio/mpeg"></audio>`
        : `<div class="preview" onclick="openTap(this,'Contenido')"><div class="icon"></div><p>Audio</p></div>`;
      break;
    }
    case "video": {
      const tipo = ["url", "ruta", "base64"].find(t => data.get("video-" + t));
      info.contenido = tipo || "";
      marcador.setAttribute("data-info", JSON.stringify(info));
      contenidoDiv.innerHTML = tipo
        ? `<video controls><source src="${tipo === "base64" ? data.get("base64") : data.get("video-" + tipo)}" type="video/mp4"></video>`
        : `<div class="preview" onclick="openTap(this,'Contenido')"><div class="icon"></div><p>Video</p></div>`;
      break;
    }
    case "code": {
      const lang = data.get("language") || "html";
      info.lenguaje = lang;
      marcador.setAttribute("data-info", JSON.stringify(info));
      const bloque = contenidoDiv.querySelector(".Codigo");
      const label = (languages.find(l => l.value === lang) || {}).label || lang.toUpperCase();
      bloque.querySelector(".titulo").textContent = `Código ${label}`;
      const codeEl = bloque.querySelector("code");
      codeEl.className = lang;
      hljs.highlightElement(codeEl);
      break;
    }
    case "custom": {
      contenidoDiv.innerHTML = data.get("customCode");
      break;
    }
  }
  closeTap(boton);
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
    case "ecuacion":
      marcador.closest('.seccion').insertAdjacentHTML('afterend', `<div class="seccion">`+content_ecuacion+`</div>`);
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
Duplicar content
-----------------------------------------
*/
function duplicarContenido(elemento) {
  const original = elemento.closest(".content");
  const copia = original.cloneNode(true);
  original.parentNode.insertBefore(copia, original.nextSibling);
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
  // Bloquear menu de edicion
  document.querySelector('#menuEdicion').classList.add('oculto');
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
  const menuEdicion = document.getElementById('menuEdicion')
  // Mostrar editor de texto
  menuEdicion.classList.remove('oculto');
  // Negro
  menuEdicion.querySelector('#negro').classList.toggle('activo', document.queryCommandState('bold'));
  // Cursiva
  menuEdicion.querySelector('#cursiva').classList.toggle('activo', document.queryCommandState('italic'));
  // Tachar
  menuEdicion.querySelector('#tachar').classList.toggle('activo', document.queryCommandState('strikeThrough'));
  // Subrayar
  menuEdicion.querySelector('#subrayar').classList.toggle('activo', document.queryCommandState('underline'));
  // Superíndice
  menuEdicion.querySelector('#superindice').classList.toggle('activo', document.queryCommandState('superscript'));
  // Subíndice
  menuEdicion.querySelector('#subindice').classList.toggle('activo', document.queryCommandState('subscript'));
  // Alinear a la izquierda
  menuEdicion.querySelector('#izquierda').classList.toggle('activo', document.queryCommandState('justifyLeft'));
  // Alinear al centro
  menuEdicion.querySelector('#centro').classList.toggle('activo', document.queryCommandState('justifyCenter'));
  // Alinear a la derecha
  menuEdicion.querySelector('#derecha').classList.toggle('activo', document.queryCommandState('justifyRight'));
  // Justificar texto
  menuEdicion.querySelector('#justificar').classList.toggle('activo', document.queryCommandState('justifyFull'));
  // Lista con viñeta
  menuEdicion.querySelector('#lista-viñeta').classList.toggle('activo', document.queryCommandState('insertUnorderedList'));
  // Lista con numerada
  menuEdicion.querySelector('#lista-numerada').classList.toggle('activo', document.queryCommandState('insertOrderedList'));
  // Enlace
  menuEdicion.querySelector('#enlaces').classList.toggle('activo', window.getSelection().anchorNode.parentElement.tagName === "A");
  // Color de texto
  menuEdicion.querySelector('#color-texto').style.background = document.queryCommandValue('foreColor');
  // Resaltar texto
  menuEdicion.querySelector('#color-resaltar').style.background = document.queryCommandValue('backColor');
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

// Añadir estructura
function insertarEstructuras(tipo) {
  const sel = window.getSelection();
  if (!sel.rangeCount) return;
  const range = sel.getRangeAt(0);

  let html = "";

  switch (tipo) {
    case "fraccion":
      html = `
        <div class="dist dist-fraccion">
          <span contenteditable="true">a</span>
          <span contenteditable="true">b</span>
        </div>`;
      break;

    case "radical":
      html = `
        <div class="dist dist-radical">
          <span contenteditable="true">n</span>
          <span contenteditable="true">X</span>
        </div>`;
      break;

    case "indices":
      html = `
        <div class="dist dist-indices">
          <span contenteditable="true">X</span>
          <div class="indices">
            <span contenteditable="true">c</span>
            <span contenteditable="true">b</span>
          </div>
        </div>`;
      break;

    case "barra":
      html = `
        <div class="dist dist-barra">
          <span contenteditable="true">X</span>
        </div>`;
      break;

    case "acento":
      html = `
        <div class="dist dist-acento">
          <span contenteditable="true">X</span>
        </div>`;
      break;

    case "2-pisos":
      html = `
        <div class="dist dist-2-pisos">
          <span contenteditable="true">lim</span>
          <span contenteditable="true">a → b</span>
        </div>`;
      break;

    case "3-pisos":
      html = `
        <div class="dist dist-3-pisos">
          <span contenteditable="true">a</span>
          <span contenteditable="true">∩</span>
          <span contenteditable="true">b</span>
        </div>`;
      break;
  }

  if (html) {
    // Crear nodo desde el string HTML
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const nodo = temp.firstElementChild;

    // Insertar en la posición del cursor
    range.deleteContents();
    range.insertNode(nodo);

    // Mover cursor después del nodo insertado
    range.setStartAfter(nodo);
    range.setEndAfter(nodo);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

// Incertar caracteres especiales
function insertarCaracter(caracter) {
  const sel = window.getSelection();
  if (!sel.rangeCount) return; // No hay selección

  const range = sel.getRangeAt(0);
  range.deleteContents(); // elimina selección si hay
  range.insertNode(document.createTextNode(caracter));

  // mover el cursor después del caracter insertado
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}






/*
-----------------------------------------
Insertar enlace
-----------------------------------------
*/
let wrapperActual = null; // Elemento temporal con la selección (para editar o deshacer)
let cerrarMenuClickHandler = null; // Función para detectar click fuera y cerrar

const enlaceTrigger = document.getElementById('enlaces'); /* Boton de accion */
const menu = document.getElementById('linkMenu'); /* Ventana de opciones */
const urlInput = document.getElementById('urlInput'); /* Input de URL*/
const btnQuitar = document.getElementById('btnQuitarEnlace'); /* Boton de borrar link */

// Comprueba que el elemento seleccionado sirva para poner enlaces
function comprobarActivacion() {
  // Selección actual
  const sel = window.getSelection();
  // Si no hay selección activa, deshabilita y termina
  if (!sel.rangeCount) {enlaceTrigger.classList.add('disabled'); return;}

  // Nodo común de la selección
  let container = sel.getRangeAt(0).commonAncestorContainer;
  if (container.nodeType === 3) container = container.parentNode;

  // Habilita si está dentro de .contenido y (hay texto seleccionado o está dentro de un enlace)
  if (container.closest('.contenido') && (!sel.isCollapsed || container.closest('a'))) {
    enlaceTrigger.classList.remove('disabled');
  } else {
    enlaceTrigger.classList.add('disabled');
  }
}
// Ejecuta comprobarActivacion en cada cambio de selección (Definir en el cambio de modo para desactivar mientras no esta en modo edicion)
document.addEventListener('selectionchange', comprobarActivacion);

/* Abrir menú y reajustar seleccion */
function abrirMenuEnlace(event) {
  event.preventDefault(); // Evitar acción por defecto del clic
  if (enlaceTrigger.classList.contains('disabled')) return; // Salir si botón deshabilitado

  const sel = window.getSelection(); // Obtener selección actual
  if (!sel.rangeCount) return;       // Salir si no hay selección

  let rango = sel.getRangeAt(0).cloneRange(); // Clonar el rango seleccionado

  // Si cursor dentro de <a> colapsada -> seleccionar todo <a>
  let nodo = rango.startContainer;
  let posibleA = nodo.nodeType === 3 ? nodo.parentElement.closest('a') : nodo.closest('a');
  if (posibleA && sel.isCollapsed) {
    rango = document.createRange();
    rango.selectNodeContents(posibleA);
  }

  // Recortar espacios al inicio
  while (!rango.collapsed && rango.startContainer.nodeType === 3) {
    const text = rango.startContainer.textContent;
    let i = rango.startOffset;
    while (i < text.length && /\s/.test(text[i])) i++;
    if (i !== rango.startOffset) rango.setStart(rango.startContainer, i);
    else break;
  }
  // Recortar espacios al final
  while (!rango.collapsed && rango.endContainer.nodeType === 3) {
    const text = rango.endContainer.textContent;
    let j = rango.endOffset - 1;
    while (j >= 0 && /\s/.test(text[j])) j--;
    if (j + 1 !== rango.endOffset) rango.setEnd(rango.endContainer, j + 1);
    else break;
  }
  if (rango.collapsed) return;

  // Expandir a elementos inline (cualquier elemento con display inline...)
  ['startContainer', 'endContainer'].forEach((prop, idx) => {
    let n = rango[prop];
    if (n.nodeType === 3) n = n.parentElement;
    while (n && n.nodeType === 1) {
      const d = getComputedStyle(n).display;
      if (d && d.startsWith('inline')) {
        if (idx === 0) rango.setStartBefore(n);
        else rango.setEndAfter(n);
        break;
      }
      n = n.parentElement;
    }
  });

  // Aplicar selección y crear wrapper provisional
  sel.removeAllRanges();
  sel.addRange(rango);

  const contenido = rango.extractContents();
  const wrapper = document.createElement('a');
  wrapper.className = 'select';
  wrapper.tabIndex = -1;
  wrapper.appendChild(contenido);
  rango.insertNode(wrapper);
  wrapperActual = wrapper;

  // Posicionar menú y llenar input
  const rect = wrapper.getBoundingClientRect();
  menu.style.top = `${rect.bottom + window.scrollY}px`;
  menu.style.left = `${Math.max(6, rect.left + window.scrollX)}px`;
  menu.style.display = 'flex';
  urlInput.value = (wrapper.querySelector('a') && wrapper.querySelector('a').getAttribute('href')) || '';
  btnQuitar.style.display = 'inline-block';

  // Evento click fuera
  cerrarMenuClickHandler = (e) => {
    if (!menu.contains(e.target) && e.target !== enlaceTrigger &&
        !enlaceTrigger.contains(e.target) && !wrapper.contains(e.target)) {
      abortarOperacion();
    }
  };
  document.addEventListener('click', cerrarMenuClickHandler);
}

/* Abortar: devolver contenido y cerrar */
function abortarOperacion() {
  if (!wrapperActual) { cerrarFormulario(); return; }
  const parent = wrapperActual.parentNode;
  while (wrapperActual.firstChild) parent.insertBefore(wrapperActual.firstChild, wrapperActual);
  parent.removeChild(wrapperActual);
  wrapperActual = null;
  cerrarFormulario();
}

/* Aplicar enlace (convertir wrapper en <a href="...">) */
function aplicarEnlace(event) {
  event.preventDefault();
  if (!wrapperActual) { cerrarFormulario(); return; }

  const url = (urlInput.value || '').trim();
  if (!url) { abortarOperacion(); return; }

  Array.from(wrapperActual.querySelectorAll('a')).forEach(a => {
    while (a.firstChild) a.parentNode.insertBefore(a.firstChild, a);
    a.remove();
  });

  wrapperActual.setAttribute('href', url);
  wrapperActual.setAttribute('target', '_blank');
  wrapperActual.classList.remove('select');

  const sel = window.getSelection();
  const r = document.createRange();
  r.setStartAfter(wrapperActual);
  r.collapse(true);
  sel.removeAllRanges();
  sel.addRange(r);

  wrapperActual = null;
  cerrarFormulario();
}

/* Quitar enlaces dentro del wrapper y devolver contenido */
function quitarEnlaces() {
  if (!wrapperActual) { cerrarFormulario(); return; }

  Array.from(wrapperActual.querySelectorAll('a')).forEach(a => {
    const frag = document.createDocumentFragment();
    while (a.firstChild) frag.appendChild(a.firstChild);
    a.parentNode.replaceChild(frag, a);
  });

  const parent = wrapperActual.parentNode;
  while (wrapperActual.firstChild) parent.insertBefore(wrapperActual.firstChild, wrapperActual);
  parent.removeChild(wrapperActual);

  wrapperActual = null;
  cerrarFormulario();
}

/* Cerrar UI y quitar evento */
function cerrarFormulario() {
  menu.style.display = 'none';
  urlInput.value = '';
  btnQuitar.style.display = 'none';
  if (cerrarMenuClickHandler) {
    document.removeEventListener('click', cerrarMenuClickHandler);
    cerrarMenuClickHandler = null;
  }
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
