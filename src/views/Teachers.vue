<template>
  <div>
    <b-table striped hover :items="teachers"></b-table>
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
