<template>
  <div>
    {{ $route.params.id }}
    {{ $route.params.cat }}

    <button @click="aliclick">Click me :)</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    aliclick() {
      // console.log("click ali")
      // router.push("/");
      router.go("-1")
    },
  },
};
</script>

<style></style>
