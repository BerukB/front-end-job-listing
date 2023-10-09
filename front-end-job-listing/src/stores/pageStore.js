import { defineStore } from "pinia";

export const usePageStore = defineStore("page", {
  state: () => ({
    pageLimit: 10,
    pageNumber: 1,
    sort: "",
    filter: {},
  }),
  getters: {
    getSort() {
      return this.sort;
    },
    getPageLimit() {
      return this.pageLimit;
    },
    getPageNumber() {
      return this.pageNumber;
    },
    getFilters() {
      return this.filter;
    }
  },
  actions: {
    setPageLimit(limit) {
      this.pageLimit = limit;
    },
    setPageNumber(number) {
      this.pageNumber = number;
    },
    setSort(sortval) {
      this.sort = sortval;
    },
    setFilter(newFilter) {
      this.filter = { ...this.filter, ...newFilter };
    },
  },
});
