<template>
  <div v-if="isAuthenticated">
    <h1 class="container mx-auto text-center text-3xl font-bold underline">List of Jobs!</h1>
    <SortBy />
    <JobCom v-for="job in jobs" :key="job._id" :job="job" />
    <PaginationCom/>
  </div>
</template>

<script setup>
import JobCom from "../components/JobCom.vue";
import SortBy from "../components/SortBy.vue";
import PaginationCom from "../components/PaginationCom.vue";
import axios from "axios";
import { ref, onMounted, watch, computed } from "vue";
import { useAuthStore } from "../stores/authStore";
import { usePageStore } from "../stores/pageStore";


const pageStore = usePageStore();
const pageLimit = computed(()=>pageStore.getPageLimit);
const pageNumber = computed(()=>pageStore.getPageLimit);

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;

const jobs = ref([]);
const totalJobs = ref('');

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/jobs', {
      params: {
        pageNumber: pageStore.getPageNumber,
        pageLimit: pageStore.getPageLimit,
        sort: pageStore.getSort,
        ...pageStore.getFilters,
      },
    });
    jobs.value = response.data.jobs;
    totalJobs.value = response.data.count;
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
