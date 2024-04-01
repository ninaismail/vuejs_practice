<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../../assets/AITS.webp'
import logowhite from '../../assets/AITSwhite.webp'
const navlinks = ref([
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'About', to: '/about' },
  { 
    id: 3, 
    name: 'Industries', 
    to: '/industries',
  },
  { 
    id: 4, 
    name: 'Resources', 
    to: '/resources',
    submenu: [
      { id: 1, name: 'Blog' },
      { id: 2, name: 'Whitepapers' },
      { id: 3, name: 'Webinars' },
      { id: 4, name: 'Industry Insights' }
    ]
  },
  { 
    id: 5, 
    name: 'Careers', 
    to: '/careers',
    submenu: [
      { id: 1, name: 'Job Openings' },
      { id: 2, name: 'Internship Opportunities' },
      { id: 3, name: 'Employee Benefits' }
    ]
  },
  { id: 6, name: 'Contact', to: '/contact' }
])

const isOpen = ref(false)
const openSubMenu = ref(null)
const changecolor = ref(false)

const changeColor = () => {
  if (window.scrollY > 10) {
    changecolor.value = true;
  } else {
    changecolor.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", changeColor);
});

onUnmounted(() => {
  window.removeEventListener("scroll", changeColor);
});
</script>

<template>
   <header class="sticky left-0 top-[20px] h-[70px] lg:w-8/12 flex md:justify-center justify-between items-center mx-auto gap-2 px-6 rounded-full md:shadow-sm backdrop-blur-xl" 
   :class="{'bg-accent1' : changecolor, 'bg-bg/10' : !changecolor}">
    <img :src="changecolor ? logowhite : logo" alt="AITS logo" class="h-8" responsive/>
    <!-- Desktop -->
    <nav v-for="(item, key) in navlinks" :key="key" class="relative items-center justify-end hidden w-full gap-6 mx-auto md:flex ps-4">
      <RouterLink :to="item.to" class="text-lg font-bold text-accent1 px-[14px] py-[10px] hover:rounded-full"
        :class="{ 'text-bg hover:bg-[#477CA8]': changecolor, 'hover:bg-gray-100 bg-opacity-10': !changecolor }"
        @mouseenter="openSubMenu = item.id" @mouseleave="openSubMenu = null">
        {{ item.name }}
      </RouterLink>
      <nav v-if="item.submenu && openSubMenu === item.id"
        class="w-full absolute left-1/2 top-[75px] flex flex-col space-y-2 backdrop-blur-sm bg-bg pb-4 shadow-lg rounded-[30px]"
        :class="{ 'text-bg hover:bg-[#477CA8]': changecolor }">
        <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="font-bold text-accent1 text-lg px-[14px] py-[10px]">
          {{ subitem.name }}
        </div>
      </nav>
    </nav>
    <!-- Mobile -->
    <button
      @click="isOpen = !isOpen"
      type="button"
      aria-label="Open the mobile menu"
      class="flex md:hidden text-gray-800hover:text-gray-500 focus:outline-none focus:text-gray-500">
      <svg
        v-if="isOpen"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="hover:scale-110 scale-100 transition-transform text-accent1 text-lg p-4">
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
          fill="#355D83"
        />
      </svg>
    </button>
    <nav v-for="(item, key) in navlinks" :key="key" v-show="isOpen"
    class="w-full md:hidden absolute left-0 top-[70px] flex flex-col ps-4 pb-4 gap-6 bg-white shadow-sm">
      <RouterLink :to="item.to" class="p-2 text-lg font-bold text-accent1">
      {{item.name}}</RouterLink>
    </nav>
  </header>
</template>

