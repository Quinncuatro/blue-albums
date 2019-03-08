<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Teko', sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
