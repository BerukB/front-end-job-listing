<template>
  <div v-if="isAuthenticated">
    <h1 class="text-3xl font-bold underline">List of Jobs!</h1>
    <SortBy />
    <JobCom v-for="job in jobs" :key="job._id" :job="job" />
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import axios from "axios";
import { useAuthStore } from "../stores/authStore";
import JobCom from "../components/JobCom.vue";
import SortBy from "../components/SortBy.vue";
import { usePageStore } from "../stores/pageStore";


const pageStore = usePageStore();
const sortval = pageStore.getSort;

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;
console.log("JLP sortval:", sortval)

const jobs = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/jobs', {
      params: {
        pageNumber: pageStore.pageNumber,
        pageLimit: pageStore.pageLimit,
        sort: pageStore.sort,
        ...pageStore.filter,
      },
    });
    jobs.value = response.data.jobs;
  } catch (error) {
    alert(error.response.data.message);
  }
};

watch(() => pageStore.pageNumber, fetchData);
watch(() => pageStore.pageLimit, fetchData);
watch(() => pageStore.sort, fetchData);
watch(() => pageStore.filter, fetchData);

onMounted(fetchData);

</script>
