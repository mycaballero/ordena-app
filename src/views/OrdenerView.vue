<script setup>
import {ORDENAMIENTO} from "@/contants/ordenamiento"
import {userOrder} from "@/composables/pruebas"
import {ref} from "vue";
  const orderOptions = ORDENAMIENTO
  const number = ref(null)
  const model = ref({
    number: null,
    type: null
  })
  const previo = ref(null)
  const ordenado = ref(null)
  const int = ref(true)
  const ordenar = () => {
    previo.value = model.value.number
    ordenado.value = userOrder(model.value.type?.name, model.value.number)
  }
  const agregaNumero = (numero) => {
    if (!Array.isArray(model.value.number)) {
      model.value.number = []
    }
    if (numero) model.value.number.push(numero)
    number.value = null
  }
  const limpiar = () => {
    model.value = {
      number: null,
      type: null
    }
    number.value = null
    ordenado.value = null
    int.value = true
    previo.value = null
  }
</script>

<template>
  <section class="section">
    <h1 class="w-full">Ordenar</h1>
    <div class="mb-2">
      <div class="mb-2">
        <label>Tipo de Ordenamiento</label>
        <select v-model="model.type">
          <option v-for="option in orderOptions" :key="option" :value="option">{{option.name}}</option>
        </select>
      </div >
      <div class="input mb-2">
        <label>Entero</label>
        <input type="checkbox" v-model="int" @change="model.number = null">
      </div>
      <div v-if="!int" class="input mb-2">
        <label>Agrega número</label>
        <input type="number" placeholder="Número" v-model="number"/>
        <button class="boton pointer aclarar" @click="agregaNumero(number)">+</button>
      </div>
      <div v-else class="input mb-2">
        <label>Número</label>
        <input type="number" placeholder="Número" v-model="model.number"/>
      </div>
      <p v-if="!int" class="mb-2">{{model.number}}</p>
      <div class="flex justify-around mb-2">
        <button class="boton pointer aclarar transition " @click="ordenar">ORDENAR</button>
        <button class="boton pointer borrar transition " @click="limpiar">LIMPLIAR</button>
      </div>
      <div class="container" v-html="model.type?.text"></div>
      <p class="text-center">
        <h3 :class="model.type? '':'text-danger'">
          <span :class="previo? '':'hidden'">{{ 'Antes: ' }}</span>{{ previo }}
        </h3>
        <h3 >
          <span :class="model.number && ordenado? '':'hidden'">{{ 'Ordenado: ' }}</span>{{ ordenado }}
        </h3>
      </p>
    </div>
  </section>
</template>

<style>
  .section {
    min-height: 90vh;
    display: flex;
    flex-wrap: wrap;
  }
  .transition {
    transition: all ease-in-out 0.1s;
  }
  .aclarar:hover {
  background-color: #4A9B9D;
  }
  .borrar:hover {
  background-color: #faa0a0;
  }
  .text-danger {
    color: #faa0a0;
    font-weight: bold;
  }
  .w-full {
    width: 100%;
  }
  .container {
    margin-bottom: 20px;
  }
  .hidden {
    display: none;
  }

  .mb-2 {
    margin-bottom: 10px;
  }
  .text-center {
    text-align: center;
  }
  .justify-around {
    justify-content: space-around;
  }
</style>
