<script setup>
import { defineProps } from 'vue';
import moment from 'moment';

const props = defineProps({
    job: Object,
});

const getRelativeTime = (date) => {
  const postedAt = moment(date);
  return postedAt.fromNow();
};
</script>


<template>
    <div class="container mx-auto mb-5">
        <article id="job-one"
            class="  bg-white flex flex-col space-y-2 px-6 pb-6 rounded-md drop-shadow-xl md:flex-row md:justify-between md:px-7 md:py-3 md:items-center">

            <img :src="job['logo']" class=" -mt-7 w-14 h-14 object-contain rounded-full md:mt-0 md:mr-4" alt="">

            <section class="flex flex-col md:flex-1 md:justify-between md:flex-row">
                <section class=" mb-4 w-80">
                    <div class="flex justify-between mb-2 pr-24 md:pr-0 md:space-x-3">
                        <span class="text-base text-primary font-bold">{{ job['company'] }}</span>
                        <div class="flex space-x-2 text-white font-regular">
                            <a v-show="job['isnew']" class="  pt-1 px-2 bg-secondary rounded-full">NEW!</a>
                            <a v-if="job['featured']" class="pt-1 px-2 bg-primary rounded-full">FEATURED</a>
                        </div>
                    </div>
                    <div class="font-bold">
                        <h3 class="hover:text-desaturatedDarkCyan text-lg mb-1 ">{{ job['position'] }}</h3>
                        <ul class="  text-darkGrayishCyan flex list-disc list-inside space-x-2">

                            <li class="list-none"> {{getRelativeTime(job['postedAt']) }}</li>
                            <li v-show="job['contract']" class="">{{ job['contract'] }}</li>
                            <li class="">{{ job['location'] }}</li>

                        </ul>

                    </div>
                </section>
                <div class="mb-5 md:hidden">
                    <hr>
                </div>
                <div class="flex space-x-4 flex-wrap pr-24 md:pr-0 md:flex-nowrap md:items-center md:ml-5">
                    <!-- Role -->
                    <a class="p-2 mb-3 filter-button bg-white text-primary border-2 border-secondary hover:border-0 
                        hover:bg-primary hover:text-secondary rounded-md font-bold cursor-pointer">{{job['role']}}</a>
                         <!-- level -->
                    <a class="p-2 mb-3 filter-button bg-white text-primary border-2 border-secondary hover:border-0 
                        hover:bg-primary hover:text-secondary rounded-md font-bold cursor-pointer">{{job['level']}}</a>
                         <!-- language -->
                    <a 
                    v-for="language in job['languages']"
                    class="p-2 mb-3 filter-button bg-white text-primary border-2 border-secondary hover:border-0 
                        hover:bg-primary hover:text-secondary rounded-md font-bold cursor-pointer">{{ language }}</a>
                         <!-- tools -->
                    <a 
                    v-for="tool in job['tools']"
                    class="p-2 mb-3 filter-button bg-white text-primary border-2 border-secondary hover:border-0 
                        hover:bg-primary hover:text-secondary rounded-md font-bold cursor-pointer">{{tool}}</a>

                </div>
            </section>

        </article>
    </div>
</template>



