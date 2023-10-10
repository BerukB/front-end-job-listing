<script setup>
import { ref, onMounted, reactive } from "vue";
import { watch } from 'vue';
import { usePageStore } from "../stores/pageStore";

const pageStore = usePageStore();
const selectedOption = ref('');
const selectedOptionAD = ref('');

watch(selectedOption, (newValue) => {
  console.log('Clicked button:', newValue);
  // console.log("sortval:",sortVal)
  pageStore.setSort(newValue);

});
watch(selectedOptionAD, (newValue) => {
  console.log('Clicked button:', newValue);
  if(selectedOption.value){
    const sortParam = newValue + selectedOption.value ;
    pageStore.setSort(sortParam);
  }
  
});

// Function to unselect the radio button
const unselectRadioButton = () => {
  selectedOption.value = '';
  selectedOptionAD.value = '';
};

</script>

<template>

  <div id="sort" class="container flex items-center mx-auto mt-4 mb-14 md:mb-8">
    <button class="py-1 px-2 bg-secondary text-white font-bold rounded-lg">
    Sort 
  </button>
    <div class="">
      <ul class="flex items-center space-x-3 ">
        <div class="flex flex-col">
          <li>
            <input type="radio" name="ascdesc" id="asc" class="hidden peer/asc" value="" v-model="selectedOptionAD" />
            <label for="asc"
              class="mb-3 peer-checked/asc:text-secondary peer-checked/asc:bg-primary peer-checked/asc:border-0">
              <img class="content-fill cursor-pointer" src="../../images/caret-up-fill.svg" alt="">
            </label>


          </li>
          <li>
            <input type="radio" name="ascdesc" value="-" id="desc" class="hidden peer/desc" v-model="selectedOptionAD" />
            <label for="desc"
              class="mb-3 peer-checked/desc:text-secondary peer-checked/desc:bg-primary peer-checked/desc:border-0"><img
                class="conten-fill cursor-pointer" src="../../images/caret-down-fill.svg" alt=""></label>

          </li>
        </div>

        <li>
          <input type="radio" name="option" id="option1" class="hidden peer/option1" value="company"
            v-model="selectedOption" />
          <label for="option1"
            class="sortSlide peer-checked/option1:text-secondary peer-checked/option1:bg-primary peer-checked/option1:border-0">Company</label>
        </li>
        <li>
          <input type="radio" name="option" value="postedAt" id="option2" class="hidden peer/option2"
            v-model="selectedOption" />
          <label for="option2"
            class="sortSlide peer-checked/option2:text-secondary peer-checked/option2:bg-primary peer-checked/option2:border-0">Date</label>
        </li>
        <li>
          <input type="radio" name="option" id="option3" value="location" class="hidden peer/option3"
            v-model="selectedOption" />
          <label for="option3"
            class="sortSlide peer-checked/option3:text-secondary peer-checked/option3:bg-primary peer-checked/option3:border-0">Location</label>
        </li>
        <li>
            <button
            @click="unselectRadioButton"
              class="">
              <img class="content-fill w-8 hover:bg-red" src="../../images/x.svg" alt="">
            </button>


          </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sortSlide {
  @apply box-border py-1 px-2 mb-3 sort-button bg-white text-primary border-2 border-secondary hover:border-0 hover:bg-primary hover:text-secondary rounded-md font-bold cursor-pointer;
}

.sort-button {}
</style>
