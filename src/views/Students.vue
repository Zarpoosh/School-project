<template>
  <div>
    <b-table :fields="fields" :items="students">
      <template #cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/single/students/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "pinia";
// import students from "../data/students";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState( ['students'])
  },
};
</script>

<style scoped></style>
