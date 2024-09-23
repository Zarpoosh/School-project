<template>
  <div>
    {{ $route.params.id }}
    {{ $route.params.cat }}

    <button @click="aliclick">Click me :)</button>
  </div>
</template>

<script>
import router from "@/router";
import { mapState } from "pinia";
export default {
  data() {
    return { single: {} };
  },
  computed: {
    ...mapState(["teachers", "students"]),
  },
  mounted() {
    const user = this[this.$route.params.cat][this.$route.params.id];
    this.single = user;
  },
  methods: {
    aliclick() {
      // router.push("/");
      router.go("-1");
    },
  },
};
</script>

<style></style>
