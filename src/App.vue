<template>
  <div id="app">
    <div class="menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/teachers">Teachers</router-link> |
      <router-link to="/students">Students</router-link>
    </div>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
<script></script>

<style>
.menu {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
