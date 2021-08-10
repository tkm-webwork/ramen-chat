<template>
  <div>
    <!-- main -->
    <v-app-bar app color="gray darken-4" dark>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <!-- title部分 -->
      <router-link to="/">
        <v-app-bar-title to="/">
          {{ title }}
        </v-app-bar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <!-- menu -->
      <div class="hidden-md-and-up">
        <v-btn color="#2195F2" @click="drawer = !drawer">Menu</v-btn>
      </div>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <!-- login  -->
        <v-btn color="#2195F2" to="/sign-in">ログイン</v-btn>
        <!-- signin -->
        <v-btn
          color="#FF5252"
          to="/join"
          >新規登録</v-btn
        >
      </div>
      <div v-else class="hidden-sm-and-down">
        <!-- profile -->
        <v-btn color="#2195F2" to="/profile">投稿履歴</v-btn>
        <!-- logout -->
        <v-btn color="#FF5252" @click="logout"
          >ログアウト</v-btn
        >
      </div>
    </v-app-bar>
    <!-- drawer -->
    <v-navigation-drawer app v-model="drawer" class="gray lighten-3" dark>
      <v-list>
        <div v-if="!isAuthenticated">
          <!-- login -->
          <v-btn to="/sign-in" color="#2195F2">ログイン</v-btn>
          <!-- signin -->
          <v-btn
            color="#FF5252"
            to="/join"
            >新規登録</v-btn
          >
        </div>
        <div v-else>
          <!-- profile -->
          <v-btn to="/profile" color="#2195F2">投稿履歴</v-btn>
          <!-- logout -->
          <v-btn color="#FF5252" @click="logout"
            >ログアウト</v-btn
          >
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Ramen chat",
      drawer: false
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>