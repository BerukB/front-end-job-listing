<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email as emailValidator } from '@vuelidate/validators';
import axios from 'axios';
import { useAuthStore } from '../stores/authStore'

// const authApi = axios.create({
//     baseURL: 'http://localhost:5000',
//     withCredentials: true,
// });

const email = ref('');
const password = ref('');

const v$ = useVuelidate({
    email: { required, email: emailValidator },
    password: { required },
}, { email, password })


const router = useRouter();

//login user

const logInUser = async () => {
    v$.value.$validate()
    if (!v$.value.$invalid) {
        try {
            const response = await axios.post('http://localhost:5000/auth/users/login', { email: email.value, password: password.value })
           
            const authStore = useAuthStore()
            authStore.logIn({ token: response.data.token, user: response.data.user });
         
            router.push('job-list');
        } catch (error) {
            console.error(error)
           alert(error.response.data.message);
        }

    } else if (v$.value.email.$error) {
        alert('Please enter a valid email')
    } else if (v$.value.password.$error) {
        alert('Password is required')

    };

}
</script>

<template>
    <article class="flex flex-grow items-center ">
        <div class="container mx-auto w-96 p-12 ">
            <form @submit.prevent="logInUser">
                <div class="max-w-sm rounded-3xl bg-gradient-to-b from-primary to-secondary p-px">
                    <div class="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900">
                        <div>
                            <h1 class="text-xl font-semibold text-gray-800 ">Signin to your account</h1>
                            <p class="text-sm tracking-wide text-gray-600 ">Don't have an account ? <RouterLink to="/"
                                    class="text-blue-600 transition duration-200 hover:underline">Signup</RouterLink>
                                for free</p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="space-y-6">
                                <input
                                    class="w-full bg-transparent text-gray-600 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                                    placeholder="Your Email" type="email" v-model="email" name="email" id="email" />

                                <input
                                    class="w-full bg-transparent text-gray-600 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                                    placeholder="Your Password" type="password" v-model="password" name="password"
                                    id="password" />
                            </div>

                            <button type="submit"
                                class="h-9 px-3 w-full bg-secondary hover:bg-orange-600 active:bg-orange-600 focus:bg-orange-600 transition duration-500 rounded-md text-white">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </article>
</template>