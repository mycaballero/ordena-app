<script setup>
</script>

<template>
<section>
  <h4 class="titulo">Tarea final</h4>
  <p class="subtitulo">
    Instrucciones
  </p>
  <p class="lista">
    <ul>
      <li>Para este ejercicio vaya al apartado de <strong>Ordenar</strong>.</li>
      <li>Seleccione el tipo de algoritmo para ordenar en el menú de algoritmos.</li>
      <li>Seleccione si quiere ordenar un entero o un array</li>
      <li>Escriba el número con la cantidad de dígitos que desee. (si es un <strong>Array</strong> debe añadirlos uno por uno)</li>
      <li>Ejecute la funcion y lea los resultados.</li>
    </ul>
  </p>
  <p class="saludo">
    Muchas gracias porfesor por todo lo aprendido en este curso.
  </p>
  <div class="flex justify-center">
    <RouterLink class="boton" to="/ordener">Ordenar</RouterLink>
  </div>
</section>
</template>
<style>
  section {
    height: 50vh;
  }

  .titulo {
    font-size: 2.4rem;
    font-weight: bold;
  }

  .subtitulo {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .lista {
    margin-bottom: 30px;
  }
  .saludo {
    padding: 0 3rem;
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: bold;
    font-family: sans-serif;
    animation: cambio-color 5s infinite;
  }

  @keyframes cambio-color {
    0% {
      color: #faa0a0;
    }
    25% {
      color: #b0b0ff;
    }
    50% {
      color: #b5ffb5;
    }
    75% {
      color: #ffe0a7;
    }
    100% {
      color: #ff70ff;
    }
  }
</style>