<template>
  <main class="font-Aktifo">
  <header class="fixed inset-0 h-[74px] bg-white md:w-8/12 flex justify-between items-center mx-auto gap-2 p-4">
    <img alt="AITS logo" src="./assets/AITS.webp" width="77" height="26" responsive/>
    <button
      @click="isOpen = !isOpen"
      type="button"
      aria-label="Open the mobile menu"
      class="flex md:hidden text-gray-800hover:text-gray-400 focus:outline-none focus:text-gray-400">
      <svg
        v-if="isOpen"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="hover:scale-110 scale-100 transition-transform">
        <path
          id="xmark-solid"
          d="M19.333,99.341a2,2,0,1,0-2.83-2.83L9.925,103.1,3.341,96.517a2,2,0,0,0-2.83,2.83L7.1,105.925.517,112.509a2,2,0,0,0,2.83,2.83l6.578-6.584,6.584,6.578a2,2,0,0,0,2.83-2.83l-6.584-6.578Z"
          transform="translate(0.074 -95.925)"
          fill="#FF881B"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30">
        <path
          id="bars-solid"
          d="M0,65.429A1.427,1.427,0,0,1,1.429,64H18.571a1.429,1.429,0,1,1,0,2.857H1.429A1.427,1.427,0,0,1,0,65.429Zm0,7.143a1.427,1.427,0,0,1,1.429-1.429H18.571a1.429,1.429,0,0,1,0,2.857H1.429A1.427,1.427,0,0,1,0,72.571Zm20,7.143a1.427,1.427,0,0,1-1.429,1.429H1.429a1.429,1.429,0,1,1,0-2.857H18.571A1.427,1.427,0,0,1,20,79.714Z"
          transform="translate(0 -64)"
          fill=""
        />
      </svg>
    </button>
    <nav v-if="isOpen" class="w-full md:hidden absolute left-0 top-[74px] flex flex-col ps-4 pb-4 gap-6 bg-white shadow-lg">
      <RouterLink to="/" class="text-accent1 font-bold hover:brightness-125 uppercase">Home</RouterLink>
      <RouterLink to="/about" class="text-accent1 font-bold hover:brightness-125 uppercase">About</RouterLink>
      <RouterLink to="/industries" class="text-accent1 font-bold hover:brightness-125 uppercase">Industries</RouterLink>
      <RouterLink to="/resources" class="text-accent1 font-bold hover:brightness-125 uppercase">Resources</RouterLink>
      <RouterLink to="/careers" class="text-accent1 font-bold hover:brightness-125 uppercase">Careers</RouterLink>
      <RouterLink to="/contact" class="text-accent1 font-bold hover:brightness-125 uppercase">Contact</RouterLink>
    </nav>
    <nav class="w-full hidden md:flex items-center mx-auto gap-6">
      <RouterLink to="/" class="text-accent1 font-bold hover:brightness-125 uppercase">Home</RouterLink>
      <RouterLink to="/about" class="text-accent1 font-bold hover:brightness-125 uppercase">About</RouterLink>
      <RouterLink to="/industries" class="text-accent1 font-bold hover:brightness-125 uppercase">Industries</RouterLink>
      <RouterLink to="/resources" class="text-accent1 font-bold hover:brightness-125 uppercase">Resources</RouterLink>
      <RouterLink to="/careers" class="text-accent1 font-bold hover:brightness-125 uppercase">Careers</RouterLink>
      <RouterLink to="/contact" class="text-accent1 font-bold hover:brightness-125 uppercase">Contact</RouterLink>
    </nav>
  </header>

  <RouterView />
  </main>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "App",
  data() {
    return {
      isOpen: false,
    };
  }
}
</script>