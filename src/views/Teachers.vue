<template>
  <div>
    <b-table :fields="fields" :items="teachers">
      <template #cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/teachers/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import teachers from "@/data/teachers";
export default {
  data() {
    return {
      teachers,
    };
  },
};
</script>

<style></style>
