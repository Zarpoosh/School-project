<template>
  <div>
    <b-table :fields="fields" :items="teachers">
      <template #cell(name)="data">
        <router-link :to="`/single/teachers/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "pinia";
// import teachers from "../data/teachers";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['teachers'])
  },
};
</script>

<style scoped></style>
