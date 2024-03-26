<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header class="w-10/12 flex justify-between items-center mx-auto">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <section id="banner" class="w-full pt-[70px] pb-2 lg:h-screen h-full max-h-screen mx-auto flex flex-wrap items-center justify-center">
    <h1 class="uppercase text-[30px] lg:text-4xl 2xl:text-5xl text-center font-bold">Lorem Ipsun <span class="font-light">Dollor Sit</span></h1>
  </section>

</template>
