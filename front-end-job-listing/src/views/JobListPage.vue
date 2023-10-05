<template>

        
<div v-if="isAuthenticated">
  <h1 class="text-3xl font-bold underline">
    List of Jobs!
  </h1>
  <JobCom v-for="job in jobs" :key="job._id" :job="job"/>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
import JobCom from '../components/JobCom.vue'

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;

const jobs = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/jobs");
    jobs.value = response.data.jobs;
  } catch (error) {
    alert(error.response.data.message);
  }
});
</script>