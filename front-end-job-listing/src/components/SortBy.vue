<script setup>
import { ref, onMounted, reactive } from "vue";
import { watch } from 'vue';
import { usePageStore } from "../stores/pageStore";

const pageStore = usePageStore();
const selectedOption = ref('');
const sortVal = pageStore.getSort;
console.log("sortval:",sortVal)
watch(selectedOption, (newValue) => {
  console.log('Clicked button:', newValue);
  // console.log("sortval:",sortVal)
    pageStore.setSort(newValue);

  });

</script>

<template>
  <div id="sort" class="container mx-auto mt-4 mb-14 md:mb-8">
    <div>
      <ul class="flex space-x-3">
        <li>
          <input
            type="radio"
            name="option"
            id="option1"
            class="hidden peer/option1"
            value="company"
            v-model="selectedOption"
          />
          <label
            for="option1"
            class="sortSlide peer-checked/option1:text-secondary peer-checked/option1:bg-primary peer-checked/option1:border-0"
            >Company</label
          >
        </li>
        <li>
          <input
            type="radio"
            name="option"
            value="postedAt"
            id="option2"
            class="hidden peer/option2"
            v-model="selectedOption"
          />
          <label
            for="option2"
            class="sortSlide peer-checked/option2:text-secondary peer-checked/option2:bg-primary peer-checked/option2:border-0"
          >Date</label>
        </li>
        <li>
          <input
            type="radio"
            name="option"
            id="option3"
            value="location"
            class="hidden peer/option3"
            v-model="selectedOption"
          />
          <label
            for="option3"
            class="sortSlide peer-checked/option3:text-secondary peer-checked/option3:bg-primary peer-checked/option3:border-0"
            >Location</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sortSlide {
  @apply py-1 px-2 mb-3 sort-button bg-white text-primary border-2
         border-secondary hover:border-0 hover:bg-primary hover:text-secondary 
         rounded-md font-bold cursor-pointer;
}
.sort-button {
}
</style>
