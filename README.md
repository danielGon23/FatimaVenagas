# FatimaVenagas
Esta es la pagina de Fátima America Molina Vegas
<html>
<head>
  <meta charset='utf-8'>
  <meta http-equiv=' X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' conten='width=device-width, initial-scale=1'>
  <link rel="shortcut icon" href="Imagenes/Logo-Ame.png">
  <link rel='stylesheet' href='CSS/Estilos.css'>
  <title>FatimaVenegas</title>
  <link rel="stylesheet" href="Jscript/Java-Fati.js">

  <script src="jquery-1.10.2.min.js"></script>

  <script>
    $(function () {
      var botonv = $("#boton-Videojuego");
      var botonc = $("#boton-Ciencia");
      var botond = $("#boton-Desarrollo");

      var imagen = $("#imgv");
      var imagen1 = $("#imgc");
      var imagen2 = $("#imgd");

      var videojuego = $("#estadov");
      var ciencia = $("#estadoc");
      var desarrollo = $("#estadod");

      var contenedorv = $("#contenedor-v");
      var contenedorc = $("#contenedor-c");
      var contenedord = $("#contenedor-d");

      var num = 1;

      botonv.click(function () {
        contenedorv.fadeOut("slow",
          function () {
            if (videojuego.html() === "True") {
              imagen.attr("src", "imagenes/desarrollo.png");
              videojuego.html("False");
            }
            else {
              imagen.attr("src", "imagenes/videojuegos.png");
              videojuego.html("True");
            }
          }
        );
        contenedorv.fadeIn("slow");

      });
      botonc.click(function () {
        contenedorc.fadeOut("slow",
          function () {
            if (ciencia.html() === "True") {
              imagen1.attr("src", "imagenes/videojuegos.png");
              ciencia.html("False");
            }
            else {
              imagen1.attr("src", "imagenes/ciencia.png");
              ciencia.html("True");
            }
          }
        );
        contenedorc.fadeIn("slow");

      });
      botond.click(function () {
        contenedord.fadeOut("slow",
          function () {
            if (desarrollo.html() === "True") {
              imagen2.attr("src", "imagenes/ciencia.png");
              desarrollo.html("False");
            }
            else {
              imagen2.attr("src", "imagenes/desarrollo.png");
              desarrollo.html("True");
            }
          }
        );
        contenedord.fadeIn("slow");

      });
    });
  </script>


</head>

<body>

  <header>

    <div id="titulo">

      <h1><i>Artesanos del Software</i></h1>

    </div>

    <!--barra de navegacion-->

    <nav id="menu">

      <ul class="menu-barra">
        <li> <a href="https://www.ceupe.com/blog/que-es-la-programacion.html">Inicio</a></li>
        <li> <a href="Galeria.html">Galeria</a> </li>
        <li> <a href="#" id="action">Contacto</a> </li>
        <li> <a href="MAPAS-Fati.html">Ubicacion</a> </li>
      </ul>

    </nav>

  </header>

  <section id="bienvenida">
    <h1><b>PROGRAMAR ES UN ARTE</b></h1>
  </section>
  <div class="bg-modal">
    <div class="modal-content">
      <div class="close">+</div>
      <div class="icon">
        <img src="Imagenes/yo1.jpeg">
      </div>
      <div id="letTam">
        <p><i>Fatima America Molina Venegas</i> </p>
      </div>
      <div id="inter">
        <p> <i> Mi nombre es Fatima America Molina Venegas, soy estudiante de la carrera en Ingeniería en Tecnologías de
            la
            información y comunicación en la Universidad Politécnica del Valle de México y cree está página para que las
            personas que estén interesadas sobre el tema puedan informarse un poco más y pasar un momento agradable.</i>
        </p>
      </div>
    </div>
  </div>
  <script src="Jscript/Java-Fati.js">  </script>

  <section id="nuestros-servicios">

    <div class="servicio">
      <div id="contenedor-v">
        <img id="imgv" src="Imagenes/videojuegos.jpeg">
      </div>
      <p>
        <button id="boton-Videojuego">
          Videojuegos
        </button>
      </p>
      <p id="estadov" class="Transparente">
        True
      </p>

    </div>

    <div class="servicio">
      <div id="contenedor-c">
        <img id="imgc" src="Imagenes/ciencia.jpg">
      </div>
      <p>
        <button id="boton-Ciencia">
          Ciencia
        </button>
      </p>
      <p id="estadoc" class="Transparente">
        True
      </p>
    </div>

    <div class="servicio">
      <div id="contenedor-d">
        <img id="imgd" src="imagenes/desarrollo.png">
      </div>
      <p>
        <button id="boton-Desarrollo">
          Desarrollo
        </button>
      </p>
      <p id="estadod" class="Transparente">
        True
      </p>
    </div>

  </section>

  <section id="conoceme">
    <h3>
      <br>
      UN POCO DE PROGRAMACIÓN
    </h3>
    <div class="mono">
      <video controls="controls">
        <source src="Videos/casoreal.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="mono">
      <video controls="controls">
        <source src="Videos/alcoholimetro.mp4" type="video/mp4" />
      </video>
    </div>
  </section>

  <footer>
    <div id="siguenos">
      <h3>
        Siguenos
      </h3>
      <a href="https://www.facebook.com/"> <img src="Imagenes/Facebook.png" /></a>
      <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox"> <img src="Imagenes/GooglePlus.png" /></a>
      <a href="https://twitter.com/?lang=es"><img src="Imagenes/Twitter.png" /></a>
        <a href="https://github.com/"> <img src="Imagenes/github.png" /></a>
    </div>
    <div id="suscribir">
      <h3>
        Suscribete
      </h3>
      <label>Email: </label>
      <input type="text" />
    </div>
    <div id="powered">
      <h3>Powered by: </h3>
      <ul>
        <li>
          <a href="http://www.w3.org/html/wg/drafts/html/master/">HTML5</a>
        </li>
        <li>
          <a href="http://nodejs.org/">Mode.js</a>
        </li>
        <li>
          <a href="http://nozilla.github.io/nunjucks/">Nunjucks.js</a>
        </li>
        <li>
          <a href="http://github.com/">GitHub</a>
        </li>
        <li>
          <a href="http://jquery.com/">JQuery</a>
        </li>
        <li>
          <a href="https://www.openshift.com/">OpenShift</a>
        </li>
      </ul>
    </div>
  </footer>

</body>

</html>
