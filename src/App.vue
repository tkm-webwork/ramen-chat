<template>
  <v-app fluid>
    <!-- header -->
    <Header></Header>
    <!-- main -->
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <!-- footer -->
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/style.css";
</style>
