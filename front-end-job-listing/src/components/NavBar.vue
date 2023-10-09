<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const router = useRouter();

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;

watch(isAuthenticated, (newValue, oldValue) => {
  console.log('isAuthenticated has changed from', oldValue, 'to', newValue);
}, { immediate: true });

console.log(isAuthenticated);


const logOutUser = () => {
    
    authStore.logOut();
    // isAuthenticated =false;
    router.push('/');
}
</script>

<template>
    <nav class="relative container mx-auto p-6">
        <div class="flex items-center justify-between">
          <img
            src="images/MMCYTechLogo.png"
            class="w-40 object-contain"
            alt=""
          />
          <ul class="hidden md:flex space-x-10 list-none">
              <li><RouterLink class="hover:text-secondary" to="/">Home</RouterLink></li>
              <li><RouterLink class="hover:text-secondary" to="/job-list">Jobs</RouterLink></li>
              <li><RouterLink class="hover:text-secondary" to="/">Locations</RouterLink></li>
              <li><RouterLink class="hover:text-secondary" to="/">Contact Us</RouterLink></li>
              <li><RouterLink class="hover:text-secondary" to="/">Careers</RouterLink></li>
          </ul>
          <div class="hidden md:block md:space-x-3 ">

                <button
                @click="logOutUser"
                v-if="isAuthenticated"
              class="border-2 border-secondary px-3 py-2 rounded-full text-center hover:bg-secondary hover:text-white"
            
              >Log Out</button
            >
                <RouterLink
                v-else
              class="border-2 border-secondary px-3 py-2 rounded-full text-center hover:bg-secondary hover:text-white"
              to="/login"
              >Log In</RouterLink
            >
            
           
            
            <a
              class="border-2 border-secondary bg-secondary px-3 py-2 rounded-full hover:bg-white hover:text-black text-white"
              href="#"
              >Sign Up</a
            >
          </div>

          <!-- Hamburger Icon -->
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="flex flex-col md:hidden">
          <ul
            id="menu"
            class="absolute flex-col items-center self-end hidden rounded-md mt-6 bg-white space-y-0.5 font-bold left-6 right-6 text-center shadow-boxmod"
          >
            <li
              class="py-5 w-full text-center hover:bg-primary text-secondary cursor-pointer"
            >
              <a class="text-center" href="#">Home</a>
            </li>
            <li
              class="py-5 w-full text-center hover:bg-primary text-secondary cursor-pointer"
            >
              <a href="#">Jobs</a>
            </li>
            <li
              class="py-5 w-full text-center hover:bg-primary text-secondary cursor-pointer"
            >
              <a href="#">Locations</a>
            </li>
            <li
              class="py-5 w-full text-center hover:bg-primary text-secondary cursor-pointer"
            >
              <a href="#">Contact Us</a>
            </li>
            <li
              class="py-5 w-full text-center hover:bg-primary text-secondary cursor-pointer"
            >
              <a href="#">Careers</a>
            </li>
            <div class="text-center py-5 hover:bg-primary w-full">
              <a
                class="border-2 border-secondary px-3 py-2 rounded-full text-center hover:bg-secondary hover:text-white"
                href="#"
                >Log In</a
              >
              <a
                class="border-2 border-secondary bg-secondary px-3 py-2 rounded-full hover:bg-white hover:text-black text-white"
                href="#"
                >Sign Up</a
              >
            </div>
          </ul>
        </div>
      </nav>

</template>

