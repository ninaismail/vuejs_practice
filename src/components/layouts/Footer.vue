<script setup>
import logo from '../../assets/AITS.webp'
import { RouterLink } from 'vue-router'

const footerlinks = [
{ id: 1, name: 'Home', to: '/' },
{ id: 2, name: 'About', to: '/about' },
{ id: 3, name: 'Industries', to: '/industries' },
{ id: 4, name: 'Resources', to: '/resources' },
{ id: 5, name: 'Careers', to: '/careers' },
{ id: 6, name: 'Contact', to: '/contact' }
];

const pandtlinks = [
{ id: 1, name: 'Privacy Policy', to: '/privacy-policy', target:"_blank" },
{ id: 2, name: 'Terms and Conditions', to: '/terms-and-consitions', target:"_blank" },
];

const sociallinks = [
{ id: 1, name:'Facebook', //icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_257_405)"><path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#32527B"/></g><defs><clipPath id="clip0_257_405"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>, 
to: '/' },
{ id: 2, name:'Twiiter(X)', //icon: '', 
to: '/' },
{ id: 3, name:'Linkedin', //icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_257_411)"><path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#32527B"/></g><defs><clipPath id="clip0_257_411"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>, 
to: '/' }
];

</script>

<template>
    <footer class="bg-bg flex flex-col justify-center items-center gap-2 pt-10 pb-4">
        <div class="space-y-4 w-full text-center">
            <img :src="logo" alt="AITS logo" class="h-8 mx-auto" responsive/>
            <nav class="flex justify-center items-center w-full gap-6 mx-auto">
            <RouterLink v-for="(item, key) in footerlinks" :key="key" :id="go-to-item.name" :to="item.to" class="text-sm font-bold text-accent1 hover:rounded-full">
                {{ item.name }}
            </RouterLink>
            </nav>
            <br class="h-2 text-white w-10/12"/>
            <div class="flex justify-cnter items-center">

            </div>
            <br class="h-2 text-white w-10/12"/>
            
            <div class="w-11/12 rouded-full bg-accent1 text-bg flex justify-between items-center rounded-full mx-auto">
                <nav class="flex justify-center items-center w-full gap-6 mx-auto">
                    <RouterLink v-for="(item, key) in sociallinks" :key="key" :id="go-to-item.name" :to="item.to" class="text-lg font-bold bg-bg text-accent1 p-2 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_257_405)"><path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#32527B"/></g><defs><clipPath id="clip0_257_405"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                    </RouterLink>
                </nav> 
                <p>© 2024 Cyberg Copyright</p>
                <nav class="flex justify-center items-center w-full gap-6 mx-auto">
                    <a v-for="(item, key) in pandtlinks" :key="key" :id="go-to-item.name" :href="item.to" :target="item.target" class="text-lg font-bold p-2 border-l">
                        {{ item.name }}
                    </a>
                </nav> 
            </div>
        </div>
    </footer>
</template>