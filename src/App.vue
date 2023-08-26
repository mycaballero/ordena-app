<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="bg-color-gradient">
      <img alt="Vue logo" class="logo" src="@/assets/Fotomiguel.jpg" width="125" height="125" />
    </div>
    <div class="wrapper">
      <HelloWorld msg="Trabajo de Miguel" />
      <nav>
        <RouterLink to="/">Saludo</RouterLink>
        <RouterLink to="/ordener">Ordenar</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  gap: 2px;
  line-height: 1.5;
  max-height: 100vh;
}

.logo{
  border-radius: 50%;
}
.bg-color-gradient  {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 140px;
  background: linear-gradient(to right, #DE94BE, #4A9B9D);
  border-radius: 50%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;

  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
